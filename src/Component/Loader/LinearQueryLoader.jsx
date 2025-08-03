import React from "react";

export default function LinearQueryLoader() {
  return (
    <div className="space-y-2">
      {/* First Line */}
      <div className="w-full h-2 bg-gray-300 rounded overflow-hidden relative">
        <div className="absolute h-full bg-blue-600 animate-query1" />
      </div>

      {/* Second Line */}
      <div className="w-full h-2 bg-gray-300 rounded overflow-hidden relative">
        <div className="absolute h-full bg-blue-600 animate-query1" />
      </div>
    </div>
  );
}
