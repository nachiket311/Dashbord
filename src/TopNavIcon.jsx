import React, { useState } from "react";
import Avatar from "./Avatar";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function TopNavIcon({
  title,
  number,
  icon,
  msgdata,
  id,
  onClick,
  isActive,
  showcontent,
}) {
  const [flag, setFlag] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV97Zo2ExmkPgJI7RpHV9_atYRJg747LtepQ&s"
  );

  const [displayhover, setDisplayhover] = useState("hidden");

  const handledisplay = () => {
    setDisplayhover("flex");
  };

  const displayhoverclose = () => {
    setDisplayhover("hidden");
  };

  const handleflag = (flg) => {
    setFlag(flg);
  };

  return (
    <>
      <div className="h-10 w-max flex items-center">
        <div
          className="h-[40px] w-[40px] flex justify-center items-center rounded-3xl hover:bg-gray-200 relative"
          onClick={() => {
            onClick(id);
          }}
          onMouseEnter={handledisplay}
          onMouseLeave={displayhoverclose}
        >
          {(() => {
            if (id === 3) {
              return (
                <Tippy content="Language">
                  <img
                    className="h-[25px] w-[25px] rounded-3xl"
                    src={flag}
                    alt=""
                    onMouseEnter={handledisplay}
                    onMouseLeave={displayhoverclose}
                  />
                </Tippy>
              );
            } else if (id === 1 || id === 2) {
              return (
                <Tippy content={title}>
                  <div className="h-max w-max">
                    <i
                      className={`${icon} text-xl text-gray-400 cursor-pointer`}
                    ></i>
                    <div className="h-[20px] w-[20px] rounded-full flex justify-center items-center bg-blue-600 text-white text-sm absolute top-0 right-0">
                      {number}
                    </div>
                  </div>
                </Tippy>
              );
            } else if (id === 4) {
              return (
                <Tippy content="Profile">
                  <div>
                    <Avatar bordercolor={"border-white"} />
                  </div>
                </Tippy>
              );
            }
          })()}
        </div>
      </div>
      {isActive && (
        <div
          className={`h-max w-max absolute border-gray-300 rounded ${showcontent} flex-col justify-between items-center right-0 top-12 mr-1 border bg-white`}
        >
          {(() => {
            if (id === 3) {
              return msgdata.map((country, index) => (
                <div
                  className="h-[40px] w-[120px] text-sm border-b border-gray-300 flex justify-center items-center flex-col cursor-pointer"
                  onClick={() => {
                    handleflag(country.src);
                  }}
                  key={index}
                >
                  {country.Name}
                </div>
              ));
            } else if (id === 1 || id === 2) {
              return (
                <>
                  <div className="h-[40px] w-[300px] text-sm border-b border-gray-300 flex justify-center items-center">
                    {number} New {title}
                  </div>
                  {msgdata.map((msg, index) => (
                    <div
                      className="h-20 w-full flex justify-center items-center border-b border-gray-300"
                      key={index}
                    >
                      <div className="h-12 w-12 bg-blue-800 flex justify-center items-center text-white text-lg rounded-full">
                        {msg.src === undefined ? (
                          <i className={`${msg.icon}`}></i>
                        ) : (
                          <img
                            className="h-12 w-12 rounded-full"
                            src={msg.src}
                            alt=""
                          />
                        )}
                      </div>
                      <div className=" w-[180px] pl-3 flex flex-col justify-center">
                        <p className="text-sm font-bold">{msg.Name}</p>
                        <p className="text-sm">{msg.Msg}</p>
                      </div>
                    </div>
                  ))}
                  <div className="h-[40px] w-full  flex justify-center items-center">
                    <p className="p-1 text-blue-700 hover:bg-blue-100 rounded text-sm">
                      Show All {title}
                    </p>
                  </div>
                </>
              );
            } else if (id === 4) {
              return msgdata.map((avatar, index) => (
                <div
                  className="h-max w-[150px] text-sm flex-col justify-center items-center cursor-pointer hover:bg-gray-100"
                  key={index}
                >
                  <div
                    className={`h-[40px] w-full flex flex-col ${
                      index === 1 ? "border-b border-gray-300" : ""
                    }  items-center justify-center`}
                  >
                    {avatar.first === undefined ? (
                      <div className="h-[20px] w-full text-sm flex justify-center items-center">
                        {avatar.second}
                      </div>
                    ) : (
                      <div className="h-[20px] w-full text-sm flex justify-center items-center">
                        {avatar.first}
                      </div>
                    )}
                  </div>
                </div>
              ));
            }
          })()}
        </div>
      )}
    </>
  );
}
