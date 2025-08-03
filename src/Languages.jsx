import React, { useState } from "react";

export default function Languages({ Country }) {
  const [showcontent, setShowcontent] = useState("hidden");
  const [flag, setFlag] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV97Zo2ExmkPgJI7RpHV9_atYRJg747LtepQ&s"
  );

  const handleshow = () => {
    showcontent === "hidden"
      ? setShowcontent("flex")
      : setShowcontent("hidden");
  };

  const handleflag = (flg) => {
    setFlag(flg);
  };

  return (
    <>
      <div
        className="h-[50px] w-[50px] flex justify-center items-center rounded-3xl hover:bg-gray-200 cursor-pointer"
        onClick={handleshow}
      >
        <img className="h-[30px] w-[30px] rounded-3xl" src={flag} alt="" />
      </div>
      <div
        className={`h-max w-max absolute border-gray-300 rounded ${showcontent} flex-col justify-between items-center right-0 top-12 mr-1 border bg-white`}
      >
        {Country.map((country, index) => (
          <div
            className="h-[40px] w-[120px] text-sm border-b border-gray-300 flex justify-center items-center flex-col cursor-pointer"
            onClick={() => {
              handleflag(country.src);
            }}
            key={index}
          >
            {country.Name}
          </div>
        ))}
      </div>
    </>
  );
}
