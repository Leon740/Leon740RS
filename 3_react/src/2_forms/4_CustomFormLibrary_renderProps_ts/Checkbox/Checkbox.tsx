import React, { forwardRef, Ref } from 'react';

interface CheckboxPropsI {
  id: string;
  name: string;
  ariaLabel: string;
  disabled?: boolean;
  checked: boolean;
  value: string;
  onChangeFn: (value: string) => void;
  className: string;
}

const Checkbox = forwardRef(
  (
    {
      id = '',
      name = '',
      ariaLabel = '',
      disabled = false,
      checked = false,
      value = '',
      onChangeFn = () => {},
      className = ''
    }: CheckboxPropsI,
    ref: Ref<HTMLInputElement>
  ) => {
    Checkbox.displayName = `Checkbox${name[0].toUpperCase()}${name.substring(1)}`;

    return (
      <input
        ref={ref}
        id={id}
        type="checkbox"
        name={name}
        aria-label={ariaLabel}
        disabled={disabled}
        checked={checked}
        value={value}
        onChange={(event) => onChangeFn(event.target.value)}
        className={className}
      />
    );
  }
);

export default Checkbox;
