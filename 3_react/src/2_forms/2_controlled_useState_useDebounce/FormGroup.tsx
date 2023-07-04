import React, { useEffect, useState, Dispatch, SetStateAction } from 'react';
import Form from 'react-bootstrap/Form';
import useDebounce from '../../1_hooks/5_useDebounce/useDebounce';

interface IFormGroupProps {
  name: string;
  label: string;
  type: string;
  value: string;
  onChangeFn: (name: string, value: string) => void;
  formReset: [boolean, Dispatch<SetStateAction<boolean>>];
}

interface IInput {
  name: string;
  value: string;
}

function FormGroup({
  name = '',
  label = '',
  type = 'text',
  value = '',
  onChangeFn = () => {},
  formReset
}: IFormGroupProps): JSX.Element {
  const [inputSt, setInputSt] = useState<IInput>({ name, value });
  const debouncedValue = useDebounce<string>(inputSt.value, 1000);

  // reset logic:
  // if (isFormResetSt)
  // clean (inputSt)
  // (isFormResetSt): true => false
  const [isFormResetSt, setIsFormResetSt] = formReset;

  useEffect(() => {
    // console.log(isFormResetSt);
    if (isFormResetSt) {
      setInputSt({ name, value: '' });
      setIsFormResetSt(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormResetSt]);

  useEffect(() => {
    onChangeFn(inputSt.name, debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={inputSt.value}
        onChange={(event) =>
          setInputSt({ name: event.target.name, value: event.target.value })
        }
      />
    </Form.Group>
  );
}

export default FormGroup;
