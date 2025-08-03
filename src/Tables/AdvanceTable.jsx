import React from "react";
import Breadcrumb from "../Breadcrumb";
import ATable from "./ATable";

const AdvanceTable = () => {
  return (
    <div className="min-h-screen h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Tables</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full flex xl:flex-row sm:flex-col justify-between gap-5 mt-6">
        <div className="flex-col space-y-5 h-max w-full">
          {/*Advance Table*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Nutrition</h4>
            <ATable />
          </div>
          </div>
          </div>
    </div>
  );
}

export default AdvanceTable;
