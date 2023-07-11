/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

function Redirect({ to }) {
  // 1st way: useNavigate
  // const navigate = useNavigate();
  // console.log(to);

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate(to);
  //   }, 1000);
  // }, []);

  return (
    <>
      <p>Redirect</p>
      {/* 2nd way: Navigate */}
      <Navigate to={to} />
    </>
  );
}
export default Redirect;
