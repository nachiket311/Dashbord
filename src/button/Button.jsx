import React from 'react';

function Button({text , colour}) {
  return (
    <div className={`h-8 p-2 cursor-pointer bg-opacity-90  rounded  ${!colour ? "bg-blue-800 text-white" : colour} flex justify-center items-center hover:bg-opacity-100`}>
        <p className='text-sm'>{text}</p>
    </div>
  );
}

export default Button;
