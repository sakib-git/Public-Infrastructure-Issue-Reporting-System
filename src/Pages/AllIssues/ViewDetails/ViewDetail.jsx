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
    <div className="mx-auto my-20 max-w-[1200px] rounded-2xl bg-white p-8 shadow-xl">
      <div className="flex flex-col gap-10 md:flex-row">
        {/* Image Section */}
        <div className="flex-1">
          <img
            className="h-80 w-full rounded-2xl object-cover shadow-md md:h-full"
            src={image}
            alt={title}
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-1 flex-col">
          <h1 className="mb-6 text-4xl font-bold text-gray-800">{title}</h1>
          <p className="mb-6 text-gray-700">{description}</p>

          {/* Badges */}
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-blue-100 px-4 py-1 text-blue-800 shadow-sm">
              Category: {category}
            </span>
            <span
              className={`rounded-full px-4 py-1 shadow-sm ${priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}
            >
              Priority: {priority}
            </span>
            <span
              className={`rounded-full px-4 py-1 shadow-sm ${status === 'pending' ? 'bg-red-300 ' : 'bg-green-100 text-green-800'}`}
            >
              status : {status}
            </span>
            <span className="rounded-full bg-yellow-100 px-4 py-1 text-yellow-800 shadow-sm">
              Upvotes: {upvotes}
            </span>
            <span className="rounded-full bg-gray-100 px-4 py-1 text-gray-800 shadow-sm">
              Location: {location}
            </span>
            <span className="rounded-full bg-gray-100 px-4 py-1 text-gray-800 shadow-sm">
              Date: {date}
            </span>
          </div>

          {/* Action Buttons */}
     
          {priority !== 'high' && (
            <Link to={`/payment/${_id}`}>
              <button className="btn w-fit rounded-lg bg-[#25408f] py-3 font-semibold text-white transition hover:bg-[#1b2f6b]">
                Boost
              </button>
            </Link>
          )}
          <div className="mt-auto flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => handleEdit(_id)}
              className="flex-1 rounded-xl bg-blue-500 py-3 font-semibold text-white shadow-md hover:bg-blue-600"
            >
              Update
            </button>
            {openmodal && (
              <div
                onClick={() => setOpenmodal(false)}
                className="fixed inset-0 flex items-center justify-center bg-black/10"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-[500px] rounded-md bg-white p-4 max-md:mx-3"
                >
                  <form
                    onSubmit={handleSubmit(handleForms)}
                    className="space-y-5"
                  >
                    {/* Title */}
                    <div>
                      <label className="font-semibold text-gray-500">
                        Title
                      </label>
                      <input
                        type="text"
                        placeholder="Enter issue title"
                        {...register('title', { required: true })}
                        defaultValue={title}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#25408f] focus:outline-none"
                      />
                      {errors.title && (
                        <p className="mt-1 text-sm text-red-600">
                          Title is required
                        </p>
                      )}
                    </div>

                    {/* Category */}
                    <div>
                      <label className="font-semibold text-gray-500">
                        Category
                      </label>

                      <select
                        defaultValue={category}
                        {...register('category', { required: true })}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#25408f] focus:outline-none"
                      >
                        <option value="">Select a category</option>
                        <option value="Broken Streetlights">
                          Broken Streetlights
                        </option>
                        <option value="Potholes">Potholes</option>
                        <option value="Water Leakage">Water Leakage</option>
                        <option value="Garbage Overflow">
                          Garbage Overflow
                        </option>
                        <option value="Damaged Footpaths">
                          Damaged Footpaths
                        </option>
                      </select>

                      {errors.category && (
                        <p className="mt-1 text-sm text-red-600">
                          Category is required
                        </p>
                      )}
                    </div>

                    {/* Location */}
                    <div>
                      <label className="font-semibold text-gray-500">
                        Location
                      </label>
                      <input
                        type="text"
                        placeholder="Enter issue location"
                        {...register('location', { required: true })}
                        defaultValue={location}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#25408f] focus:outline-none"
                      />
                      {errors.location && (
                        <p className="mt-1 text-sm text-red-600">
                          Location is required
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <div>
                      <label className="font-semibold text-gray-500">
                        Description
                      </label>
                      <textarea
                        rows={6}
                        placeholder="Describe the issue..."
                        {...register('description', { required: true })}
                        defaultValue={description}
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-[#25408f] focus:outline-none"
                      ></textarea>
                      {errors.description && (
                        <p className="mt-1 text-sm text-red-600">
                          Description is required
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button className="w-full rounded-lg bg-[#25408f] py-3 font-semibold text-white transition hover:bg-[#1b2f6b]">
                      Submit Report
                    </button>
                  </form>
                </div>
              </div>
            )}
            <button
              onClick={() => handleDelete(_id)}
              className="flex-1 rounded-xl bg-red-500 py-3 font-semibold text-white shadow-md hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
