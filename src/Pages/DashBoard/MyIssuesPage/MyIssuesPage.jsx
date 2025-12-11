import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import IssueCard from '../../../components/IssueCard';

const MyIssuesPage = () => {
  const { user } = useAuth();
  const [isCategory, isSetcategory] = useState('')
  const axiosSecure = useAxiosSecure();
  const { data: myIssues = [] } = useQuery({
    queryKey: ['my-issues', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-issues/${user?.email}`);
      return res.data;
    },
  });

 const filterIssue =  myIssues.filter(c => {
   return isCategory === '' ? true : c.category.toLowerCase() == isCategory.toLowerCase()
  })
  // console.log(myIssues)
  return (
    <div className="mx-20">
      <h3 className="py-6 text-4xl font-bold">
        My Issues Page: {myIssues.length}
      </h3>
      <select
       onChange={(e) => isSetcategory(e.target.value)}
       className="rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none mb-5">
        <option value="">all category</option>
        <option value="Broken Streetlights">Broken Streetlights</option>
        <option value="Potholes">Potholes</option>
        <option value="Water Leakage">Water Leakage</option>
        <option value="Garbage Overflow">Garbage Overflow</option>
        <option value="Damaged Footpaths">Damaged Footpaths</option>
      </select>
      <div className="grid grid-cols-1 gap-10 max-md:mx-4 md:grid-cols-2 lg:grid-cols-3">
        {filterIssue.map((issue) => (
          <IssueCard
            key={issue._id}
            issue={issue}
          ></IssueCard>
        ))}
      </div>
    </div>
  );
};

export default MyIssuesPage;
