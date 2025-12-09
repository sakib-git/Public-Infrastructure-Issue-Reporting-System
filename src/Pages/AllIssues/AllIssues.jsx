import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import IssueCard from '../../components/IssueCard';

const AllIssues = () => {

  const axiosSecure = useAxiosSecure()
  const {data: issues = [], isLoading} = useQuery({
    queryKey:['issues'],
    queryFn: async () => {
      const res = await axiosSecure.get('/issues')
      return res.data
    }
  })

  if(isLoading){
      return <div className='min-h-screen flex  justify-center items-center'>
      <span className="loading loading-ring loading-lg"></span>
      <span className="loading loading-ring loading-lg"></span>
      <span className="loading loading-ring loading-lg"></span>
    </div>
  }
  return (
    <div   className='max-w-[1400px] mx-auto '>
      <h2 className='text-4xl font-bold py-2'>AllIssues: {issues.length}</h2>
      <form >
        <input className='border' type="text" />
      </form>
  <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 py-10'>
        {
        issues.map(issue => 
        <IssueCard key={issue._id} issue={issue}>

        </IssueCard>)
      }
  </div>
    </div>
  );
};

export default AllIssues;