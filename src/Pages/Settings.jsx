import React, { useState, useRef } from "react";
import Breadcrumb from "../Breadcrumb";
import LucyAvtar from "../assets/CassandraAvtar.jpg"
import { useForm } from "react-hook-form";

function Settings() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  

  const onSubmit = (data) => console.log(data);

  const [images, setImages] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);
    setImages({ file, preview });
  };
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Settings</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full mt-6 flex flex-col gap-6">
        <div className="h-max w-full bg-white">
          {/*first form*/}
          <div className="h-max w-full flex  justify-between items-center relative">
            <div className="h-5 font-semibold p-4 absolute top-0 left-0">
              Public Profile
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-4 w-[70%] space-y-4 mt-10"
            >
              {/* Username */}
              <div className="relative w-full">
                <input
                  id="username"
                  type="text"
                  {...register("username", {
                    required: "Username is required",
                  })}
                  placeholder=" "
                  defaultValue={"LucyLavender"}
                  className="peer text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
                />
                <label
                  htmlFor="username"
                  className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Username
                </label>
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Biography */}
              <div className="relative w-full">
                <textarea
                  id="bioGraphy"
                  {...register("bioGraphy", {
                    required: "Biography is required",
                  })}
                  placeholder=" "
                  defaultValue={
                    "Lucy is a Freelance Writer and Social Media Manager who helps finance professionals and Fin-tech startups build an audience and get more paying clients online."
                  }
                  className="peer text-sm w-full border border-gray-400 rounded hover:border-black px-3 pt-4 pb-2 h-24 resize-none focus:outline-none focus:border-blue-800"
                />
                <label
                  htmlFor="bioGraphy"
                  className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blace peer-focus:text-blue-600"
                >
                  Biography
                </label>
                {errors.bioGraphy && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.bioGraphy.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-sm text-white px-4 py-2 rounded"
              >
                Save Changes
              </button>
            </form>
            <div className="h-max w-[40%] flex flex-col justify-center items-center gap-3 p-8">
              <div className="h-28 w-28 rounded-[50%]">
                <img
                  src={`${
                    !images
                      ? LucyAvtar
                      : images
                  }`}
                  className="h-full w-full rounded-[50%]"
                  alt=""
                />
              </div>
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={triggerFileInput}
                  className="flex items-center gap-2 text-sm bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
                >
                  <i className="fa-solid fa-cloud-arrow-up"></i>
                  Upload
                </button>
              </div>
              <p className="text-sm text-center">
                For best results, use an image at least 128px by 128px in .jpg
                format
              </p>
            </div>
          </div>
        </div>
        <div className="h-max w-full bg-white">
          {/*second form*/}
          <div className="h-max w-full flex  justify-between items-center relative">
            <div className="h-5 font-semibold p-4 absolute top-0 left-0">
              Private info
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-4 w-[100%] space-y-4 mt-10"
            >
              <div className="w-full flex justify-between gap-3">
                {/* FirstName */}
                <div className="relative w-[50%]">
                  <input
                    id="FirstName"
                    type="text"
                    {...register("FirstName", {
                      required: "FirstName is required",
                    })}
                    placeholder=" "
                    defaultValue={"Lucy"}
                    className="peer text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
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
                <div className="relative w-[50%]">
                  <input
                    id="LastName"
                    type="text"
                    {...register("LastName", {
                      required: "LastName is required",
                    })}
                    placeholder=" "
                    defaultValue={"Lavender"}
                    className="peer text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
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
                  placeholder=" "
                  defaultValue={"lucylavender@gmail.com"}
                  className="peer text-sm w-full border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
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

              {/* Address */}
              <div className="relative w-full mt-6">
                <input
                  id="Address"
                  type="text"
                  {...register("Address")}
                  placeholder=" "
                  autoComplete="address-line1"
                  className="peer text-sm w-full border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
                />
                <label
                  htmlFor="Address"
                  className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Address
                </label>
                {errors.Address && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.Address.message}
                  </p>
                )}
              </div>

              {/* Apartment / Studio / Floor */}
              <div className="relative w-full mt-6">
                <input
                  id="AddressLine2"
                  type="text"
                  {...register("AddressLine2")}
                  placeholder=" "
                  autoComplete="address-line2"
                  className="peer text-sm w-full border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
                />
                <label
                  htmlFor="AddressLine2"
                  className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Apartment, Studio or Floor
                </label>
                {errors.AddressLine2 && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.AddressLine2.message}
                  </p>
                )}
              </div>

              {/* City, State, Zip */}
              <div className="w-full flex justify-between gap-3 mt-6">
                {/* City */}
                <div className="relative w-[50%]">
                  <input
                    id="City"
                    type="text"
                    {...register("City")}
                    placeholder=" "
                    autoComplete="address-level2"
                    className="peer text-sm w-full border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
                  />
                  <label
                    htmlFor="City"
                    className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    City
                  </label>
                  {errors.City && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.City.message}
                    </p>
                  )}
                </div>

                {/* State */}
                <div className="relative w-[30%]">
                  <input
                    id="State"
                    type="text"
                    {...register("State")}
                    placeholder=" "
                    autoComplete="address-level1"
                    className="peer text-sm w-full border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
                  />
                  <label
                    htmlFor="State"
                    className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    State
                  </label>
                  {errors.State && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.State.message}
                    </p>
                  )}
                </div>

                {/* Zip */}
                <div className="relative w-[20%]">
                  <input
                    id="Zip"
                    type="text"
                    {...register("Zip")}
                    placeholder=" "
                    autoComplete="postal-code"
                    className="peer text-sm w-full border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
                  />
                  <label
                    htmlFor="Zip"
                    className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                  >
                    Zip
                  </label>
                  {errors.Zip && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.Zip.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-sm text-white px-4 py-2 rounded"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
