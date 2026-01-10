import React from 'react';
import useAuth from '../../Hooks/useAuth';

const About = () => {
  const { user } = useAuth();

  return (
    <div className="mx-auto mt-30 max-w-[1400px] rounded-lg bg-white p-6 ">
      <h1 className="text-3xl font-bold">About InfraReport</h1>
      <p className="mt-4 text-gray-700">
        InfraReport is a digital platform that enables citizens to report public
        infrastructure issues such as potholes, broken streetlights, water
        leakage, blocked drainage, and damaged footpaths. The system helps
        government staff verify, assign, and resolve these issues efficiently.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="rounded border border-[#e0e2e3] p-4">
          <h2 className="text-lg font-semibold">Mission</h2>
          <p className="mt-2 text-gray-600">
            Improve public service quality by enabling fast reporting and quick
            responses from authorities.
          </p>
        </div>
        <div className="rounded border border-[#e0e2e3] p-4">
          <h2 className="text-lg font-semibold">Vision</h2>
          <p className="mt-2 text-gray-600">
            Build cleaner, safer, and smarter cities with active citizen
            participation.
          </p>
        </div>
        <div className="rounded border border-[#e0e2e3] p-4">
          <h2 className="text-lg font-semibold">How It Works</h2>
          <p className="mt-2 text-gray-600">
            Submit a report → Admin verifies → Issue assigned → Issue resolved →
            Status tracked.
          </p>
        </div>
      </div>

      <p className="mt-6 text-gray-700">
        InfraReport ensures transparency, accountability, and faster public
        service delivery, making the city a better place for everyone.
      </p>
    </div>
  );
};

export default About;
