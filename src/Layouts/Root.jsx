import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'kitzo/react';
import useAuth from '../Hooks/useAuth';

const Root = () => {
  const { loading } = useAuth();

  return (
    <>
      {loading ? (
        <div className="flex min-h-screen items-center justify-center">
          <span className="loading loading-ring loading-lg"></span>
          <span className="loading loading-ring loading-lg"></span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="flex h-screen flex-col">
          <Navbar></Navbar>
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
          <ToastContainer position="top-right"></ToastContainer>
        </div>
      )}
    </>
  );
};

export default Root;
