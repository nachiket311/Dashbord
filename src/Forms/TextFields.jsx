import React from "react";
import { useForm } from "react-hook-form";
import Breadcrumb from "../Breadcrumb";

const TextFields = () => {
  const { register } = useForm();
  return (
    <div className="min-h-screen h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">TextField</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full flex xl:flex-row sm:flex-col justify-between gap-5 mt-6">
        <div className="flex flex-col gap-3 h-max w-full">
          {/*Simple List*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">TextField</h4>
            <p>
              The TextField wrapper component is a complete form control including a label, input and help text.
            </p>
            <form className="w-[100%] flex flex-wrap gap-4">
              {/* Required */}
              <div className="relative xl:w-[18%] lg:w-[20%]  sm:w-[24%]">
                <input
                  type="text"
                  {...register("Required", {
                    required: "FirstName is required",
                  })}
                  defaultValue="Hello World!"
                  placeholder=" "
                  className="peer h-14 text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
                />
                <label
                  htmlFor="Required"
                  className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Required*
                </label>
              </div>
              {/* Disabled */}
              <div className="relative xl:w-[18%] lg:w-[20%]  sm:w-[24%]">
                <input
                  type="text"
                  {...register("Disabled")}
                  disabled
                  defaultValue="Hello World!"
                  placeholder=" "
                  className="peer h-14 text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
                />
                <label
                  htmlFor="Required"
                  className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Disabled
                </label>
              </div>
              {/* Password */}
              <div className="relative xl:w-[18%] lg:w-[20%]  sm:w-[24%]">
                <input
                  type="Password"
                  {...register("Password")}
                  placeholder=" "
                  className="peer h-14 text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
                />
                <label
                  htmlFor="Password"
                  className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Password
                </label>
              </div>
              {/* Read Only */}
              <div className="relative xl:w-[18%] lg:w-[20%]  sm:w-[24%]">
                <input
                  type="text"
                  {...register("Read Only")}
                  disabled
                  defaultValue="Hello World!"
                  placeholder=" "
                  className="peer h-14 text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
                />
                <label
                  htmlFor="Required"
                  className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Read Only
                </label>
              </div>
              {/* Number */}
              <div className="relative xl:w-[18%] lg:w-[20%]  sm:w-[24%]">
                <input
                  type="number"
                  placeholder=" "
                  className="peer h-14 text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
                />
                <label
                  htmlFor="Number"
                  className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Number
                </label>
              </div>
              {/* Search */}
              <div className="relative xl:w-[18%] lg:w-[20%]  sm:w-[24%]">
                <input
                  type="text"
                  {...register("Search")}
                  placeholder=" "
                  className="peer h-14 text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
                />
                <label
                  htmlFor="Search"
                  className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Search Field
                </label>
              </div>
              {/* Helper Text */}
              <div className="relative xl:w-[18%] lg:w-[20%]  sm:w-[24%]">
                <input
                  type="text"
                  {...register("Default")}
                  defaultValue="Default Value"
                  placeholder=" "
                  className="peer h-14 text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
                />
                <label
                  htmlFor="Default"
                  className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Helper Text
                </label>
                <span className="text-gray-500">Importatnt text</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextFields;
