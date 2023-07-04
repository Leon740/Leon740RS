import React, { forwardRef, Ref, ReactNode } from 'react';
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi';
import Input from './Input';
import LabelWrapper from '../Label/LabelWrapper';
import ErrorWrapper from '../Error/ErrorWrapper';

interface InputStatusPropsI {
  isValid: boolean;
}

function InputStatus({ isValid = false }: InputStatusPropsI): JSX.Element {
  return (
    <span
      className={`text-lg absolute top-1/2 -translate-y-1/2 right-4 ${
        isValid ? 'text-green-500' : 'text-rose-500'
      }`}
    >
      {isValid ? <BiCheckCircle /> : <BiErrorCircle />}
    </span>
  );
}

interface InputWrapperPropsI {
  name: string;
  label: ReactNode;
  type: 'text' | 'textarea' | 'email' | 'password';
  placeholder: string;
  ariaLabel: string;
  isAsterisk: boolean;
  disabled?: boolean;
  description: string;
  icon?: JSX.Element;
  touched: boolean;
  error: string;
  value: string;
  onChangeFn: (name: string, value: string) => void;
}

const InputWrapper = forwardRef(
  (
    {
      name = '',
      label = '',
      type = 'text',
      placeholder = '',
      ariaLabel = '',
      isAsterisk = false,
      disabled = false,
      description,
      icon,
      touched = false,
      error = '',
      value = '',
      onChangeFn = () => {}
    }: InputWrapperPropsI,
    ref: Ref<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    InputWrapper.displayName = 'InputWrapper';

    const isTextarea: boolean = type === 'textarea';

    const isValid: boolean = touched && !error;
    const isInvalid: boolean = touched && !!error;

    return (
      <div className="my-8">
        <LabelWrapper htmlFor={name} className="block text-lg" isAsterisk={isAsterisk}>
          {label}
        </LabelWrapper>

        {description && <p className="text-md text-slate-400">{description}</p>}

        <div className="relative">
          {icon && (
            <span className="text-slate-500 absolute top-1/2 -translate-y-1/2 text-base left-4">
              {icon}
            </span>
          )}

          <Input
            ref={ref}
            name={name}
            type={type}
            placeholder={placeholder}
            ariaLabel={ariaLabel}
            disabled={disabled}
            value={value}
            onChangeFn={onChangeFn}
            className={`
              block w-full px-3 py-1.5 text-slate-400 text-lg my-2 border-2 border-slate-200 rounded-md
              ${icon ? 'pl-10' : ''}
              outline-0
              disabled:bg-slate-200 disabled:cursor-not-allowed
              ${!isInvalid && !isValid ? 'focus:border-blue-600' : ''}
              ${isInvalid ? 'border-rose-300' : ''}
              ${isValid ? 'border-green-300' : ''}
              ${isTextarea ? 'resize-y' : ''}
            `}
          />

          {touched && <InputStatus isValid={isValid} />}
        </div>

        {touched && error && <ErrorWrapper msg={error} />}
      </div>
    );
  }
);
export default InputWrapper;
