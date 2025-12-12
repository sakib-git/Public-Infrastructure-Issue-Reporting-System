import React from 'react';
import { Link } from 'react-router';

const PaymentCancell = () => {
  return (
    <div>
      <h2>Payment is cancelled. please try again</h2>
      <Link to='/allissues'>
      <button className='btn'> Try again</button>
      </Link>
    </div>
  );
};

export default PaymentCancell;