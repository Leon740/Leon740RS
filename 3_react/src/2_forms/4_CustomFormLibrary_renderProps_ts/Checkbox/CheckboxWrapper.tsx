import React, { useState, useEffect, useRef, forwardRef, Ref, ReactNode } from 'react';
import Checkbox from './Checkbox';
import LabelWrapper from '../Label/LabelWrapper';
import ErrorWrapper from '../Error/ErrorWrapper';

interface CheckboxWrapperPropsI {
  id: string;
  name: string;
  label: ReactNode;
  ariaLabel: string;
  isAsterisk: boolean;
  disabled?: boolean;
  description: JSX.Element;
  touched: boolean;
  error: string;
  value: string;
  onChangeFn: (name: string, value: string) => void;
}

// eslint-disable-next-line prettier/prettier
const CheckboxWrapper = forwardRef(
  (
    {
      id = '',
      name = '',
      label = '',
      ariaLabel = '',
      isAsterisk = false,
      disabled = false,
      description,
      touched = false,
      error = '',
      value = '',
      onChangeFn = () => {}
    }: CheckboxWrapperPropsI,
    ref: Ref<HTMLInputElement>
  ) => {
    CheckboxWrapper.displayName = 'CheckboxWrapper';

    const isMountedRf = useRef<boolean>(false);

    // const checkboxOnChangeFn = (checkboxValue) => onChangeFn(name, checkboxValue);
    const [selectedCheckboxSt, setSelectedCheckboxSt] = useState<string>(value);

    const checkboxOnChangeFn = (checkboxValue: string): void => {
      if (checkboxValue === 'off') {
        setSelectedCheckboxSt('on');
      } else {
        setSelectedCheckboxSt('off');
      }
    };

    useEffect(() => {
      if (isMountedRf.current) {
        onChangeFn(name, selectedCheckboxSt);
      } else {
        isMountedRf.current = true;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCheckboxSt]);

    return (
      <>
        <div className="flex items-start">
          <div>
            <Checkbox
              ref={ref}
              id={id}
              name={name}
              ariaLabel={ariaLabel}
              disabled={disabled}
              checked={selectedCheckboxSt === 'on'}
              value={selectedCheckboxSt}
              onChangeFn={checkboxOnChangeFn}
              className="cursor-pointer accent-blue-600 outline-1 outline-blue-600"
            />
          </div>

          <div className="ml-2">
            <LabelWrapper htmlFor={id} isAsterisk={isAsterisk}>
              {label}
            </LabelWrapper>

            {description && <p className="text-md text-slate-400">{description}</p>}
          </div>
        </div>

        {touched && error && <ErrorWrapper msg={error} />}
      </>
    );
  }
);
export default CheckboxWrapper;
