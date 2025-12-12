import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';

const ViewDetail = () => {
  const [openmodal, setOpenmodal] = useState();
  const [currentEditId, setCurrentEditId] = useState(null);
  const data = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(data)
  const {
    image,
    title,
    category,
    location,
    priority,
    upvotes,
    description,
    date,
    _id,
    status,
  } = data;

  const handleDelete = (id) => {
    // console.log(id)

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/issues/${id}`).then((res) => {
          // console.log(res.data)
          if (res.data.deletedCount) {
            navigate('/allissues');
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            });
          }
        });
      }
    });
  };

  const handleEdit = (id) => {
    setCurrentEditId(id);
    setOpenmodal(true);
  };

  const handleForms = async (formData) => {
    const issueData = {
      ...formData,
      date: format(new Date(), 'MM/dd/yyyy, hh:mm a'),
    };
    axiosSecure.patch(`/issues/${currentEditId}`, issueData).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire('Updated!', 'Issue updated successfully', 'success');
        setOpenmodal(false);
        navigate('/allissues');
      }
    });
  };

  return (
<div className="mx-auto my-5 max-w-[1000px] rounded-2xl bg-white p-8 shadow-xl">

  {/* Image */}
  <div className="w-full h-[350px] overflow-hidden rounded-2xl shadow-md mb-8">
    <img
      className="w-full h-full object-cover"
      src={image}
      alt={title}
    />
  </div>

  {/* Title */}
  <h1 className="text-4xl font-bold text-gray-900 mb-4">
    {title}
  </h1>

  {/* Description */}
  <span className="text-gray-700 leading-7 mb-6">
    {description}
  </span>

  {/* Badges */}
  <div className="flex flex-wrap gap-3 my-10">
    <span className="rounded-full bg-blue-100 px-4 py-1 text-blue-800 font-semibold shadow-sm">
      Category: {category}
    </span>
    <span
      className={`rounded-full px-4 py-1 font-semibold shadow-sm ${
        priority === "high"
          ? "bg-red-100 text-red-700"
          : "bg-green-100 text-green-700"
      }`}
    >
      Priority: {priority}
    </span>
    <span
      className={`rounded-full px-4 py-1 font-semibold shadow-sm ${
        status === "pending"
          ? "bg-orange-200 text-orange-800"
          : "bg-green-100 text-green-700"
      }`}
    >
      Status: {status}
    </span>
    <span className="rounded-full bg-yellow-100 px-4 py-1 text-yellow-700 font-semibold shadow-sm">
      Upvotes: {upvotes}
    </span>
    <span className="rounded-full bg-gray-100 px-4 py-1 text-gray-700 font-semibold shadow-sm">
      Location: {location}
    </span>
    <span className="rounded-full bg-gray-100 px-4 py-1 text-gray-700 font-semibold shadow-sm">
      Date: {date}
    </span>
  </div>

  {/* Boost Button */}
  {priority !== "high" && (
    <Link to={`/payment/${_id}`}>
      <button className="mb-6 w-full rounded-lg bg-[#25408f] py-3 font-semibold text-white shadow hover:bg-[#1b2f6b] transition">
        Boost Issue
      </button>
    </Link>
  )}

  {/* Action Buttons */}
  <div className="flex flex-col gap-4">

    {/* Update */}
    <button
      onClick={() => handleEdit(_id)}
      className="w-full rounded-xl bg-blue-500 py-3 font-semibold text-white shadow-md hover:bg-blue-600 transition"
    >
      Update
    </button>

    {/* Modal */}
    {openmodal && (
      <div
        onClick={() => setOpenmodal(false)}
        className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl p-6 w-full max-w-[520px] shadow-2xl"
        >
          <form onSubmit={handleSubmit(handleForms)} className="space-y-5">

            {/* Title */}
            <div>
              <label className="font-semibold text-gray-600">Title</label>
              <input
                defaultValue={title}
                {...register("title", { required: true })}
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 shadow focus:ring-2 focus:ring-[#25408f] outline-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="font-semibold text-gray-600">Category</label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 shadow focus:ring-2 focus:ring-[#25408f] outline-none"
              >
                <option value="">Select a category</option>
                <option value="Broken Streetlights">Broken Streetlights</option>
                <option value="Potholes">Potholes</option>
                <option value="Water Leakage">Water Leakage</option>
                <option value="Garbage Overflow">Garbage Overflow</option>
                <option value="Damaged Footpaths">Damaged Footpaths</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="font-semibold text-gray-600">Location</label>
              <input
                defaultValue={location}
                {...register("location", { required: true })}
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 shadow focus:ring-2 focus:ring-[#25408f] outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="font-semibold text-gray-600">Description</label>
              <textarea
                rows={6}
                defaultValue={description}
                {...register("description", { required: true })}
                className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 shadow focus:ring-2 focus:ring-[#25408f] outline-none"
              ></textarea>
            </div>

            <button className="w-full py-3 rounded-lg bg-[#25408f] text-white font-semibold shadow hover:bg-[#1b2f6b] transition">
              Submit Report
            </button>
          </form>
        </div>
      </div>
    )}

    {/* Delete */}
    <button
      onClick={() => handleDelete(_id)}
      className="w-full rounded-xl bg-red-500 py-3 font-semibold text-white shadow-md hover:bg-red-600 transition"
    >
      Delete
    </button>

  </div>
</div>




  );
};

export default ViewDetail;
