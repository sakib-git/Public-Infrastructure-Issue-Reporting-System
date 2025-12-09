import React from 'react';
import useAuth from '../../../Hooks/useAuth';

const MyProfile = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <h1>my profile</h1>
      <h1>{user.displayName}</h1>
      <h1>{user.email}</h1>
      <img src={user.photoURL} alt="" />
    </div>
  );
};

export default MyProfile;
