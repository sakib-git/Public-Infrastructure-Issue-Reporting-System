import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Payment = () => {
  const { issueId } = useParams();
  // console.log(issueId)
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: payment = {} } = useQuery({
    queryKey: ['paymentIssue', issueId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/issue/payment/${issueId}`);

      return res.data;
    },
  });

  const handlePay = async () => {
    const res = await axiosSecure.post('/create-checkout-session', {
      email: payment.email,
      issueId: issueId,
    });

    // console.log(res.data)
    // Stripe session URL → redirect
    window.location.href = res.data.url;
             await axiosSecure.patch(`/issue/update-status/${issueId}`, { priority: 'high' });
  };

  if (isLoading) {
    <p>loading...</p>;
  }
  return (
 

 <div className='flex justify-center items-center mt-20'>
   <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200  text-center ">
  <h5 className="text-2xl font-bold mb-2">Boost this Issue</h5>
  <p className=" mb-3">Increase priority to high for 100tk</p>
  <button 
  onClick={handlePay}
   className="btn bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-900">
    Pay & Boost
  </button>
</div>
 </div>

  );
};

export default Payment;
