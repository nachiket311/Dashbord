import React from "react";
import LucyAvtar from "./assets/CassandraAvtar.jpg"

export default function Avatar({ bordercolor }) {
  return (
      <div className="h-10 w-10 relative">
        <img
          className="h-10 w-10 rounded-full"
          src={LucyAvtar}
          alt=""
        />
        <div
          className={`h-3 w-3 border-2 ${bordercolor} absolute bg-green-600 rounded-3xl right-0 bottom-0`}
        ></div>
      </div>
  );
}
