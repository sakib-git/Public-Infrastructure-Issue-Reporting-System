import axios from 'axios';
import { toast } from 'kitzo/react';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const AdminProfile = () => {
    const { user, setUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isUpdating, setIsUpdating] = useState(false);

  const axiosSecure = useAxiosSecure();

  const handleUpdate = async (data) => {
    if (isUpdating) return;
    setIsUpdating(true);
    
    try {
      const uploadPhoto = data.photo[0];
      const formData = new FormData();
      formData.append('image', uploadPhoto);
      const img_api_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_HOST_IMGBB}`;

      const imgResponse = await axios.post(img_api_url, formData);
      const uploadedImageUrl = imgResponse.data.data.url;

      const response = await axiosSecure.post('/user/update-profile', {
        displayName: data.name,
        photoURL: uploadedImageUrl,
      });

      setUser(response.data);
      toast.success('Profile successfully upated');
    } catch (err) {
      console.error(err);
    } finally {
      setIsUpdating(false);
    }
  };
  return (
      <div className="flex gap-10 bg-white p-10 shadow">
      <div>
        <img
          className="w-40 rounded-full"
          src={user.photoURL}
          alt=""
        />
        <h5 className="text-2xl font-bold">{user.displayName}</h5>
        <h5 className="font-bold">{user.email}</h5>
      </div>
      <form
        onSubmit={handleSubmit(handleUpdate)}
        className="space-y-4"
      >
        <div className="flex max-w-[500px] flex-col">
          <label className="font-semibold text-[#c9c9c9]">Name</label>
          <input
            type="text"
            placeholder="Name"
            defaultValue={user.displayName}
            {...register('name', {
              required: true,
            })}
            className="rounded-md border border-[#c9c9c9] px-2 py-2 transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-[#c9c9c9]">Photo</label>
          <input
            type="file"
            {...register('photo', {
              required: true,
            })}
            className="file-input w-full rounded-md border border-[#c9c9c9] transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none"
          />
        </div>

        <button className="btn">
          {isUpdating ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            <span>Update</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default AdminProfile;