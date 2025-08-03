import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";

const SignUp = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen w-screen bg-blue-50 flex justify-center items-center">
      <div className="h-max w-[500px] bg-white rounded flex flex-col items-center gap-5 p-4 m-9">
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-semibold text-3xl text-center">Get Started</h2>
          <p className="text-center text-lg">
            Start creating the best possible user experience for you customers
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 w-[100%] space-y-6"
        >
          {/* FirstName */}
          <div className="relative w-full">
            <input
              id="FirstName"
              type="text"
              {...register("FirstName", {
                required: "FirstName is required",
              })}
              placeholder=" "
              className="peer h-14 text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
            />
            <label
              htmlFor="FirstName"
              className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
            >
              FirstName
            </label>
            {errors.FirstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.FirstName.message}
              </p>
            )}
          </div>
          {/* LastName */}
          <div className="relative w-full">
            <input
              id="LastName"
              type="text"
              {...register("LastName", {
                required: "LastName is required",
              })}
              placeholder=" "
              className="peer h-14 text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
            />
            <label
              htmlFor="LastName"
              className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
            >
              LastName
            </label>
            {errors.LastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.LastName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="relative w-full mt-6">
            <input
              id="Email"
              type="email"
              {...register("Email", {
                required: "Email is required",
              })}
              placeholder=" "
              className="peer h-14 text-sm w-full border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
            />
            <label
              htmlFor="Email"
              className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Email
            </label>
            {errors.Email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.Email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative w-full">
            <input
              id="Password"
              type="Password"
              {...register("Password", {
                required: "Password is required",
              })}
              placeholder=" "
              className="peer h-14 text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
            />
            <label
              htmlFor="Password"
              className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Password
            </label>
            {errors.Password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.Password.message}
              </p>
            )}
          </div>

          {/* confirmPassword */}
          <div className="relative w-full">
            <input
              id="confirmPassword"
              type="Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              placeholder=" "
              className="peer h-14 text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
            />
            <label
              htmlFor="confirmPassword"
              className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
            >
              confirmPassword
            </label>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </form>
        <Button text={"Sign Up"} colour={"bg-blue-800 w-[95%] text-white"} />
        <p className="text-center">
          Already have an account!{" "}
          <NavLink
            className="text-blue-600 cursor-pointer hover:underline"
            to="/auth/Pages/SignIn"
          >
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
