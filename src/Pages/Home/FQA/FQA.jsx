import React from 'react';

const FQA = () => {
  return (
    <div className='max-w-[1000px] mx-auto space-y-3'>
      <h2 className="text-3xl font-bold text-center mb-6">
  Frequently Asked Questions
</h2>
      <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border ">
  <div className="collapse-title font-semibold">
    How do I create an account on CityFix Portal?
  </div>
  <div className="collapse-content text-sm">
    Click the “Sign Up” button at the top right corner and complete the registration process.
  </div>
</div>

<div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
  <div className="collapse-title font-semibold">
    How can I report a city problem?
  </div>
  <div className="collapse-content text-sm">
    Click on the “Report Issue” button, choose the problem category, upload a photo, and submit the report.
  </div>
</div>

<div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
  <div className="collapse-title font-semibold">
    Do I need an account to report an issue?
  </div>
  <div className="collapse-content text-sm">
    Yes, you need to be logged in to report issues and track their status.
  </div>
</div>

<div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
  <div className="collapse-title font-semibold">
    How can I check the status of my reported issues?
  </div>
  <div className="collapse-content text-sm">
    Go to Dashboard → My Reports to view the current status of all your submitted issues.
  </div>
</div>

<div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
  <div className="collapse-title font-semibold">
    How long does it take to resolve an issue?
  </div>
  <div className="collapse-content text-sm">
    Resolution time depends on the type and priority of the issue. You will receive status updates as progress is made.
  </div>
</div>

      
    </div>
  );
};

export default FQA;