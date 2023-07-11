import React from 'react';
import { Link } from 'react-router-dom';

function LinkWrapper(props) {
  const { className = '', to = '', children } = props;
  return (
    <Link to={to} className={`ml-2 mr-2 ${className}`} {...props}>
      {children}
    </Link>
  );
}
export default LinkWrapper;
