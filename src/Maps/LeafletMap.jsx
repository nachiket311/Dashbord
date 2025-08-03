import React from "react";
import Breadcrumb from "../Breadcrumb";
import WorldMap from "../Worldmap";
import IndiaMap from "../IndiaMap";

const LeafletMap = () => {
  return (
    <div className="min-h-screen h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Maps</p>
          <Breadcrumb />
        </div>
      </div>

      <div className="h-max w-full flex xl:flex-row sm:flex-col justify-between gap-5 mt-6">
        <div className="h-max xl:w-[49%] sm:w-full">
          {/*icon Badges*/}
          <div className="h-max w-full gap-3 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">World Map</h4>
            <div className="h-[400px] w-full">
                <WorldMap />
            </div>
          </div>
        </div>
        <div className="h-max xl:w-[49%] sm:w-full">
          {/*icon Badges*/}
          <div className="h-max w-full gap-3 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">India Map</h4>
            <div className="h-[400px] w-full">
                <IndiaMap />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeafletMap;
