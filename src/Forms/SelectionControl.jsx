import React from "react";
import Breadcrumb from "../Breadcrumb";
import Switches from "./Switches";
import Checkbox from "./Checkbox";
import RadioButtons from "./RadioButtons";
import LablePlacement from "./LablePlacement";

const SelectionControl = () => {
  return (
    <div className="min-h-screen h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Selection Control</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full flex xl:flex-row sm:flex-col justify-between gap-5 mt-6">
        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm:w-full">
          {/*Radio Button*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <RadioButtons />
          </div>
          {/*Switches*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <Switches />
          </div>
        </div>
        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm-w-full">
          {/*Checkbox*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <Checkbox />
          </div>
          {/*LablePlacement*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <LablePlacement />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionControl;
