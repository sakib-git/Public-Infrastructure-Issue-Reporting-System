import React from 'react';
import { Link } from 'react-router';

const PaymentCancell = () => {
  return (
  
    <div className="flex flex-col items-center justify-center p-6">
  <div className="bg-white shadow-lg rounded-xl p-8 max-w-md text-center">
    <h2 className="text-2xl font-bold text-red-600 mb-4">
      Payment Cancelled
    </h2>
    <p className="text-gray-700 mb-6">
      Your payment was not completed. Please try again.
    </p>
    <Link to="/allissues">
      <button className="btn bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
        Try Again
      </button>
    </Link>
  </div>
</div>

  );
};

export default PaymentCancell;