import React from 'react';
import Error from './Error';
import ErrorPropsI from './ErrorPropsI';

function ErrorWrapper({ as = 'p', className = '', msg = '' }: ErrorPropsI): JSX.Element {
  return <Error as={as} className={`text-rose-500 ${className}`} msg={msg} />;
}
export default ErrorWrapper;
