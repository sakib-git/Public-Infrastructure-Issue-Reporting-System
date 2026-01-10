import React from 'react';

const Blog = () => {
  return (
   <section className="py-20 mt-10">
  <div className="max-w-[1400px] mx-auto px-4">
    
    {/* Section Title */}
    <h2 className="text-4xl font-bold text-center mb-4">
      Latest Blog Posts
    </h2>
    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
      Read our latest updates, news, and tips about city improvements and citizen engagement.
    </p>

    {/* Blog Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      
      {/* Blog Card 1 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300">
        {/* <img src={} alt="Blog 1" className="w-full h-48 object-cover" /> */}
        <div className="p-6 space-y-3">
          <h3 className="text-2xl font-bold">How Citizens Can Improve Their City</h3>
          <p className="text-gray-600 text-sm">
            Discover practical ways for citizens to report issues and contribute to a cleaner, safer city.
          </p>
          <div className="flex justify-between items-center text-gray-500 text-sm mt-4">
            <span>Jan 10, 2026</span>
            <button className="text-blue-500 hover:underline">Read More →</button>
          </div>
        </div>
      </div>

      {/* Blog Card 2 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300">
        {/* <img src={} alt="Blog 2" className="w-full h-48 object-cover" /> */}
        <div className="p-6 space-y-3">
          <h3 className="text-[27px] font-bold">Top 5 Issues Reported in Our City</h3>
          <p className="text-gray-600 text-sm">
            Learn about the most reported problems in your city and how the community is solving them.
          </p>
          <div className="flex justify-between items-center text-gray-500 text-sm mt-4">
            <span>Jan 8, 2026</span>
            <button className="text-blue-500 hover:underline">Read More →</button>
          </div>
        </div>
      </div>

      {/* Blog Card 3 */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition duration-300">
        {/* <img src={} alt="Blog 3" className="w-full h-48 object-cover" /> */}
        <div className="p-6 space-y-3">
          <h3 className="text-2xl font-bold">Understanding Community Voting on Reports</h3>
          <p className="text-gray-600 text-sm">
            Citizens can vote to prioritize city issues. Here's why it matters and how it works.
          </p>
          <div className="flex justify-between items-center text-gray-500 text-sm mt-4">
            <span>Jan 5, 2026</span>
            <button className="text-blue-500 hover:underline">Read More →</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  );
};

export default Blog;