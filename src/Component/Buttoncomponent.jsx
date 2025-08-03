import React from "react";
import Breadcrumb from "../Breadcrumb";

const Buttoncomponent = () => {
  return (
    <div className="min-h-screen h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Buttons</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full flex xl:flex-row sm:flex-col justify-between gap-5 mt-6">
        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm-w-full">
          {/*Contained Buttons*/}
          <div className="h-max w-full gap-5 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">
              Contained Buttons
            </h4>
            <p>
              Contained buttons are high-emphasis, distinguished by their use of
              elevation and fill.
            </p>
            <div className="h-max w-full flex justify-start flex-wrap items-center gap-3">
              <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                Default
              </button>
              <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                Primary
              </button>
              <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-500 text-white hover:bg-blue-700">
                Secondary
              </button>
              <button className="h-max w-max p-2 px-3 rounded font-semibold bg-green-600 text-white hover:bg-green-800">
                Success
              </button>
              <button className="h-max w-max p-2 px-3 rounded font-semibold bg-yellow-600 text-white hover:bg-yellow-800">
                Warning
              </button>
              <button className="h-max w-max p-2 px-3 rounded font-semibold bg-red-600 text-white hover:bg-red-800">
                Error
              </button>
              <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-400 text-white hover:bg-blue-600">
                Info
              </button>
              <button
                disabled
                className="h-max w-max p-2 px-3 rounded font-semibold bg-gray-300 text-gray-600 cursor-not-allowed "
              >
                Disable
              </button>
            </div>
          </div>
          {/*Outline Buttons*/}
          <div className="h-max w-full gap-5 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">
              Outlined Buttons
            </h4>
            <p>
              Outlined buttons are medium-emphasis buttons which contain actions
              that are not that important.
            </p>
            <div className="h-max w-full flex justify-start flex-wrap items-center gap-3">
              <button className="h-max w-max p-2 px-3 rounded font-semibold border border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600">
                Default
              </button>
              <button className="h-max w-max p-2 px-3 rounded font-semibold border border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600">
                Primary
              </button>
              <button className="h-max w-max p-2 px-3 rounded font-semibold border border-blue-400 text-blue-500 hover:bg-blue-50 hover:border-blue-500">
                Secondary
              </button>
              <button
                disabled
                className="h-max w-max p-2 px-3 rounded font-semibold border border-gray-400 text-gray-600 cursor-not-allowed "
              >
                Disable
              </button>
              <button className="h-max w-max p-2 px-3 rounded font-semibold border border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600">
                Link
              </button>
            </div>
          </div>
          {/*Text Buttons*/}
          <div className="h-max w-full gap-5 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Text Buttons</h4>
            <p>
              Text buttons are typically used for less-pronounced actions in
              your app.
            </p>
            <div className="h-max w-full flex justify-start flex-wrap items-center gap-3">
              <button className="h-max w-max p-2 px-3 rounded font-semibold  text-blue-600 hover:bg-blue-50">
                Default
              </button>
              <button className="h-max w-max p-2 px-3 rounded font-semibold text-blue-600 hover:bg-blue-50">
                Primary
              </button>
              <button className="h-max w-max p-2 px-3 rounded font-semibold  text-blue-500 hover:bg-blue-50">
                Secondary
              </button>
              <button
                disabled
                className="h-max w-max p-2 px-3 rounded font-semibold text-gray-600 cursor-not-allowed "
              >
                Disable
              </button>
              <button className="h-max w-max p-2 px-3 rounded font-semibold text-blue-600 hover:bg-blue-50">
                Link
              </button>
            </div>
          </div>
          {/*Icon Buttons*/}
          <div className="h-max w-full gap-5 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Icon Buttons</h4>
            <p>
              Sometimes you might want to have icons for certain button to
              enhance the UX.
            </p>
            <div className="h-max w-full flex justify-start flex-wrap items-center gap-3">
              <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                Add <i className="fa-solid fa-plus"></i>
              </button>
              <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-500 text-white hover:bg-blue-700">
                Edit <i className="fa-solid fa-pen"></i>
              </button>
              <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                Upload <i className="fa-solid fa-cloud-arrow-up"></i>
              </button>
              <button className="h-max w-max p-2 px-3 rounded font-semibold bg-gray-300 text-gray-500">
                <i className="fa-solid fa-microphone"></i> Talk
              </button>
              <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                <i className="fa-solid fa-floppy-disk"></i> Save
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm-w-full">
          {/*Button sizes*/}
          <div className="h-max w-full gap-5 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Button Sizes</h4>
            <p>
              Text buttons are typically used for less-pronounced actions in
              your app.
            </p>
            <div className="h-max w-full flex justify-start flex-wrap items-center gap-3">
              <button className="h-max w-max p-1 px-2 rounded font-semibold  text-blue-600 hover:bg-blue-50">
                Small
              </button>
              <button className="h-max w-max p-2 px-3 rounded font-semibold text-blue-600 hover:bg-blue-50">
                Medium
              </button>
              <button className="h-max w-max p-3 px-4 rounded font-semibold  text-blue-600 hover:bg-blue-50">
                Large
              </button>
            </div>
            <div className="h-max w-full flex justify-start flex-wrap items-center gap-3">
              <button className="h-max w-max p-1 px-2 rounded font-semibold border border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600">
                Small
              </button>
              <button className="h-max w-max p-2 px-3 rounded font-semibold border border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600">
                Medium
              </button>
              <button className="h-max w-max p-3 px-4 rounded font-semibold border border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600">
                Large
              </button>
            </div>
            <div className="h-max w-full flex justify-start flex-wrap items-center gap-3">
              <button className="h-max w-max p-1 px-2 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                Small
              </button>
              <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                Medium
              </button>
              <button className="h-max w-max p-3 px-4 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                Large
              </button>
            </div>
            <div className="h-max w-full flex justify-start flex-wrap items-center gap-3">
              <button className="h-10 w-10 rounded-full flex justify-center items-center font-semibold bg-blue-600 text-white hover:bg-blue-800">
                <i className="fa-solid fa-plus"></i>
              </button>
              <button className="h-12 w-12 p-2 px-3 rounded-full flex justify-center items-center font-semibold bg-blue-600 text-white hover:bg-blue-800">
                <i className="fa-solid fa-plus"></i>
              </button>
              <button className="h-14 w-14 p-3 px-4 rounded-full flex justify-center items-center font-semibold bg-blue-600 text-white hover:bg-blue-800">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <div className="h-max w-full flex justify-start flex-wrap items-center gap-3">
              <button className="h-10 w-10 rounded-full flex justify-center items-center text-sm font-semibold  text-gray-500 hover:bg-gray-100">
                <i className="fa-solid fa-trash"></i>
              </button>
              <button className="h-12 w-12 rounded-full text-lg flex justify-center items-center font-semibold  text-gray-500 hover:bg-gray-100">
                <i className="fa-solid fa-trash"></i>
              </button>
              <button className="h-14 w-14 rounded-full text-xl flex justify-center items-center font-semibold  text-gray-500 hover:bg-gray-100">
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
          {/*Floating Action Button*/}
          <div className="h-max w-full gap-5 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">
              Floating Action Button
            </h4>
            <p>
              A floating action button (FAB) performs the primary, or most
              common, action on a screen.
            </p>
            <div className="h-max w-full flex justify-start flex-wrap items-center gap-3">
              <button className="h-14 w-14 p-3 px-4 rounded-full flex justify-center items-center font-semibold bg-blue-600 text-white hover:bg-blue-800">
                <i className="fa-solid fa-plus"></i>
              </button>
              <button className="h-14 w-14 p-3 px-4 rounded-full flex justify-center items-center font-semibold bg-blue-600 text-white hover:bg-blue-800">
                <i className="fa-solid fa-pen"></i>
              </button>
              <button className="h-max w-max p-3 px-4 rounded-full flex justify-center items-center font-semibold bg-gray-400">
                <i className="fa-solid fa-caret-up mr-3"></i> Extended
              </button>
              <button className="h-14 w-14 p-3 px-4 rounded-full flex justify-center items-center font-semibold bg-gray-400 text-gray-300">
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttoncomponent;
