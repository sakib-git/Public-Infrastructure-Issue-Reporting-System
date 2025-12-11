import { toast } from 'kitzo/react';
import React from 'react';
import { useForm } from 'react-hook-form';

const StayUpdated = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubscribe = (data) => {
    toast.success('Successfully Subscribed');
  };
  return (
    <div className="space-y-3">
      <h3 className="text-center text-4xl font-bold">Stay Updated</h3>
      <p className="text-center">
        Subscribe to our newsletter to get updates on new features, city
        partnerships, and success stories.
      </p>
      <form
        onSubmit={handleSubmit(handleSubscribe)}
        className="mx-auto flex max-w-[700px] items-center gap-2 max-md:mx-3"
      >
        <input
          type="email"
          {...register('email', { required: true })}
          placeholder="Email"
          className="max-w-[600px] flex-1 rounded-md border border-[#c9c9c9] px-2 py-2 transition focus:border-[#c9c9c9] focus:ring-2 focus:ring-[#c9c9c9] focus:outline-none"
        />
        <button
          type="submit"
          className="btn bg-[#25408f] text-white"
        >
          Subscribe
        </button>
      </form>

      <p className="text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default StayUpdated;
