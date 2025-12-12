import React from 'react';

const DasboardCitizen = () => {
  return (
<div className='max-w-[1400px] mx-auto'>
      <div className='grid grid-cols-5 gap-4'>
      <div className='bg-teal-500 p-5'>
        <h4 className="text-2xl">
          Total issues submitted
        </h4>
      </div>
      <div className='bg-teal-500'>
        <h4 className="text-2xl">
          Total pending issues
        </h4>
      </div>
      <div className='bg-teal-500'>
        <h4 className="text-2xl">
          Total in progress issues
        </h4>
      </div>
      <div className='bg-teal-500'>
        <h4 className="text-2xl">
        Total Resolved issues
        </h4>
      </div>
      <div className='bg-teal-500'>
        <h4 className="text-2xl">
         Total payments
        </h4>
      </div>
    </div>
</div>
  );
};

export default DasboardCitizen;