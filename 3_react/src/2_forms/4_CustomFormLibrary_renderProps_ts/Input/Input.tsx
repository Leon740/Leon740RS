import React, { forwardRef, Ref, ChangeEvent } from 'react';

interface InputPropsI {
  name: string;
  type: 'text' | 'textarea' | 'email' | 'password';
  placeholder: string;
  ariaLabel: string;
  disabled?: boolean;
  className: string;
  value: string;
  onChangeFn: (name: string, value: string) => void;
}

const Input = forwardRef(
  (
    {
      name = '',
      type = 'text',
      placeholder = '',
      ariaLabel = '',
      disabled = false,
      className = '',
      value = '',
      onChangeFn = () => {}
    }: InputPropsI,
    ref: Ref<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    Input.displayName = `Input__${name[0].toUpperCase()}${name.substring(1)}`;

    const Tag = type === 'textarea' ? 'textarea' : 'input';

    return (
      <Tag
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={ref}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-label={ariaLabel}
        disabled={disabled}
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
          onChangeFn(name, event.target.value)
        }
        className={className}
      />
    );
  }
);

export default Input;
