import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'kitzo/react';

const Root = () => {
  return (
      <div className='flex flex-col h-screen'>
      <Navbar></Navbar>
     <div className='flex-1 '>
       <Outlet></Outlet>
     </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Root;













