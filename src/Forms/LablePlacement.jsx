import React from "react";
import { useForm } from "react-hook-form";

const LablePlacement = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      gender: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Selected Gender:", data.gender);
  };

  const selectedGender = watch("gender");

  return (
    <>
      <h4 className="text-lg font-semibold text-start">Lable Placement</h4>
      <p>You can change the placement of the label.</p>
      <div className="h-max w-full flex justify-start flex-wrap items-center gap-3">
        <form className="p-6 flex gap-10 flex-wrap">
          {/* Male - Label on Top */}
          <label className="flex flex-col items-center gap-1">
            <span className="text-sm font-medium">Top</span>
            <input
              type="radio"
              value="male"
              {...register("gender")}
              defaultChecked
              className="scale-125"
            />
          </label>

          {/* Female - Label on Left */}
          <label className="flex items-center gap-2">
            <span className="text-sm font-medium">Start</span>
            <input
              type="radio"
              value="female"
              {...register("gender")}
              className="scale-125"
            />
          </label>

          {/* Other - Label on Bottom */}
          <label className="flex flex-col-reverse items-center gap-1">
            <input
              type="radio"
              value="other"
              {...register("gender")}
              className="scale-125"
            />
            <span className="text-sm font-medium">Bottom</span>
          </label>

          {/* Disabled - Label on Right */}
          <label className="flex items-center gap-2">
            <input
              type="radio"
              {...register("gender")}
              className="scale-125"
            />
            <span className="text-sm font-medium">End</span>
          </label>
        </form>
      </div>
    </>
  );
};

export default LablePlacement;
