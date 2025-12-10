// import React, { useState } from 'react';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';
// import IssueCard from '../../components/IssueCard';

// const AllIssues = () => {
//   const [searchText, setSearchText] = useState('');
//   const [Iscategory, setIscategory] = useState('');
//   const axiosSecure = useAxiosSecure();
//   const { data: issues = [], isLoading } = useQuery({
//     queryKey: ['issues'],
//     queryFn: async () => {
//       const res = await axiosSecure.get('/issues');
//       return res.data;
//     },
//   });
// const  finalIssues = issues || [];
// const arrayToFilter = Array.isArray(issues) ? issues : [];
// console.log(arrayToFilter)
  
// if(isLoading){
//   <p>loading</p>
// }
//   const filteredIssues = finalIssues = issues.filter((item) => {
//     const matchesSearch = item.title
//       .toLowerCase()
//       .includes(searchText.toLowerCase());

//     const matchesCategory =
//       Iscategory === ''
//         ? true
//         : item.category.toLowerCase() === Iscategory.toLowerCase();

//     return matchesSearch && matchesCategory;
//   });

//   if (isLoading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center">
//         <span className="loading loading-ring loading-lg"></span>
//         <span className="loading loading-ring loading-lg"></span>
//         <span className="loading loading-ring loading-lg"></span>
//       </div>
//     );
//   }
//   return (
//     <div className="mx-auto max-w-[1400px]">
//       <h2 className="py-2 text-4xl font-bold max-sm:px-4">
//         AllIssues: {issues.length}
//       </h2>

//       <div className="flex justify-between gap-10 max-sm:px-4">
//         <div className="w-full max-w-[500px]">
//           <input
//             type="text"
//             placeholder="Search issues..."
//             className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//         </div>
//         <select
//           className="rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
//           onChange={(e) => setIscategory(e.target.value)}
//         >
//           <option value="">All Category</option>
//           <option value="Broken Streetlights">Broken Streetlights</option>
//           <option value="Potholes">Potholes</option>
//           <option value="Water Leakage">Water Leakage</option>
//           <option value="Garbage Overflow">Garbage Overflow</option>
//           <option value="Damaged Footpaths">Damaged Footpaths</option>
//         </select>
//       </div>

//       <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2 lg:grid-cols-3">
//         {filteredIssues.length === 0 ? (
//           <div className="flex flex-col items-center justify-center">
//             <p className="mb-6 text-4xl font-bold text-gray-700"> Not Found</p>
//           </div>
//         ) : (
//           filteredIssues.map((issue) => (
//             <IssueCard
//               key={issue._id}
//               issue={issue}
//             ></IssueCard>
//           ))
//         )}

//       </div>
//     </div>
//   );
// };

// export default AllIssues;

import React, { useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import IssueCard from '../../components/IssueCard';

const AllIssues = () => {
  const [searchText, setSearchText] = useState('');
  const [Iscategory, setIscategory] = useState('');
  const axiosSecure = useAxiosSecure();

  const {
    data: issues = [], // ডেটা না আসা পর্যন্ত ডিফল্ট ভ্যালু খালি অ্যারে
    isLoading,
    isError, // এরর ট্র্যাক করার জন্য
  } = useQuery({
    queryKey: ['issues'],
    queryFn: async () => {
      const res = await axiosSecure.get('/issues');
      return res.data;
    },
  });

  // 👇 শুধুমাত্র একটি সেফটি ভ্যারিয়েবল ব্যবহার করুন
  // নিশ্চিত করুন যে issues একটি অ্যারে। যদি না হয় (null/undefined হলে), তবে একটি খালি অ্যারে ([]) ব্যবহার করুন।
  const arrayToFilter = Array.isArray(issues) ? issues : [];

  // 👇 arrayToFilter এর ওপর filter কল করুন
  const filteredIssues = arrayToFilter.filter((item) => {
    // সেফটি: নিশ্চিত করুন যে item-এ title আছে
    const itemTitle = item.title || ''; 
    const itemCategory = item.category || '';

    const matchesSearch = itemTitle
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCategory =
      Iscategory === ''
        ? true
        : itemCategory.toLowerCase() === Iscategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  // এরর হ্যান্ডলিং যোগ করুন
  if (isError) {
    return (
      <div className="text-center min-h-screen pt-20">
        <h2 className="text-2xl font-bold text-red-600">
          API Error: Could not load issues.
        </h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  
  // বাকি রেন্ডার কোড ঠিক আছে
  return (
    <div className="mx-auto max-w-[1400px]">
      <h2 className="py-2 text-4xl font-bold max-sm:px-4">
        AllIssues: {arrayToFilter.length} 
      </h2>

      {/* সার্চ এবং ক্যাটাগরি ড্রপডাউন কোড */}
      <div className="flex justify-between gap-10 max-sm:px-4">
        <div className="w-full max-w-[500px]">
          <input
            type="text"
            placeholder="Search issues..."
            className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <select
          className="rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
          onChange={(e) => setIscategory(e.target.value)}
        >
          <option value="">All Category</option>
          <option value="Broken Streetlights">Broken Streetlights</option>
          <option value="Potholes">Potholes</option>
          <option value="Water Leakage">Water Leakage</option>
          <option value="Garbage Overflow">Garbage Overflow</option>
          <option value="Damaged Footpaths">Damaged Footpaths</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2 lg:grid-cols-3">
        {filteredIssues.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <p className="mb-6 text-4xl font-bold text-gray-700"> Not Found</p>
          </div>
        ) : (
          filteredIssues.map((issue) => (
            <IssueCard
              key={issue._id}
              issue={issue}
            ></IssueCard>
          ))
        )}
      </div>
    </div>
  );
};

export default AllIssues;