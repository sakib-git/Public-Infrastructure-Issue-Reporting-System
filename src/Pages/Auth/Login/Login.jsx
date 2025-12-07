import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { toast } from 'kitzo/react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../Firebase/FireBase.init';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowpasswor] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const { loginUser } = useAuth();
  const handleLogin = (data) => {
    loginUser(data.email, data.password)
      .then((res) => {
        navigate(location?.state || '/');
       
      })
      .catch((error) => {
        toast.error('Please check your password');
      });
  };

  const handleForgotpassword = () => {
    const email = getValues('email');
    if (!email) {
      toast.error('Give me your email');
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success('Please check your email!');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-[500px] bg-white p-10 shadow max-sm:mx-6">
        <form
          onSubmit={handleSubmit(handleLogin)}
          className="flex flex-col gap-6"
        >
          <h2 className="text-center text-3xl font-semibold text-[#c9c9c9]">
            Welcome Back
          </h2>
          <div className="flex flex-col">
            <label className="font-semibold text-[#c9c9c9]">Email</label>
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: true })}
              className="rounded-md border border-[#c9c9c9] px-2 py-2 transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none"
            />
            {errors.email?.type === 'required' && (
              <p className="text-sm text-red-500"> Email is required</p>
            )}
          </div>
          <div className="relative flex flex-col">
            <label className="font-semibold text-[#c9c9c9]">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              {...register('password', { required: true, minLength: 6 })}
              className="rounded-md border border-[#c9c9c9] px-2 py-2 transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none"
            />
            {errors.password?.type === 'required' && (
              <p className="text-sm text-red-500"> password is required</p>
            )}
            {errors.password?.type === 'minLength' && (
              <p className="text-sm text-red-600">
                password must be 6 characters or longer
              </p>
            )}

            <p
              onClick={handleForgotpassword}
              className="text-sm mt-1"
            >
              Forgot Password
            </p>

            <span
              onClick={() => setShowpasswor(!showPassword)}
              className="absolute top-9 right-4"
            >
              {showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
            </span>
          </div>

          <div>
            <button className="btn mb-2 w-full rounded-md bg-[#25408f] font-semibold text-white outline-none">
              {' '}
              Log in
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-3">
          <p>
            Don't have an account?
            <NavLink
              state={location.state}
              to="/register"
              className="text-blue-500 underline"
            >
              Register
            </NavLink>
          </p>
          <div className="flex items-center gap-2">
            <hr className="flex-1 border-gray-400" />
            <p className="text-center">OR</p>
            <hr className="flex-1 border-gray-400" />
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
