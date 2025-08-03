import React from "react";
import { useForm } from "react-hook-form";
import Breadcrumb from "../Breadcrumb";
import StaticDatePickerBasic from "./StaticDatePicker";

const Pickers = () => {
  const { register } = useForm();

  return (
    <div className="min-h-screen h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Pickers</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full flex xl:flex-row sm:flex-col justify-between gap-5 mt-6">
        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm-w-full">
          {/*Date Picker*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Date Picker</h4>
            <p>
              The date picker is rendered as a modal dialog on mobile, and a
              textbox with a popup on desktop.rmative text when users hover
              over, focus on, or tap an element.
            </p>
            <form className="p-4 space-y-4 max-w-xs">
              <div className="relative w-full">
                <input
                  type="date"
                  {...register("date")}
                  placeholder=" "
                  className="peer h-14 text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
                />
                <label
                  htmlFor="date"
                  className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Basic Example
                </label>
              </div>
            </form>
          </div>
          {/*Date Time Picker*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">
              Date Time Picker
            </h4>
            <p>
              It's possible to render any date picker without the modal/popover
              and text field. This can be helpful when building custom
              popover/modal containers.
            </p>
            <form className="p-4 space-y-4 max-w-xs">
              <div className="relative w-full">
                <input
                  type="datetime-local"
                  {...register("datetime")}
                  placeholder=" "
                  className="peer h-14 text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
                />
                <label
                  htmlFor="datetime"
                  className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Basic Example
                </label>
              </div>
            </form>
          </div>
          {/*Time Picker*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Time Picker</h4>
            <p>
              The date picker is rendered as a modal dialog on mobile, and a
              textbox with a popup on desktop.
            </p>
            <form className="p-4 space-y-4 max-w-xs">
              <div className="relative w-full">
                <input
                  type="time"
                  {...register("time")}
                  placeholder=" "
                  className="peer h-14 text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
                />
                <label
                  htmlFor="time"
                  className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Basic Example
                </label>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm-w-full">
          {/*Date picker | Static mode*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">
              Date picker | Static mode
            </h4>
            <p>
              It's possible to render any date picker without the modal/popover
              and text field. This can be helpful when building custom
              popover/modal containers.
            </p>
            <StaticDatePickerBasic />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pickers;
