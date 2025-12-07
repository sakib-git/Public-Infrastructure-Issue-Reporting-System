import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { toast } from 'kitzo/react';

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowpasswor] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, updateProfileUser } = useAuth();

  const handleRegister = (data) => {
    //  console.log(data.photo[0])
    const profileImg = data.photo[0];
    registerUser(data.email, data.password)
      .then((result) => {
        // console.log(result.user)
        const formData = new FormData();
        formData.append('image', profileImg);
        const img_api_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_HOST_IMGBB}`;

        axios.post(img_api_url, formData).then((res) => {
          // console.log('after upload img', res.data.data.url)
          const userProfile = {
            displayName: data.name,

            photoURL: res.data.data.url,
          };
          updateProfileUser(userProfile).then(() => {
            navigate(location.state || '/');
          });
        });
      })
      .catch((error) => {
        toast.error('Already have an account')
      });
  };
  return (
    <div className="flex h-screen items-center justify-center max-sm:mx-6">
      <div className="w-full max-w-[500px] bg-white p-10 shadow">
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="flex flex-col gap-4"
        >
          <h2 className="text-center text-3xl font-semibold text-[#c9c9c9]">
            Create an Account
          </h2>
          <div className="flex flex-col">
            <label className="font-semibold text-[#c9c9c9]">Name</label>
            <input
              type="text"
              placeholder="Name"
              {...register('name', { required: true })}
              className="rounded-md border border-[#c9c9c9] px-2 py-2 transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none"
            />
            {errors.name?.type === 'required' && (
              <p className="text-sm text-red-600">Name is required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-[#c9c9c9]">Photo</label>
            <input
              type="file"
              {...register('photo', { required: true })}
              className="file-input w-full rounded-md border border-[#c9c9c9] transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none"
            />
            {errors.photo?.type === 'required' && (
              <p className="text-sm text-red-600">photo is required</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-[#c9c9c9]">Email</label>
            <input
              type="email"
              {...register('email', { required: true })}
              placeholder="Email"
              className="rounded-md border border-[#c9c9c9] px-2 py-2 transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none"
            />
            {errors.email?.type === 'required' && (
              <p className="text-sm text-red-600">Email is required</p>
            )}
          </div>
          <div className="flex flex-col relative">
            <label className="font-semibold text-[#c9c9c9]">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              {...register('password', { required: true, minLength: 6 })}
              className="rounded-md border border-[#c9c9c9] px-2 py-2 transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none"
            />
            <span
              onClick={() => setShowpasswor(!showPassword)}
              className="absolute top-9 right-4"
            >
              {showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
            </span>
            {errors.email?.type === 'required' && (
              <p className="text-sm text-red-600">password is required</p>
            )}
            {errors.password?.type === 'minLength' && (
              <p className="text-sm text-red-600">
             
                password must be 6 characters or longer
              </p>
            )}
            
          </div>

          <div>
            <button className="btn mb-2 w-full rounded-md bg-[#25408f] font-semibold text-white outline-none">
              {' '}
              Register
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-2">
          <p>
            Already have an account?
            <NavLink
              state={location.state}
              to="/login"
              className="text-blue-500 underline"
            >
              Login
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

export default Register;
