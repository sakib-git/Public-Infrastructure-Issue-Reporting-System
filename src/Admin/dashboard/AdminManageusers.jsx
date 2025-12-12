import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const AdminManageusers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: manageUser = [], refetch } = useQuery({
    queryKey: ['manage-users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin/manage-users');
      return res.data;
    },
  });
  return (
    <div>
      <h5 className="ml-4 text-4xl font-bold">
        Manage users : {manageUser.length}
      </h5>
      <div className="overflow-x-auto">
        <table className="table-zebra table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>User</th>
              <th>Email</th>
              <th>subscription</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {manageUser.map((u, i) => (
              <tr key={u._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="size-5 overflow-hidden rounded-full">
                      <img
                        className="size-full object-cover object-center"
                        src={u.photoURL}
                        alt={`${u.displayName} profile image`}
                      />
                    </div>
                    <h4 className="text-nowrap">{u.displayName}</h4>
                  </div>
                </td>
                <td>{u.email}</td>
                <td>
                  <button className='btn'>view</button>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <button className="btn">block</button>
                    <button className="btn">unblock</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminManageusers;
