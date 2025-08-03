import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import coverImage from '../assets/coverauth.jpg'
import LucyAvtar from "../assets/CassandraAvtar.jpg";

const SignInCover = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [animate, setAnimate] = useState(false);

  const handleChange = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 500);
  };

  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen w-screen bg-blue-50 flex xl:flex-row sm:flex-col justify-center items-center p-4 gap-3">
        <div className="h-full xl:w-[70%] sm:w-full rounded-2xl">
            <img src={coverImage} className="h-full w-full object-fit rounded-2xl"/>
        </div>
      <div className="h-max xl:w-[30%] sm:w-full rounded flex flex-col items-center gap-5 p-4">
        <img
          className="h-28 w-28 rounded-full"
          src={LucyAvtar}
          alt=""
        />
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-semibold text-3xl text-center">
            Welcome Back, Lucy!
          </h2>
          <p className="text-center text-lg">
            Sign in to your account to continue
          </p>
        </div>
        <div className="bg-blue-100 w-full flex items-center gap-3 rounded text-blue-600 p-3">
          <div className="h-7 w-7 border-2 border-blue-600 flex justify-center items-center rounded-full">
            <i className="fa-solid fa-info text-sm text-blue-600"></i>
          </div>
          <p>This is just Static Form!</p>
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
              defaultValue={"LucyLavender@gmail.com"}
              className="peer text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
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
          {/* Email */}
          <div className="relative w-full">
            <input
              id="Password"
              type="Password"
              {...register("Password", {
                required: "Password is required",
              })}
              placeholder=" "
              defaultValue={"123456789"}
              className="peer text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
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
          <NavLink
            to="/"
            className="text-blue-600 px-1 text-xs cursor-pointer hover:underline"
          >
            Forgot Password?
          </NavLink>
        </form>
        <div className="flex self-start space-x-3 px-1 ">
          <div className="relative">
            <input
              type="checkbox"
              {...register("rememberme")}
              onChange={handleChange}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded cursor-pointer"
            />
            <div
              className={`absolute -inset-2 rounded-full bg-blue-300 opacity-40 scale-0 ${
                animate ? "animate-bubble" : ""
              }`}
            ></div>
          </div>
          <label className="text-sm text-gray-700">Remember me</label>
        </div>
        <Button text={"Sign In"} colour={"bg-blue-800 w-full text-white"} />
        <p className="text-center">Don't have an account yet? <NavLink className="text-blue-600 cursor-pointer hover:underline" to="/">Sign up</NavLink></p>
      </div>
    </div>
  );
};

export default SignInCover;
