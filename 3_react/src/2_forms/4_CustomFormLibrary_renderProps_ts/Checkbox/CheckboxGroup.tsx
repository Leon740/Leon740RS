import React, { useState, useEffect, useRef, forwardRef, Ref, ReactNode } from 'react';
import LabelWrapper from '../Label/LabelWrapper';
import CheckboxGroupItem from './CheckboxGroupItem';
import ErrorWrapper from '../Error/ErrorWrapper';

interface CheckboxGroupPropsI {
  name: string;
  label: ReactNode;
  isAsterisk: boolean;
  description: string;
  options: string[];
  touched: boolean;
  error: string;
  value: string;
  onChangeFn: (name: string, value: string) => void;
}

// eslint-disable-next-line prettier/prettier
const CheckboxGroup = forwardRef(
  (
    {
      name = '',
      label = '',
      isAsterisk = false,
      description,
      options = [],
      touched = false,
      error = '',
      value = '',
      onChangeFn = () => {}
    }: CheckboxGroupPropsI,
    ref: Ref<HTMLInputElement>
  ) => {
    CheckboxGroup.displayName = 'CheckboxGroup';

    const isMountedRf = useRef<boolean>(false);

    // 1 no separ
    // 2 empty
    const [selectedCheckboxesSt, setSelectedCheckboxesSt] = useState<string[]>(
      value.length > 0 ? value.split(', ') : []
    );

    const checkboxGroupOnChangeFn = (checkboxValue: string) => {
      console.log(checkboxValue);
      if (selectedCheckboxesSt.includes(checkboxValue)) {
        setSelectedCheckboxesSt((prev: string[]) =>
          prev.filter((value: string) => value !== checkboxValue)
        );
      } else {
        setSelectedCheckboxesSt((prev: string[]) => [
          ...prev,
          // ...prev.filter((value: string) => value.length > 0),
          checkboxValue
        ]);
      }
    };

    // const str = 'driving, reading, surfing';

    useEffect(() => {
      if (isMountedRf.current) {
        onChangeFn(name, selectedCheckboxesSt.join(', '));
      } else {
        isMountedRf.current = true;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCheckboxesSt]);

    return (
      <div className="my-8">
        <LabelWrapper htmlFor={name} isAsterisk={isAsterisk}>
          {label}
        </LabelWrapper>

        {description && <p className="text-md text-slate-400">{description}</p>}

        <ul className="flex items-center my-2 -mx-2">
          {options.map((option) => (
            <li className="flex mx-2" key={option}>
              <CheckboxGroupItem
                ref={ref}
                id={option}
                name={name}
                label={option}
                ariaLabel={`${option} checkbox`}
                checked={selectedCheckboxesSt.includes(option)}
                value={option}
                onChangeFn={checkboxGroupOnChangeFn}
              />
            </li>
          ))}
        </ul>

        {touched && error && <ErrorWrapper msg={error} />}
      </div>
    );
  }
);
export default CheckboxGroup;
