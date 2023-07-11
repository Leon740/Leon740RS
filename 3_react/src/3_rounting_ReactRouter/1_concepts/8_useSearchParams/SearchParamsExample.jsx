import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CarsList from './Car/CarsList';
import CarMark from './Car/CarMark';
import CarModel from './Car/CarModel';

function SearchParamsExample() {
  return (
    <Routes>
      <Route path="/" element={<CarsList />}>
        <Route path=":mark" element={<CarMark />} />
        <Route path=":mark/:model" element={<CarModel />} />
      </Route>
    </Routes>
  );
}
export default SearchParamsExample;
