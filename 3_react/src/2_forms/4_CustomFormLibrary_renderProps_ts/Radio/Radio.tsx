import React, { forwardRef, Ref } from 'react';

interface RadioPropsI {
  id: string;
  name: string;
  ariaLabel: string;
  checked: boolean;
  value: string;
  onChangeFn: (value: string) => void;
  className: string;
}

const Radio = forwardRef(
  (
    {
      id = '',
      name = '',
      ariaLabel = '',
      checked = false,
      value = '',
      onChangeFn = () => {},
      className = ''
    }: RadioPropsI,
    ref: Ref<HTMLInputElement>
  ) => {
    Radio.displayName = `Radio__${name[0].toUpperCase()}${name.substring(1)}`;

    return (
      <input
        ref={ref}
        id={id}
        name={name}
        type="radio"
        aria-label={ariaLabel}
        checked={checked}
        value={value}
        onChange={(event) => onChangeFn(event.target.value)}
        className={className}
      />
    );
  }
);
export default Radio;
