import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AdminAllIssues = () => {
  const axiosSecure = useAxiosSecure();
  const { data: issues = [], isLoading } = useQuery({
    queryKey: ['issues'],
    queryFn: async () => {
      const res = await axiosSecure.get('/issues');
      return res.data;
    },
  });
  console.log(issues)

  return (
    <div className="">
      <h2 className="py-2 text-4xl font-bold max-sm:px-4">
        AllIssues: {issues.length}
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
            {issues.map((issue, i) => (
              <tr key={issue._id}>
                <th>{i + 1}</th>
                <td>{issue.title}</td>
                <td>{issue.category}</td>
                <td>{issue.status}</td>
                <td>{issue.priority}</td>
                <td>staff</td>
                <td>
                  <button className='btn'>add</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAllIssues;
