import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface INavLinkWrapperProps {
  to: string;
  children: ReactNode;
  className?: string;
  state?: object;
}

function LinkWrapper(props: INavLinkWrapperProps) {
  const { to = '', children = <></>, className = '', state = {} } = props;

  return (
    <Link {...props} className="flex">
      <span className={`px-8 py-8 ${className}`}>{children}</span>
    </Link>
  );
}
export default LinkWrapper;
