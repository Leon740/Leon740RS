import React from 'react';
import { useLocation } from 'react-router-dom';

function DetailPage() {
  const { state: item } = useLocation();
  const { name, image, species, status, gender } = item;

  return (
    <section>
      <h1 className="text-4xl my-16">{name}</h1>
      <div className="flex flex-wrap">
        <div className="rounded-lg overflow-hidden w-full sm:w-6/12">
          <img src={image} alt={`${name}, ${species}`} />
        </div>
        <article className="w-full sm:w-6/12 sm:px-8">
          <h2 className="text-2xl my-8">{name}</h2>
          <p className="text-base">{species}</p>
          <p className="text-base">{status}</p>
          <p className="text-base">{gender}</p>
        </article>
      </div>
    </section>
  );
}
export default DetailPage;
