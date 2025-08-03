import React, { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb";
import LinearBufferLoader from "./Loader/LinearBufferLoader";
import LinearQueryLoader from "./Loader/LinearQueryLoader";
import LinearIndeterminate from "./Loader/LinearIndeterminate";
import LinearDeterminate from "./Loader/LinearDeterminate";
import CircularDeterminate from "./Loader/CircularDeterminate";
import CircularIndeterminate from "./Loader/CircularIndeterminate";

const Progress = () => {
  return (
    <div className="min-h-screen h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Progress</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full flex xl:flex-row sm:flex-col justify-between gap-5 mt-6">
        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm-w-full">
          <div className="h-max w-full gap-3 flex flex-col p-4 rounded-md bg-white">
            <h4 className="text-lg font-semibold text-start">
              Circular Indeterminate
            </h4>
            <CircularIndeterminate />
          </div>
          <div className="h-max w-full gap-3 flex flex-col p-4 rounded-md bg-white">
            <h4 className="text-lg font-semibold text-start">
              Circular Determinate
            </h4>
            <CircularDeterminate />
          </div>
        </div>
        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm-w-full">
          <div className="h-max w-full gap-3 flex flex-col p-4 rounded-md bg-white">
            <h4 className="text-lg font-semibold text-start">
              Linear Indeterminate
            </h4>
            <LinearIndeterminate />
          </div>
          <div className="h-max w-full gap-3 flex flex-col p-4 rounded-md bg-white">
            <h4 className="text-lg font-semibold text-start">
              Linear Determinate
            </h4>
            <LinearDeterminate />
          </div>
          <div className="h-max w-full gap-3 flex flex-col p-4 rounded-md bg-white">
            <h4 className="text-lg font-semibold text-start">Linear Buffer</h4>
            <LinearBufferLoader />
          </div>
          <div className="h-max w-full gap-3 flex flex-col p-4 rounded-md bg-white">
            <h4 className="text-lg font-semibold text-start">Linear Query</h4>
            <LinearQueryLoader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
