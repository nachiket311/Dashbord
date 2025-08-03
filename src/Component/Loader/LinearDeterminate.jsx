import React, { useEffect, useRef, useState } from "react";

const LinearDeterminate = () => {

      const [progress, setprogress] = useState(0);
      const intervalRef = useRef(null);
    
      useEffect(() => {
        intervalRef.current = setInterval(() => {
          setprogress((prev) => {
            if (prev >= 100) {
              clearInterval(intervalRef.current);
              setTimeout(() => setprogress(0), 300); // reset after a short delay
              return 100;
            }
            return prev + 5; // step size
          });
        }, 300); // step interval
    
        return () => clearInterval(intervalRef.current);
      }, [progress]);

  return (
    <div className="flex flex-col w-full">
              {/* Line 1 */}
              <div className="h-2 w-full bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Gap */}
              <div className="h-[7px]" />

              {/* Line 2 */}
              <div className="h-2 w-full bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
  );
}

export default LinearDeterminate;
