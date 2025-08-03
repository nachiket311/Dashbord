import React from "react";

const CircularIndeterminate = () => {
  return (
    <div className="flex justify-start items-center gap-7 h-32">
      <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default CircularIndeterminate;
