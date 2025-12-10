import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const MyProfile = () => {
  const { user, } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const axiosSecure = useAxiosSecure()
const handleUpdate = async (data) => {
 const uploadPhoto = data.photo[0];

 const formData = new FormData();
        formData.append('image', uploadPhoto);
        const img_api_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_HOST_IMGBB}`;


const imgResponse = await axios.post(img_api_url, formData);
const uploadedImageUrl = imgResponse.data.data.url;


};
  return (
    <div className='flex gap-10 bg-white shadow p-10'>
      <div>
        <img className='w-40 rounded-full'
          src={user.photoURL}
          alt=""
        />
        <h5 className='text-2xl font-bold'>{user.displayName}</h5>
        <h5 className=' font-bold'>{user.email}</h5>
      </div>
      <form 
      onSubmit={handleSubmit(handleUpdate)}
      className=" grid grid-cols-2 gap-7 ">

        <div className="flex flex-col max-w-[500px]">
          <label className="font-semibold text-[#c9c9c9]">Name</label>
          <input
            type="text"
            placeholder="Name"
            defaultValue={user.displayName}
            {...register('name')}
            className="rounded-md border border-[#c9c9c9] px-2 py-2 transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-[#c9c9c9]">Photo</label>
          <input
            type="file"
            {...register('photo')}
            className="file-input w-full rounded-md border border-[#c9c9c9] transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold text-[#c9c9c9]">Email</label>
          <input
            type="email"
            {...register('email')}
            defaultValue={user.email}
            placeholder="Email"
            className="rounded-md border border-[#c9c9c9] px-2 py-2 transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none"
          />
        </div>
        <div className="relative flex flex-col">
          <label className="font-semibold text-[#c9c9c9]">Password</label>
          <input
            type="password"
            placeholder="Password"
            {...register('password')}
            className="rounded-md border border-[#c9c9c9] px-2 py-2 transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none"
          />
        </div>

        <button className="btn">update</button>
      </form>
    </div>
  );
};

export default MyProfile;
