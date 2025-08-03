import React from "react";
import Button from "./button/Button.jsx";

function Footer() {
  const fotterbtn = [
    { text: "Support" },
    { text: "Help Center" },
    { text: "Privacy" },
    { text: "Terms & Condition" },
  ];
  return (
    <div className="h-max z-40 sm:w-screen md:w-[75vw] lg:w-[80vw] lg:left-[19vw] md:left-[25vw] p-2 fixed bg-gray-400 bottom-0">
      <div className="flex justify-start items-center gap-2">
        {fotterbtn.map((ft, i) => (
          <Button text={ft.text} key={i} colour={"bg-gray-400 text-gray-200"} />
        ))}
      </div>
    </div>
  );
}

export default Footer;
