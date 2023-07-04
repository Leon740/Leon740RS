import React, { ReactNode } from 'react';
import Label from './Label';

interface LabelWrapperPropsI {
  htmlFor: string;
  className?: string;
  children: ReactNode;
  isAsterisk: boolean;
}

function LabelWrapper({
  htmlFor = '',
  className = '',
  children,
  isAsterisk = false
}: LabelWrapperPropsI): JSX.Element {
  return (
    <Label
      htmlFor={htmlFor}
      className={`cursor-pointer select-none ${className}`}
      isAsterisk={isAsterisk}
      asteriskClassName="text-rose-500"
    >
      <>{children}</>
    </Label>
  );
}
export default LabelWrapper;
