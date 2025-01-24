import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/Navbar';

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default MainLayout; 