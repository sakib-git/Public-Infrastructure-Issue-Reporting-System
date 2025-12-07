import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, NavLink, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import { toast } from 'kitzo/react';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {loginUser} = useAuth()
  const handleLogin = (data) => {
    loginUser(data.email, data.password)
    .then(res => {
      navigate(location?.state || '/')
    })
    .catch(error => {
      toast.error("Please check your password")
    })

  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[500px] w-full bg-white shadow p-10">
        <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-4">
          <h2 className="text-3xl text-center font-semibold text-[#c9c9c9]">Welcome Back</h2>
          <div className="flex flex-col">
            <label className="font-semibold text-[#c9c9c9]">Email</label>
            <input type="email" placeholder="Email" {...register('email', { required: true })} className="rounded-md border border-[#c9c9c9] px-2 py-2 transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none" />
            {errors.email?.type === 'required' && <p className="text-red-500 text-sm"> Email is required</p>}
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-[#c9c9c9]">Password</label>
            <input type="text" placeholder="Password" {...register('password', { required: true, minLength: 6 })} className="rounded-md border border-[#c9c9c9] px-2 py-2 transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none" />
            {errors.password?.type === 'required' && <p className="text-red-500 text-sm"> password is required</p>}
            {errors.password?.type === 'minLength' && <p className="text-sm text-red-600"> password must be 6 characters or longer</p>}
            <p className="text-sm">Forgot Password</p>
          </div>

          <div>
            <button   className="bg-[#25408f] text-white font-semibold btn rounded-md outline-none w-full mb-2"> Log in</button>
           
          </div>
          </form>
           <p>
              Don't have an account?
              <NavLink state={location.state}  to="/register" className="text-blue-500 underline ">
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
  );
};

export default Login;
