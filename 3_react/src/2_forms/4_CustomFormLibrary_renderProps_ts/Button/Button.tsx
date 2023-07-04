import React from 'react';
import ButtonPropsI from './ButtonPropsI';

function Button({
  type = 'button',
  className = '',
  onClick = () => {},
  children
}: ButtonPropsI): JSX.Element {
  return (
    <button type={type} className={className} onClick={() => onClick()}>
      {children}
    </button>
  );
}

export default Button;
