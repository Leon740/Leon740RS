import React from 'react';
import { BrowserRouter, Link, useRoutes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import CarsList from '../Components/Car/CarsList';
import CarMark from '../Components/Car/CarMark';
import CarModel from '../Components/Car/CarModel';
import NotFoundRoute from '../1_not_found_route/NotFoundRoute';
import BackButton from '../Components/BackButton/BackButton';
import NestedRoutes from '../2_nested_routes/NestedRoutes';
import OutletExample from '../3_Outlet/OutletExample';

// === Concept
// AppRoutes should be wrapped in <Router>
function AppRoutesContainer() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  // === Concept
  // create (render) element based on the object
  const ROUTES = [
    {
      path: '/',
      element: <HomePage />,
      id: 0,
      label: 'Home'
    },
    {
      path: '/contact',
      element: <ContactPage />,
      id: 1,
      label: 'Contact'
    },
    {
      // not found route
      path: '*',
      element: <NotFoundRoute />,
      id: 2,
      label: 'Not_Found'
    },
    {
      path: '/carslist_default',
      element: <CarsList />,
      id: 3,
      label: 'CarsList_Default',
      children: [
        {
          path: ':mark',
          element: <CarMark />
        },
        {
          path: ':mark/:model',
          element: <CarModel />
        }
      ]
    },
    {
      // nested_routes
      path: '/carslist_nested_routes/*',
      element: <NestedRoutes />,
      id: 4,
      label: 'Carslist_Nested_Routes'
    },
    {
      // outlet
      path: '/carslist_outlet/*',
      element: <OutletExample />,
      id: 5,
      label: 'Carslist_Outlet'
    }
  ];

  const routesElement = useRoutes(ROUTES);

  return (
    <div className="max-w-7xl m-auto pl-2 pr-2">
      <header className="flex justify-between pt-5 pb-5 border-b-2 border-black">
        <nav className="-ml-2 -mr-2">
          {/* links to pages */}
          {ROUTES.map(({ id, path, label }) => (
            <Link key={id} to={path.replace('/*', '')} className="ml-2 mr-2">
              {label}
            </Link>
          ))}
        </nav>

        <BackButton />
      </header>

      {/* routes */}
      <main className="pt-5 pb-5">{routesElement}</main>
    </div>
  );
}
export default AppRoutesContainer;
