import React from "react";
import Button from "./button/Button";
import LucyAvtar from "./assets/CassandraAvtar.jpg";
import MaleAvtar from "./assets/MaleAvtar.jpg";
import CassandraAvtar from "./assets/LucyAvtar.jpg";

function ProjectCard({img , title ,btn ,para}) {
  return (
    <div className="h-max xl:w-[23%] lg:w-[48%] sm:w-full bg-white rounded gap-3 flex flex-col justify-center items-center">
     {img && <img src={img} className="h-52 w-full rounded" />}
      <div className="flex flex-col items-start p-3 gap-2 border-b border-gray-300">
        <h4 className="font-semibold text-xl">{title}</h4>
        <button className={`p-1 px-1 rounded ${btn==="Finished" ? "bg-green-600" : btn === "In Progress" ? "bg-orange-600":"bg-red-600"} text-white text-sm`}>
          {btn}
        </button>
        <p className="text-sm text-gray-700">
          {para}
        </p>
        <div className="flex self-end -space-x-2">
          <img
            className="h-10 w-10 rounded-full border-2 border-white z-20"
            src={LucyAvtar}
            alt="Profile 1"
          />
          <img
            className="h-10 w-10 rounded-full border-2 border-white z-10"
            src={MaleAvtar}
            alt="Profile 2"
          />
          <img
            className="h-10 w-10 rounded-full border-2 border-white z-0"
            src={CassandraAvtar}
            alt="Profile 3"
          />
        </div>
      </div>
      <div className="h-max w-full p-2 flex gap-3">
        <Button text={"Share"} colour={"bg-gray-100 w-max text-blue-700"} />
        <Button text={"Learn More"} colour={"bg-gray-100 w-max text-blue-700"} />
      </div>
    </div>
  );
}

export default ProjectCard;
