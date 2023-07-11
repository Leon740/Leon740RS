import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import CARS_DATA from './cars_data.json';

function CarsList(isOutlet = false) {
  return (
    <section>
      <h1 className="text-2xl">CarsList</h1>
      <ul className="mt-5 mb-5">
        {CARS_DATA.map((car) => (
          <li key={car.mark} className="mt-3 mb-3">
            <Link to={car.mark}>
              <h3 className="text-lg">{car.mark}</h3>
            </Link>

            <ul className="flex -ml-2 -mr-2">
              {car.models.map((model) => (
                <li key={model} className="ml-2 mr-2">
                  <Link to={`${car.mark}/${model}`}>{model}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {isOutlet ? <Outlet context={{ data: CARS_DATA }} /> : null}
    </section>
  );
}
export default CarsList;
