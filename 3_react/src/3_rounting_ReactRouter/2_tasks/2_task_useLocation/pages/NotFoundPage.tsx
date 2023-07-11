import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface INotFoundPageProps {
  isRedirect: boolean;
  to: string;
}

function NotFoundPage({ isRedirect = false, to = '' }: INotFoundPageProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isRedirect) {
      setTimeout(() => {
        navigate(to);
      }, 1000);
    }
  }, []);

  return (
    <section>
      <h1 className="text-4xl my-16">NotFoundPage</h1>

      {isRedirect ? <h2 className="text-2xl my-8">You are being redirected to {to}</h2> : null}

      <Link to="/" className="px-4 py-4 bg-slate-800 rounded-lg">
        HomePage
      </Link>
    </section>
  );
}
export default NotFoundPage;
