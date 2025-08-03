import React from "react";
import Breadcrumb from "../Breadcrumb";
import { useForm } from "react-hook-form";
import Avatar from "../Avatar";
import LucyAvtar from "../assets/CassandraAvtar.jpg";
import CassandraAvtar from "../assets/LucyAvtar.jpg";
import MaleAvtar from "../assets/MaleAvtar.jpg";

function Chat() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const userdata = [
    {
      img: LucyAvtar,
      name: "Lucy Lavender",
      msg: "Sent a Photo",
    },
    {
      img: MaleAvtar,
      name: "Remy Sharp",
      msg: "Coffee?",
    },
    {
      img: CassandraAvtar,
      name: "Cassandra Mixon",
      msg: "Hello !!",
    },
  ];

  const chatdata = [
    {
      name: "Remy Sharp",
      msg: "Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.",
      time: "20 minutes ago",
    },
    {
      name: "You",
      msg: "Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.",
      time: "12 minutes ago",
    },
    {
      name: "Remy Sharp",
      msg: "Cum ea graeci tractatos. 😄",
      time: "8 minutes ago",
    },
    {
      name: "You",
      msg: "Cras pulvinar, sapien id vehicula aliquet, diam velit elementum orci. 👍",
      time: "5 minutes ago",
    },
    {
      name: "Remy Sharp",
      msg: "Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.",
      time: "3 minutes ago",
    },
  ];

  return (
    <div className="h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Chat</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full flex xl:flex-row sm:flex-col bg-white mt-6">
        <div className="h-max xl:w-[25%] sm:w-full ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 w-full  border-b border-gray-400"
          >
            {/* Search Contact */}
            <div className="relative w-full">
              <input
                id="SearchContact"
                type="text"
                {...register("Search Contact")}
                placeholder=" "
                className="peer text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
              />
              <label
                htmlFor="SearchContact"
                className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
              >
                Search Contact
              </label>
              {errors.SearchContact && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.SearchContact.message}
                </p>
              )}
            </div>
          </form>
          <div className="h-max w-full mt-2">
            {userdata.map((user, i) => (
              <div className="h-max w-full hover:bg-gray-300" key={i}>
                <div className="h-16 w-full p-4 flex justify-start items-center gap-4">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.img}
                    alt=""
                  />

                  <div>
                    <p className="font-semibold text-sm">{user.name}</p>
                    <p className="text-gray-700 text-sm">{user.msg}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[60vh] xl:w-[75%] sm:w-full border-l border-gray-300 flex flex-col">
          <div className="h-[50vh] w-full flex flex-col overflow-y-auto p-2 gap-3">
            {chatdata.map((chat, i) => {
              const isYou = chat.name === "You" || i === 1 || i === 3;
              return (
                <div
                  key={i}
                  className={`min-h-24 max-w-full px-4 py-2 rounded-lg flex flex-col relative ${
                    isYou ? "self-end" : "self-start"
                  }`}
                >
                  <div className="flex items-center gap-2 w-full">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={isYou ? LucyAvtar : MaleAvtar}
                      alt=""
                    />
                    <div
                      className={`flex flex-col ${
                        isYou ? "bg-blue-700 text-white" : "bg-gray-300"
                      } p-2 rounded w-full`}
                    >
                      <p
                        className={`font-semibold ${
                          isYou ? "flex self-end mr-1" : ""
                        } `}
                      >
                        {chat.name}
                      </p>
                      <p className="text-sm">{chat.msg}</p>
                    </div>
                  </div>
                  {/* Time shown at bottom-right corner of yellow div */}
                  <p className="text-xs text-gray-700 absolute bottom-1 right-3">
                    {chat.time}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="h-[10vh] w-full p-2 flex items-center justify-between">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-4 w-full  border-b border-gray-400"
            >
              {/* type your msg */}
              <div className="relative w-full">
                <input
                  id="Message"
                  type="text"
                  {...register("Message")}
                  placeholder=" "
                  className="peer text-sm w-full  border-gray-400 rounded px-3 pt-4 pb-2 focus:outline-none border focus:border-blue-800"
                />
                <label
                  htmlFor="Message"
                  className="absolute -top-2.5 left-2.5 bg-white px-1 text-xs text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base hover:border-black peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
                >
                  Type Your Message
                </label>
                {errors.Message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.Message.message}
                  </p>
                )}
              </div>
            </form>
            <div className="h-14 w-14 rounded-[50%] bg-blue-700 flex items-center justify-center text-white">
              <i className="fa-solid fa-paper-plane text-xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
