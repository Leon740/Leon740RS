import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import CarsList from '../Components/Car/CarsList';
import CarMark from '../Components/Car/CarMark';
import CarModel from '../Components/Car/CarModel';
import BackButton from '../Components/BackButton/BackButton';
import NestedRoutes from '../2_nested_routes/NestedRoutes';
import OutletExample from '../3_Outlet/OutletExample';
import NotFoundRoute from '../1_not_found_route/NotFoundRoute';
import NavLinkWrapper from './NavLinkWrapper';

function NavLinkExample() {
  return (
    <div className="max-w-7xl m-auto pl-2 pr-2">
      {/* BrowserRouter sets context */}
      <BrowserRouter>
        {/* links to pages */}
        <header className="flex justify-between pt-5 pb-5 border-b-2 border-black">
          <nav className="flex flex-col">
            {/* end: don't highlight NavLink on active nested routes */}
            <NavLinkWrapper to="/carslist_default" end>
              CarsList_Default
            </NavLinkWrapper>
            <NavLinkWrapper to="/carslist_nested_routes">Carslist_Nested_Routes</NavLinkWrapper>
            <NavLinkWrapper to="/carslist_outlet">Carslist_Outlet</NavLinkWrapper>
            <NavLinkWrapper to="/">Home</NavLinkWrapper>
            <NavLinkWrapper to="/contact">Contact</NavLinkWrapper>
            <NavLinkWrapper to="/about">NotFound</NavLinkWrapper>
          </nav>

          <BackButton />
        </header>

        <main className="pt-5 pb-5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* not found route: 1st approach */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
            {/* not found route: 2nd approach */}
            <Route path="*" element={<NotFoundRoute />} />

            {/* nested routing */}
            <Route path="/carslist_default">
              <Route index element={<CarsList />} />
              <Route path=":mark" element={<CarMark />} />
              <Route path=":mark/:model" element={<CarModel />} />
            </Route>

            {/* nested routes */}
            <Route path="/carslist_nested_routes/*" element={<NestedRoutes />} />

            {/* outlet */}
            <Route path="/carslist_outlet/*" element={<OutletExample />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
export default NavLinkExample;
