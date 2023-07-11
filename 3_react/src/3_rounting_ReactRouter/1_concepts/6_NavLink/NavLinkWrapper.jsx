import React from 'react';
import { NavLink } from 'react-router-dom';

function NavLinkWrapper(props) {
  const { className = '', to = '', children } = props;
  return (
    <NavLink to={to} {...props}>
      {({ isActive, isPending }) => (
        <span className={`ml-2 mr-2 block ${className} ${isActive ? 'text-rose-600' : ''}`}>
          {children} {isActive ? 'isActive' : ''}
          {isPending ? 'isPending' : ''}
        </span>
      )}
    </NavLink>
  );
}
export default NavLinkWrapper;
