import React from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';

function CarMark() {
  const { mark } = useParams();
  const { data } = useOutletContext();
  const car = data.find((car) => car.mark === mark);
  console.log('CarMark', car);

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
