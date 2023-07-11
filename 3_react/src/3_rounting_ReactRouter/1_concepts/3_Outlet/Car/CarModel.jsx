import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

function CarModel() {
  const { mark, model } = useParams();
  // const outletContext = useOutletContext();
  // console.log('CarModel', outletContext);

  return (
    <h3 className="text-2xl">
      {mark} {model}
    </h3>
  );
}
export default CarModel;
