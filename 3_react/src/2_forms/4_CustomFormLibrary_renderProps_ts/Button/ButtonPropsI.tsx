import { ReactNode } from 'react';

export default interface ButtonPropsI {
  type: 'button' | 'submit' | 'reset';
  className: string;
  onClick?: () => void;
  children: ReactNode;
}
