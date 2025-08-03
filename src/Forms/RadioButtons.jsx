import React from "react";
import { useForm } from "react-hook-form";

const RadioButtons = () => {
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
      <h4 className="text-lg font-semibold text-start">Radio Buttons</h4>
      <p>Radio buttons allow the user to select one option from a set.</p>
      <div className="h-max w-full flex justify-start flex-wrap items-center gap-3">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <p className="text-gray-500">Gender</p>

          <div className="flex-col space-y-2">
            <label className="flex items-center gap-2 text-lg">
              <input
                type="radio"
                value="male"
                {...register("gender")}
                defaultChecked
                className="scale-125"
              />
              Male
            </label>

            <label className="flex items-center gap-2 text-lg">
              <input
                type="radio"
                value="female"
                {...register("gender")}
                className="scale-125"
              />
              Female
            </label>

            <label className="flex items-center gap-2 text-lg">
              <input
                type="radio"
                value="other"
                {...register("gender")}
                className="scale-125"
              />
              Other
            </label>

            <label className="flex items-center gap-2 text-lg text-gray-400">
              <input
                type="radio"
                value="disabled"
                disabled
                {...register("gender")}
                className="scale-125"
              />
              (Disabled) Option
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default RadioButtons;
