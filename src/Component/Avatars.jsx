import React from "react";
import Breadcrumb from "../Breadcrumb";

const Avatars = () => {
  return (
    <div className="min-h-screen h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Avatars</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full flex xl:flex-row sm:flex-col justify-between gap-5 mt-6">
        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm-w-full">
          {/*Image Avatar*/}
          <div className="h-max w-full gap-3 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Image Avatars</h4>
            <p>
              Image avatars can be created by passing standard img props src or
              srcSet into the component.
            </p>
            <div className="h-max w-full flex justify-center items-center gap-3">
              <img
                className="h-10 w-10 rounded-full"
                src="https://r2.erweima.ai/imgcompressed/img/compressed_95f6dc695351dbb5cf511ee473897718.webp"
                alt=""
              />
              <img
                className="h-16 w-16 rounded-full"
                src="https://r2.erweima.ai/imgcompressed/img/compressed_95f6dc695351dbb5cf511ee473897718.webp"
                alt=""
              />
            </div>
          </div>
          {/*Latter Avatar*/}
          <div className="h-max w-full gap-3 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Latter Avatars</h4>
            <p>
              Avatars containing simple characters can be created by passing
              your string as children.
            </p>
            <div className="h-max w-full flex justify-center items-center gap-3">
              <div className="h-12 w-12 bg-gray-400 text-white font-semibold flex justify-center items-center rounded-full border-2 border-white z-0">
                H
              </div>
              <div className="h-12 w-12 bg-orange-600 text-white font-semibold flex justify-center items-center rounded-full border-2 border-white z-0">
                N
              </div>
              <div className="h-12 w-12 bg-purple-600 text-white font-semibold flex justify-center items-center rounded-full border-2 border-white z-0">
                OP
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm-w-full">
            {/*icon Avatar */}
          <div className="h-max w-full gap-3 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Icon Avatars</h4>
            <p>Icon avatars are created by passing an icon as children.</p>
            <div className="h-max w-full flex justify-center items-center gap-3">
              <div className="h-12 w-12 bg-gray-400 text-white font-semibold flex justify-center items-center rounded-full border-2 border-white z-0">
                <i className="fa-solid fa-folder"></i>
              </div>
              <div className="h-12 w-12 bg-pink-600 text-white font-semibold flex justify-center items-center rounded-full border-2 border-white z-0">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="h-12 w-12 bg-green-600 text-white font-semibold flex justify-center items-center rounded-full border-2 border-white z-0">
                <i className="fa-solid fa-paste"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatars;
