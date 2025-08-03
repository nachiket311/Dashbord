import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Breadcrumb from "../Breadcrumb";
import Button from "../button/Button";

const FormLink = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [alert, setAlert] = useState(false);

  const password = watch("password");
  const onSubmit = (data) => {
    console.log(data), setAlert(true);
  };

  return (
    <div className="min-h-screen h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Form Link</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full flex xl:flex-row sm:flex-col justify-between gap-5 mt-6">
        <div className="flex-col gap-3 h-max w-full">
          {/*Form List*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Form Link</h4>
            <p>Formik example with Yup validation</p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-4 w-[100%] space-y-6"
            >
              <div
                className={`h-12 w-full ${
                  alert ? "block" : "hidden"
                } bg-green-100 text-green-700 rounded flex justify-start items-center p-4 gap-5`}
              >
                {
                  <>
                    <i className="fa-solid fa-circle-check"></i>
                    <p>[DEMO] Your data has been submitted successfully!</p>
                  </>
                }
              </div>
              <div className="h-max w-full flex justify-between items-center space-x-2">
                {/* FirstName */}
                <div className="relative w-[49%]">
                  <input
                    id="FirstName"
                    type="text"
                    {...register("FirstName", {
                      required: "FirstName is required",
                    })}
                    defaultValue="Lucy"
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
                <div className="relative w-[49%]">
                  <input
                    id="LastName"
                    type="text"
                    {...register("LastName", {
                      required: "LastName is required",
                    })}
                    defaultValue="Lavender"
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
              </div>

              {/* Email */}
              <div className="relative w-full mt-6">
                <input
                  id="Email"
                  type="email"
                  {...register("Email", {
                    required: "Email is required",
                  })}
                  defaultValue="Lucy.Lavender@demo.com"
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
                  id="password"
                  type="password"
                  {...register("password", {
                    required: "password is required",
                  })}
                  defaultValue="123456789"
                  placeholder=" "
                  className="peer h-14 text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
                />
                <label
                  htmlFor="password"
                  className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Password
                </label>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* confirmPassword */}
              <div className="relative w-full">
                <input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  defaultValue="123456789"
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
            <button
              className="h-max w-max p-2 px-3 ml-4 rounded font-semibold bg-blue-600 text-white hover:bg-blue-800"
              onClick={handleSubmit(onSubmit)}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLink;
