import React from 'react';
import { NavLink } from 'react-router';

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[500px] w-full bg-white shadow p-10">
        <form className="flex flex-col gap-4">
          <h2 className="text-3xl text-center font-semibold text-[#c9c9c9]">Create an Account</h2>
          <div className="flex flex-col">
            <label className="font-semibold text-[#c9c9c9]">Name</label>
            <input type="text" placeholder="Name" className="rounded-md border border-[#c9c9c9] px-2 py-2 transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none" />
          </div>
          <div className="flex flex-col ">
            <label className="font-semibold text-[#c9c9c9]">Photo</label>
            <input type="file" className="file-input w-full rounded-md border border-[#c9c9c9]  transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none" />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-[#c9c9c9]">Email</label>
            <input type="email" placeholder="Email" className="rounded-md border border-[#c9c9c9] px-2 py-2 transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none" />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-[#c9c9c9]">Password</label>
            <input type="text" placeholder="Password" className="rounded-md border border-[#c9c9c9] px-2 py-2 transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none" />
          </div>

          <div>
            <button className="bg-[#25408f] text-white font-semibold btn rounded-md outline-none w-full mb-2"> Register</button>
            <p>
              Already have an account?
              <NavLink to="/login" className="text-blue-500 underline ">
                Login
              </NavLink>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <hr className="flex-1 border-gray-400" />
            <p className="text-center">OR</p>
            <hr className="flex-1 border-gray-400" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
