import React, { forwardRef, Ref, Dispatch, SetStateAction, ReactNode } from 'react';
import LabelWrapper from '../Label/LabelWrapper';
import Radio from './Radio';

interface RadioGroupItem {
  id: string;
  name: string;
  label: ReactNode;
  ariaLabel: string;
  checked: boolean;
  value: string;
  onChangeFn: Dispatch<SetStateAction<string>>;
}

const RadioGroupItem = forwardRef(
  (
    {
      id = '',
      name = '',
      label = <></>,
      // eslint-disable-next-line prettier/prettier
      ariaLabel = '',
      checked = false,
      value = '',
      onChangeFn = () => {}
    }: RadioGroupItem,
    ref: Ref<HTMLInputElement>
  ) => {
    RadioGroupItem.displayName = 'RadioGroupItem';

    return (
      <>
        <div className="flex items-center">
          <Radio
            ref={ref}
            id={id}
            name={name}
            ariaLabel={ariaLabel}
            checked={checked}
            value={value}
            onChangeFn={onChangeFn}
            className={`
            appearance-none cursor-pointer
            w-4 h-4 rounded-full
            focus:border-4 focus:border-blue-500
            ${checked ? 'border-4 border-blue-500' : 'border-2 border-slate-300 '}
          `}
          />
        </div>

        <LabelWrapper htmlFor={id} className="ml-2" isAsterisk={false}>
          {label}
        </LabelWrapper>
      </>
    );
  }
);
export default RadioGroupItem;
