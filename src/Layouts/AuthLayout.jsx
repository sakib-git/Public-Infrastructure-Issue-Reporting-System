import React from 'react';
import { ToastContainer } from 'kitzo/react';
import { Outlet, useNavigate } from 'react-router';
import Logo from '../components/Logo';

const AuthLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-[1400px]">
      <div className="fixed top-4 left-4">
        <Logo onClick={() => navigate('/')} />
      </div>
      <Outlet />
      <ToastContainer position="top-right" />
    </div>
  );
};

export default AuthLayout;
