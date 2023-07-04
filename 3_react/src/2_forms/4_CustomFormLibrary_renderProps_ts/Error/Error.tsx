import React from 'react';
import ErrorPropsI from './ErrorPropsI';

function Error({ as = 'p', className = '', msg = '' }: ErrorPropsI): JSX.Element {
  const Tag = as;

  return <Tag className={className}>{`${msg[0].toUpperCase()}${msg.substring(1)}`}</Tag>;
}
export default Error;
