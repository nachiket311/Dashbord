import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => navigate("/auth/Pages/SignIn");
  
  return (
    <div className="h-screen w-screen bg-blue-50 flex justify-center items-center">
      <div className="h-max w-[400px] bg-white rounded flex flex-col items-center gap-5 p-4">
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-semibold text-3xl text-center">Reset Password</h2>
          <p className="text-center text-lg">
            Enter your email to reset your password
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
          {/* Email */}
          <div className="relative w-full">
            <input
              id="Email"
              type="Email"
              {...register("Email", {
                required: "Email is required",
              })}
              placeholder=" "
              className="peer h-14 text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
            />
            <label
              htmlFor="Email"
              className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Email Address
            </label>
            {errors.Email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.Email.message}
              </p>
            )}
          </div>
        </form>
        <button
          className="p-3 rounded w-full bg-blue-800 text-white flex justify-center items-center cursor-pointer hover:bg-opacity-90"
          onClick={handleSubmit(onSubmit)}
        >
          Reset Password
        </button>
        <p className="text-center">
          Don't have an account yet?{" "}
          <NavLink
            className="text-blue-600 cursor-pointer hover:underline"
            to="/auth/Pages/SignUp"
          >
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
