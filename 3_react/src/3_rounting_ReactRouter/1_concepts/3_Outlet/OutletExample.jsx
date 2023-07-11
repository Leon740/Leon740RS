// === Concept
// An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

// function Dashboard() {
//   return (
//     <div>
//       <h1>Dashboard</h1>

//       {/* This element will render either <DashboardMessages> when the URL is
//           "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
//       */}
//       <Outlet />
//     </div>
//   );
// }

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Dashboard />}>
//         <Route
//           path="messages"
//           element={<DashboardMessages />}
//         />
//         <Route path="tasks" element={<DashboardTasks />} />
//       </Route>
//     </Routes>
//   );
// }

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CarsList from './Car/CarsList';
import CarMark from './Car/CarMark';
import CarModel from './Car/CarModel';

function OutletExample() {
  return (
    <Routes>
      {/* 1st approach */}
      <Route path="/" element={<CarsList />}>
        <Route path=":mark" element={<CarMark />} />
        <Route path=":mark/:model" element={<CarModel />} />
      </Route>

      {/* 2nd approach */}
      {/* Use <Outlet> in <CarMark> to render <CarModel> */}
      {/* <Route path="/" element={<CarsList isOutlet />}>
        <Route path=":mark" element={<CarMark />}>
          <Route path=":model" element={<CarModel />} />
        </Route>
      </Route> */}
    </Routes>
  );
}
export default OutletExample;
