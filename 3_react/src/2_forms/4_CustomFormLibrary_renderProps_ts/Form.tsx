import React, { useState, useCallback, FormEvent, useRef } from 'react';

function fillFieldsFn<T extends string | boolean>(initialValues: object, value: T) {
  // const filledInputs = {};
  const filledInputs: { [key: string]: T } = {};

  Object.keys(initialValues).forEach((name: string) => {
    filledInputs[name] = value;
  });

  return filledInputs;
}

type ObjectStringT = {
  [key: string]: string;
};
type ObjectBooleanT = {
  [key: string]: boolean;
};

interface renderFormI {
  values: ObjectStringT;
  touched: ObjectBooleanT;
  errors: ObjectStringT;
  onChangeFn: (name: string, value: string) => void;
}

interface FormPropsI {
  initialValues: ObjectStringT;
  validationSchema: { fields: ObjectStringT };
  handleSubmitFn: (formData: ObjectStringT) => void;
  handleResetFn: () => void;
  renderForm: (props: renderFormI) => JSX.Element;
}

function Form({
  initialValues,
  validationSchema,
  handleSubmitFn,
  handleResetFn,
  renderForm
}: FormPropsI) {
  const [valuesSt, setValuesSt] = useState<ObjectStringT>(() => initialValues);
  const [touchedSt, setTouchedSt] = useState<ObjectBooleanT>(() =>
    fillFieldsFn(initialValues, false)
  );
  const [errorsSt, setErrorsSt] = useState<ObjectStringT>(() => fillFieldsFn(initialValues, ''));

  const validateInputFn = async (name: string, value: string) => {
    if (value.length > 1) {
      setTouchedSt((prev) => ({ ...prev, [name]: true }));

      const inputData = await validationSchema.fields[name]
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .validate(value, { abortEarly: false })
        .catch((error: { message: string }) => {
          // console.log(error);
          setErrorsSt((prev) => ({ ...prev, [name]: error.message }));
        });

      if (inputData) {
        setErrorsSt((prev) => ({ ...prev, [name]: '' }));
      }
    } else {
      setTouchedSt((prev) => ({ ...prev, [name]: false }));
    }
  };

  const onChangeFn = (name: string, value: string) => {
    setValuesSt((prev) => ({ ...prev, [name]: value }));
    validateInputFn(name, value);
  };

  function onResetFn() {
    setValuesSt(initialValues);
    setTouchedSt(fillFieldsFn(initialValues, false));
    setErrorsSt(fillFieldsFn(initialValues, ''));
    handleResetFn();
  }

  const formRf = useRef<HTMLFormElement>(null);

  const onSubmitFn = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setTouchedSt(fillFieldsFn(initialValues, true));

      const formData = await validationSchema
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .validate(valuesSt, { abortEarly: false })
        .catch((err: { message: string; inner: { path: string; message: string }[] }) => {
          const errors: object = err.inner.reduce((acc, error) => {
            return {
              ...acc,
              [error.path]: error.message
            };
          }, {});

          setErrorsSt((prev) => ({ ...prev, ...errors }));
        });

      if (formData && formRf.current) {
        handleSubmitFn(formData);
        formRf.current.submit();
        onResetFn();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [valuesSt]
  );

  return (
    <form noValidate onSubmit={(event) => onSubmitFn(event)} onReset={onResetFn} ref={formRf}>
      {renderForm({ values: valuesSt, touched: touchedSt, errors: errorsSt, onChangeFn })}
    </form>
  );
}
export default Form;
