import React from 'react';
import { NavLink } from 'react-router-dom';

const InternalError = () => {
  return (
    <div className='h-screen w-screen bg-blue-50 flex flex-col justify-center items-center gap-3'>
          <h2 className='font-semibold text-3xl text-center'>500</h2>
          <p className='font-semibold text-xl text-center'>Internal Server Error.</p>
          <p className='text-center w-[30%]'>The server encountered something unexpected that didn't allow it to complete the request.</p>
          <NavLink to="/" className="p-3 bg-blue-800 cursor-pointer rounded text-white hover:bg-opacity-90">Back to Website</NavLink>
        </div>
  );
}

export default InternalError;
