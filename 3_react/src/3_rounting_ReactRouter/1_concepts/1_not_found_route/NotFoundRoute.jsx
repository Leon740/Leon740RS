import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '../../2_tasks/9_useLocation/NotFoundPage';

function NotFoundRoute() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
export default NotFoundRoute;
