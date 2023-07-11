import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CarsList from '../Components/Car/CarsList';
import CarMark from '../Components/Car/CarMark';
import CarModel from '../Components/Car/CarModel';

function NestedRoutes() {
  return (
    <Routes>
      <Route index element={<CarsList />} />
      <Route path=":mark" element={<CarMark />} />
      <Route path=":mark/:model" element={<CarModel />} />
    </Routes>
  );
}
export default NestedRoutes;
