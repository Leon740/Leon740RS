import React from 'react';
import { useLocation } from 'react-router-dom';

function HomePage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <p className="text-1xl">user came from : {location.state}</p>
      <h1 className="text-2xl">Home</h1>
    </>
  );
}
export default HomePage;
