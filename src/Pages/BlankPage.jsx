import React from "react";
import Breadcrumb from "../Breadcrumb";

function BlankPage() {
  return (
    <div className="h-screen sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Blank Page</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full p-4 bg-white mt-6">
        <h2 className="font-semibold text-2xl mb-2">Empty Card</h2>
        <p>Empty Card</p>
      </div>
    </div>
  );
}

export default BlankPage;
