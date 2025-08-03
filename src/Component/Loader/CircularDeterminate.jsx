import React , { useState , useEffect } from "react";

const CircularDeterminate = () => {
  const total = 5;
  const interval = 1000;
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % (total + 1));
    }, interval);
    return () => clearInterval(timer);
  }, [total, interval]);

  const degree = (360 / total) * step;

  return (
    <div className="w-16 h-16 flex items-center justify-center">
      <div
        className="w-full h-full rounded-full"
        style={{
          background: `conic-gradient(#3b82f6 0deg ${degree}deg, transparent ${degree}deg 360deg)`,
          maskImage:
            "radial-gradient(circle at center, transparent 60%, black 61%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, transparent 60%, black 61%)",
          transition: "background 0.5s ease",
        }}
      />
    </div>
  );
};

export default CircularDeterminate;
