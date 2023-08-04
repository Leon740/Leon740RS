import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface INavLinkWrapperProps {
  to: string;
  children: ReactNode;
  className?: string;
}

function NavLinkWrapper({ to = '', children = <></>, className = '' }: INavLinkWrapperProps) {
  return (
    <NavLink to={to} className="flex">
      {({ isActive }) => (
        <span className={`px-8 py-8 ${className} ${isActive ? 'bg-slate-800' : ''}`}>
          {children}
        </span>
      )}
    </NavLink>
  );
}
export default NavLinkWrapper;
