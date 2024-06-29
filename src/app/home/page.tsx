"use client";
import React from 'react';
import useUser from '../hook/useUser';

const Homepage: React.FC = () => {
  const { isFetching, data } = useUser();

  if (isFetching) {
    return <div>Loading...</div>; // Better UX to show loading state
  }

  if (data && data.length > 0) {
    const user = data[0]; // Since we are returning an array of users
    return (
      <div className='w-full flex flex-col justify-center items-center'>
        <p>Welcome to 27days {user.display_name}</p>
      </div>
    );
  }

  return <div>No user data found</div>;
};

export default Homepage;
