import React from 'react';
import Button from './Button';
import ButtonPropsI from './ButtonPropsI';

function ButtonWrapper({
  type = 'button',
  className = '',
  onClick = () => {},
  children
}: ButtonPropsI): JSX.Element {
  return (
    <Button
      type={type}
      className={`text-white px-3 py-1.5 rounded-md ${className}`}
      onClick={() => onClick()}
    >
      {children}
    </Button>
  );
}

export default ButtonWrapper;
