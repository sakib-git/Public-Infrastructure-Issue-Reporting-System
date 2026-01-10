import React from 'react';
import Banner from './Banner/Banner';
import Howtowork from './HowTowork/Howtowork';
import KeyFeatures from './KeyFeatures/KeyFeatures';
import StayUpdated from './StayUpdated/StayUpdated';
import ResolvedIssues from './ResolvedIssues/ResolvedIssues';
import FQA from './FQA/FQA';

const Home = () => {
  return (
    <div className="">
      <div className="mx-auto mt-40 max-w-[1400px]">
        <Banner></Banner>
      </div>
      <div className="my-20">
        <ResolvedIssues></ResolvedIssues>
      </div>
      <div className="my-20">
        <h2 className="mb-6 text-center text-3xl font-bold">How It Works</h2>
        <Howtowork></Howtowork>
      </div>
      <div className="my-20">
        <KeyFeatures></KeyFeatures>
      </div>
      <div className="my-20">
        <FQA></FQA>
      </div>

      <div className="my-20">
        <StayUpdated></StayUpdated>
      </div>
    </div>
  );
};

export default Home;
