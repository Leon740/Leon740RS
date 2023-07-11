import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function NotFoundPage() {
  const navigate = useNavigate();
  // console.log(navigate);

  const location = useLocation();

  return (
    <section>
      <h1>NotFoundPage</h1>
      <button
        type="button"
        className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
        onClick={() => navigate('/', { state: location.pathname })}
      >
        HomePage
      </button>
      <button
        type="button"
        className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
        onClick={() => navigate('/contact')}
      >
        Contact
      </button>
    </section>
  );
}
export default NotFoundPage;
