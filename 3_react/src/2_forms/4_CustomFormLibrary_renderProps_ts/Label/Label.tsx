import React, { ReactNode } from 'react';

interface LabelPropsI {
  htmlFor: string;
  className: string;
  children: ReactNode;
  isAsterisk: boolean;
  asteriskClassName: string;
}

function Label({
  htmlFor = '',
  className = '',
  children,
  isAsterisk = false,
  asteriskClassName = ''
}: LabelPropsI): JSX.Element {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
      {isAsterisk && <span className={asteriskClassName}>&nbsp;&#42;</span>}
    </label>
  );
}
export default Label;
