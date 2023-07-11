import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CARS_DATA from './cars_data.json';

function CarMark() {
  const { mark } = useParams();
  const car = CARS_DATA.find((car) => car.mark === mark);

  return (
    <section className="pt-5 pb-5">
      <h2 className="text-2xl">{mark}</h2>
      <ul className="flex -ml-2 -mr-2">
        {car.models.map((model) => (
          <li key={model} className="ml-2 mr-2">
            <Link to={model}>{model}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default CarMark;
