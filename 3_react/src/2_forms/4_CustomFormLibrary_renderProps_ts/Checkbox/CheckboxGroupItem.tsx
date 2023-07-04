import React, { forwardRef, Ref, ReactNode } from 'react';
import Checkbox from './Checkbox';
import LabelWrapper from '../Label/LabelWrapper';

interface CheckboxGroupItemPropsI {
  id: string;
  name: string;
  label: ReactNode;
  ariaLabel: string;
  checked: boolean;
  value: string;
  onChangeFn: (value: string) => void;
}

const CheckboxGroupItem = forwardRef(
  (
    {
      id = '',
      name = '',
      label = '',
      ariaLabel = '',
      checked = false,
      value = '',
      onChangeFn = () => {}
    }: CheckboxGroupItemPropsI,
    ref: Ref<HTMLInputElement>
  ) => {
    CheckboxGroupItem.displayName = 'CheckboxGroupItem';

    return (
      <>
        <div className="flex items-center">
          <Checkbox
            ref={ref}
            id={id}
            name={name}
            ariaLabel={ariaLabel}
            checked={checked}
            value={value}
            onChangeFn={onChangeFn}
            className="cursor-pointer accent-blue-600 outline-1 outline-blue-600"
          />
        </div>

        <LabelWrapper htmlFor={id} className="ml-2" isAsterisk={false}>
          {label}
        </LabelWrapper>
      </>
    );
  }
);
export default CheckboxGroupItem;
