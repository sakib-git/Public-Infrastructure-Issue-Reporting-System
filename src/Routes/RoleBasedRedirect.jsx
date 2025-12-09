import { Navigate } from 'react-router';
import useAuth from '../Hooks/useAuth';

export default function RoleBasedRedirect({ children, requiredRole }) {
  const { user } = useAuth();

  if (user.role !== requiredRole) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return children;
}
