import React, { useState } from 'react';
import { useParams, Link, useOutletContext, useSearchParams } from 'react-router-dom';

function CarMark() {
  const { mark } = useParams();
  const { data } = useOutletContext();
  const car = data.find((car) => car.mark === mark);

  const [searchParams, setSearchParams] = useSearchParams({ model: 'Mark' });
  const newModel = searchParams.get('model');

  return (
    <section className="pt-5 pb-5">
      <h2 className="text-2xl">{mark}</h2>

      <ul className="flex -ml-2 -mr-2">
        {car.models.map((model) => (
          <li key={model} className="ml-2 mr-2">
            <Link to={model}>{model}</Link>
          </li>
        ))}
        <li key={newModel} className="ml-2 mr-2">
          <Link to={`${newModel}`}>{newModel}</Link>
        </li>
      </ul>

      <div>
        <input
          type="text"
          className="border-2 border-black"
          value={newModel}
          onChange={(event) => setSearchParams({ model: event.target.value })}
        />
      </div>
    </section>
  );
}
export default CarMark;
