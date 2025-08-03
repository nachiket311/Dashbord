import React from "react";
import Breadcrumb from "../Breadcrumb";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css"; // zoom effect

const Tooltip = () => {
  return (
    <div className="min-h-screen h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Tooltip</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full flex xl:flex-row sm:flex-col justify-between gap-5 mt-6">
        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm:w-full">
          {/*Simple List*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Simple Tooltip</h4>
            <p>
              Tooltips display informative text when users hover over, focus on,
              or tap an element.
            </p>
            <div className="h-max w-full flex justify-start flex-wrap items-center gap-3">
              <Tippy content="delete" placement="bottom">
                <button className="h-14 w-14 rounded-full text-xl flex justify-center items-center font-semibold  text-gray-500 hover:bg-gray-100">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </Tippy>
              <Tippy content="Add" placement="bottom">
                <button className="h-14 w-14 p-3 px-4 rounded-full flex justify-center items-center font-semibold bg-blue-600 text-white hover:bg-blue-800">
                  <i className="fa-solid fa-plus"></i>
                </button>
              </Tippy>
            </div>
          </div>
          {/*Triggrable Tooltip*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">
              Triggrable Tooltip
            </h4>
            <p>
              You can define the types of events that cause a tooltip to show.
            </p>
            <div className="h-max w-full flex justify-start flex-wrap items-center gap-3">
              <Tippy content="Add" placement="bottom">
                <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                  Hover or Touch
                </button>
              </Tippy>
              <Tippy content="Add" placement="bottom" trigger="focus">
                <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                  Focus Or Touch
                </button>
              </Tippy>
              <Tippy content="Add" placement="bottom">
                <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                  Hover
                </button>
              </Tippy>
              <Tippy
                content="Add"
                placement="bottom"
                trigger="click"
                interactive={true}
              >
                <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                  Click
                </button>
              </Tippy>
            </div>
          </div>
          {/*Simple List*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Simple Tooltip</h4>
            <p>
              Tooltips display informative text when users hover over, focus on,
              or tap an element.
            </p>
            <div className="h-max w-full flex justify-start flex-wrap items-center gap-3">
              <Tippy content="Add" placement="bottom" animation="scale">
                <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                  grow
                </button>
              </Tippy>
              <Tippy content="Add" placement="bottom">
                <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                  Fade
                </button>
              </Tippy>
              <Tippy content="Add" placement="bottom" animation="scale">
                <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                  Zoom
                </button>
              </Tippy>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm-w-full">
          {/*Positioned Tooltips*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">
              Positioned Tooltips
            </h4>
            <p>
              The Tooltip has 12 placements choice. They don’t have directional
              arrows; instead, they rely on motion emanating from the source to
              convey direction.
            </p>
            <div className="h-max w-full flex flex-col justify-between items-center gap-3">
              <div className="h-max w-full flex justify-center items-center gap-2">
                <Tippy content="Add" placement="top-start">
                  <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                    Top Start
                  </button>
                </Tippy>
                <Tippy content="Add" placement="top">
                  <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                    Top
                  </button>
                </Tippy>
                <Tippy content="Add" placement="top-end">
                  <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                    Top End
                  </button>
                </Tippy>
              </div>
              <div className="h-max w-full flex justify-between items-center">
                <div className="h-max w-full flex flex-col justify-between items-start gap-2">
                  <Tippy content="Add" placement="left-start">
                    <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                      Left Start
                    </button>
                  </Tippy>
                  <Tippy content="Add" placement="left">
                    <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                      Left
                    </button>
                  </Tippy>
                  <Tippy content="Add" placement="left-end">
                    <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                      Left End
                    </button>
                  </Tippy>
                </div>
                <div className="h-max w-full flex flex-col justify-between items-end mr-3 gap-2">
                  <Tippy content="Add" placement="right-start">
                    <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                      Right Start
                    </button>
                  </Tippy>
                  <Tippy content="Add" placement="right">
                    <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                      Right
                    </button>
                  </Tippy>
                  <Tippy content="Add" placement="right-end">
                    <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                      Right End
                    </button>
                  </Tippy>
                </div>
              </div>
              <div className="h-max w-full flex justify-center items-center gap-2">
                <Tippy content="Add" placement="bottom-start">
                  <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                    Bottom Start
                  </button>
                </Tippy>
                <Tippy content="Add" placement="bottom">
                  <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                    Bottom
                  </button>
                </Tippy>
                <Tippy content="Add" placement="bottom-end">
                  <button className="h-max w-max p-2 px-3 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800">
                    Bottom End
                  </button>
                </Tippy>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
