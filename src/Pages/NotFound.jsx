import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='h-screen w-screen bg-blue-50 flex flex-col justify-center items-center gap-3'>
      <h2 className='font-semibold text-3xl text-center'>404</h2>
      <p className='font-semibold text-xl text-center'>Page not found.</p>
      <p className='text-center'>The page you are looking for might have been removed.</p>
      <NavLink to="/" className="p-3 bg-blue-800 cursor-pointer rounded text-white hover:bg-opacity-90">Back to Website</NavLink>
    </div>
  );
}

export default NotFound;
