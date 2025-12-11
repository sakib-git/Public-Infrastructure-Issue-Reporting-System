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

  //   const handlePay = async () => {
  //   const res = await axiosSecure.post('/create-checkout-session', {
  //     email: payment.email,
  //     issueId: payment._id,
  //   });

  //   // Stripe session URL → redirect
  //   window.location.href = res.data.url;
  // };

  if (isLoading) {
    <p>loading...</p>;
  }
  return (
    <div>
      <h5>payment {payment.status}</h5>
      <button className="btn"> pay</button>
    </div>
  );
};

export default Payment;
