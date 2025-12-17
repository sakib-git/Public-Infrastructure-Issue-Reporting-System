import { useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'kitzo/react';

const AdminAllIssues = () => {
  const axiosSecure = useAxiosSecure();
  const [openmodal, setOpenmodal] = useState();
  const [selectedIssue, setSelectedIssue] = useState(null);
  const {
    data: adminAllissues = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['adminall-issues'],
    queryFn: async () => {
      const res = await axiosSecure.get('/issues');
      return res.data.result;
    },
  });

  const { data: staffList = [] } = useQuery({
    queryKey: ['staffList'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin/staff-list');
      return res.data;
    },
  });

  const hadleUpdateIssueStatus = async (id, status) => {
    await axiosSecure.patch(`/issues/update-issue-status`, {
      issueId: id,
      status,
    });
    refetch();
  };

  const [isAssigning, setIsAssigning] = useState(false);

  const handleAssign = async (issueId, staffEmail) => {
    if (isAssigning) return;
    setIsAssigning(true);

    await axiosSecure.post(`/admin/assign-issue`, {
      issueId,
      staffEmail,
    });
    setOpenmodal(false);
    toast.success('Staff assigned successfully');
    refetch();
    setIsAssigning(false);
  };

  return (
    <div className="">
      <h2 className="px-2 py-2 text-4xl font-bold max-sm:px-4 md:px-3">
        AllIssues: {adminAllissues.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table-zebra table">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Assigned Staff</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {adminAllissues.map((issue, i) => (
              <tr key={issue._id}>
                <th>{i + 1}</th>
                <td>{issue.title}</td>
                <td>{issue.category}</td>
                <td>{issue.status}</td>
                <td>{issue.priority}</td>

                <td>
                  <button
                    disabled={issue.isAssigned}
                    onClick={() => {
                      if (isAssigning) {
                        toast.error('Wait while assigning issue');
                        return;
                      }
                      if (issue.status === 'rejected') {
                        toast.error('Cannot assign staff to a rejected issue');
                        return;
                      }

                      setSelectedIssue(issue);
                      setOpenmodal(true);
                    }}
                    className="btn"
                  >
                    <span>Add staff</span>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => hadleUpdateIssueStatus(issue._id, 'pending')}
                    className="btn"
                  >
                    Pending
                  </button>
                  <button
                    onClick={() =>
                      hadleUpdateIssueStatus(issue._id, 'rejected')
                    }
                    className="btn"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal */}
      {openmodal && (
        <div
          onClick={() => setOpenmodal(false)}
          className="fixed inset-0 flex items-center justify-center bg-black/10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[520px] rounded-xl bg-white p-6 shadow-2xl"
          >
            <div className="overflow-x-auto">
              <table className="table-zebra table">
                <thead>
                  <tr>
                    <th>Serial</th>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {staffList.map((staff, i) => (
                    <tr key={staff._id}>
                      <th>{i + 1}</th>
                      <td>{staff.displayName}</td>
                      <td>
                        <button
                          className="btn"
                          onClick={() => {
                            if (isAssigning) {
                              toast.error('Wait while assigning issue');
                              return;
                            }
                            handleAssign(selectedIssue._id, staff.email);
                          }}
                        >
                          <span>Assign</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAllIssues;
