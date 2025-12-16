import { useQuery } from '@tanstack/react-query';

import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AdminManageusers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: manageUser = [], refetch } = useQuery({
    queryKey: ['manage-users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin/manage-users');
      return res.data;
    },
  });

  const handleBlock = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'This user will be blocked and cannot log in!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, block user!',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      const res = await axiosSecure.patch(`/users/block/${id}`);

      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          title: 'Blocked!',
          text: 'The user has been blocked successfully.',
          icon: 'success',
        });
      }
    }
  };
  const handleUnblock = async (id) => {
    
      const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'This user will be unblocked and can log in again!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, unblock user!',
      cancelButtonText: 'Cancel',
    });
    if (result.isConfirmed) {
      const res = await axiosSecure.patch(`/users/unblock/${id}`);
      if (res.data.modifiedCount) {
        refetch(); 
        Swal.fire({
          title: 'Unblocked!',
          text: 'The user has been unblocked successfully.',
          icon: 'success',
        });
    
  };
}
  }

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
                  {u.isSubscribed ? <span>Premium</span> : <span>Free</span>}
                </td>

                <td>
                  <div className="flex items-center gap-2">
                    <button
                      className="btn"
                      onClick={() => handleBlock(u._id)}
                      disabled={u.isblock}
                    >
                      Block
                    </button>
                    <button
                      className="btn"
                      onClick={() => handleUnblock(u._id)}
                    >
                      Unblock

                    </button>
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
