import React , {useState} from "react";
import Breadcrumb from "../Breadcrumb";

const Lists = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Lists</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full flex xl:flex-row sm:flex-col justify-between gap-5 mt-6">
        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm-w-full">
          {/*Simple List*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md bg-white">
            <h4 className="text-lg pt-4 px-4 font-semibold text-start">
              Simple Lists
            </h4>
            <p className="px-4">
              Lists are a continuous group of text or images.
            </p>
            <div className="h-max w-full border-b border-gray-300">
              <div className="h-12 w-full p-3 flex justify-start items-center gap-7 hover:bg-gray-300">
                <i className="fa-solid fa-inbox text-xl text-gray-500"></i>
                <p>Inbox</p>
              </div>
              <div className="h-12 w-full p-3 flex justify-start items-center gap-7 hover:bg-gray-300">
                <i className="fa-solid fa-envelope-open text-xl text-gray-500"></i>
                <p>Draft</p>
              </div>
            </div>
            <div className="h-max w-full">
              <div className="h-12 w-full p-3 flex justify-start items-center gap-7 hover:bg-gray-300">
                <p>Trash</p>
              </div>
              <div className="h-12 w-full p-3 flex justify-start items-center gap-7">
                <p>Spam</p>
              </div>
            </div>
          </div>
          {/*Condence List*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md bg-white">
            <h4 className="text-lg pt-4 px-4 font-semibold text-start">
              Condence Lists
            </h4>
            <p className="px-4">
              Lists are a continuous group of text or images.
            </p>
            <div className="h-max w-full border-b border-gray-300">
              <div className="h-12 w-full p-3 flex justify-start items-center gap-7 hover:bg-gray-300">
                <i className="fa-solid fa-inbox text-xl text-gray-500"></i>
                <p>Inbox</p>
              </div>
              <div className="h-12 w-full p-3 flex justify-start items-center gap-7 hover:bg-gray-300">
                <i className="fa-solid fa-envelope-open text-xl text-gray-500"></i>
                <p>Draft</p>
              </div>
            </div>
            <div className="h-max w-full">
              <div className="h-12 w-full p-3 flex justify-start items-center gap-7 hover:bg-gray-300">
                <p>Trash</p>
              </div>
              <div className="h-12 w-full p-3 flex justify-start items-center gap-7">
                <p>Spam</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm-w-full">
          {/*Folder List*/}
          <div className="h-max w-full gap-3 flex flex-col p-4 rounded-md bg-white">
            <h4 className="text-lg font-semibold text-start">Folder Lists</h4>
            <p>Lists are a continuous group of text or images.</p>
            <div className="h-max w-full mt-3 flex flex-col gap-5">
              <div className="h-12 w-full p-3 flex justify-start items-center gap-3">
                <div className="p-4 rounded-full bg-gray-300 text-white text-lg flex justify-center items-center">
                  <i className="fa-solid fa-image"></i>
                </div>
                <div className="flex flex-col">
                  <p>Photos</p>
                  <p className="text-gray-500">Jan 9, 2014</p>
                </div>
              </div>
              <div className="h-12 w-full p-3 flex justify-start items-center gap-3">
                <div className="p-4 rounded-full bg-gray-300 text-white text-lg flex justify-center items-center">
                  <i className="fa-solid fa-suitcase"></i>
                </div>
                <div className="flex flex-col">
                  <p>Work</p>
                  <p className="text-gray-500">Jan 7, 2014</p>
                </div>
              </div>
              <div className="h-12 w-full p-3 flex justify-start items-center gap-3">
                <div className="p-4 rounded-full bg-gray-300 text-white text-lg flex justify-center items-center">
                  <i className="fa-solid fa-umbrella"></i>
                </div>
                <div className="flex flex-col">
                  <p>Photos</p>
                  <p className="text-gray-500">July 20, 2014</p>
                </div>
              </div>
            </div>
          </div>
          {/*Nested List*/}
          <div className="h-max w-full gap-3 flex flex-col p-4 rounded-md bg-white">
            <h4 className="text-lg font-semibold text-start">Nested Lists</h4>
            <p>Lists are a continuous group of text or images.</p>
            <div className="h-max w-full mt-3 flex flex-col gap-5">
              <p className="text-gray-500 h-12 w-full">Nested List Items</p>
              <div className="h-12 w-full p-3 flex justify-start items-center gap-7 hover:bg-gray-300">
                <i className="fa-solid fa-paper-plane text-xl text-gray-500"></i>
                <p>Sent Mail</p>
              </div>
              <div className="h-12 w-full p-3 flex justify-start items-center gap-7 hover:bg-gray-300">
                <i className="fa-solid fa-envelope-open text-xl text-gray-500"></i>
                <p>Draft</p>
              </div>
              <div
              onClick={()=> setIsOpen(!isOpen)}
                className={`${isOpen ? "h-max" : "h-12"} w-full p-3 flex justify-between items-center`}
              >
                <div className="h-full w-full flex justify-start items-center gap-7">
                  <i className="fa-solid fa-inbox text-xl text-gray-500"></i>
                  <p>Inbox</p>
                </div>
                <i className={`fa-solid ${isOpen ? "fa-angle-up" : "fa-angle-down"}`}/>
              </div>
              <div className={`h-12 w-full p-4 px-6 ${isOpen ? "flex" : "hidden"} justify-start items-center gap-5`}>
                <i className="fa-regular fa-star" />
                <p>Starred</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
