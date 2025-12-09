import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import IssueCard from '../../../components/IssueCard';

const MyIssuesPage = () => {
  const { user } = useAuth(); 
  const axiosSecure =  useAxiosSecure()
 const { data: myIssues = [],  } = useQuery({
  queryKey: ["my-issues", user?.email],
  queryFn: async () => {
    const res = await axiosSecure.get(`/my-issues/${user?.email}`);;
    return res.data;
  },
  
});

  return (
    <div className='mx-20'>
      <h3 className='text-4xl py-6 font-bold'>My Issues Page: {myIssues.length}</h3>
    
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-md:mx-4 gap-10'>
        {
          myIssues.map(issue => <IssueCard issue={issue}></IssueCard>)
        }
      </div>
    </div>
  );
};

export default MyIssuesPage;
