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
    <div>
      {/* <h5>payment{payment.priority}</h5> */}
      <button
        onClick={handlePay}
        className="btn"
      >
        {' '}
        pay
      </button>
    </div>
  );
};

export default Payment;
