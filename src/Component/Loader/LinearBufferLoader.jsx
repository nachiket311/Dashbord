import React, { useEffect, useState } from "react";

export default function LinearBufferLoader() {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      setBuffer((prev) => (prev >= 100 ? 0 : prev + 1.5));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const renderBar = (key) => (
    <div key={key} className="w-full h-2 bg-gray-300 rounded relative overflow-hidden">
      {/* Buffer line */}
      <div
        className="absolute top-0 left-0 h-full bg-blue-300 transition-all duration-75"
        style={{ width: `${buffer}%` }}
      />
      {/* Progress line */}
      <div
        className="absolute top-0 left-0 h-full bg-blue-600 transition-all duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );

  return (
    <div className="w-full space-y-[7px]">
      {[0, 1].map(renderBar)}
    </div>
  );
}
