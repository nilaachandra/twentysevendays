"use client";

import React, { useEffect } from 'react';
import useUser from '../hook/useUser';
import { useRouter } from 'next/navigation';

const Homepage: React.FC = () => {
  const { isFetching, data } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isFetching && (!data || data.length === 0)) {
      router.push('/error');
    }
  }, [isFetching, data, router]);

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

  // This return statement is not necessary anymore since we handle redirection in useEffect
  return null;
};

export default Homepage;

