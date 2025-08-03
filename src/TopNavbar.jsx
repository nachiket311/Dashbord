import React, { useState } from "react";
import TopNavIcon from "./TopNavIcon";
import LucyAvtar from "./assets/CassandraAvtar.jpg";
import MaleAvtar from "./assets/MaleAvtar.jpg";
import CassandraAvtar from "./assets/LucyAvtar.jpg";

export default function TopNavbar({ toggleSidebar, isOpen }) {
  const Msgdata = [
    {
      Name: "Lucy Lavender",
      src: LucyAvtar,
      Msg: "Nam Pertius Turpis et arcu. dc arcu tortor.",
    },
    {
      Name: "Remy Sharp",
      src: MaleAvtar,
      Msg: "Lorem ipsum, dolor sit adipisicing elit.",
    },
    {
      Name: "Cassandra Mixon",
      src: CassandraAvtar,
      Msg: "exercitationem impedit suscipit explicabo.",
    },
  ];

  const Notificationdata = [
    {
      icon: "fa-solid fa-server",
      Name: "Update Complete",
      Msg: "Restart Server To Complete Update",
    },
    {
      icon: "fa-solid fa-user-plus",
      Name: "New Connection",
      Msg: "Anna Accepted Your Request",
    },
    {
      icon: "fa-regular fa-bell",
      Name: "Lorem ipsum",
      Msg: "repudiandae sunt ipsam nostrum, esse accusamus.",
    },
    {
      icon: "fa-solid fa-house",
      Name: "New Login",
      Msg: "Login From 192.186.1.1",
    },
  ];

  const Country = [
    {
      Name: "India",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV97Zo2ExmkPgJI7RpHV9_atYRJg747LtepQ&s",
    },
    {
      Name: "America",
      src: "https://static.vecteezy.com/system/resources/thumbnails/012/616/631/small_2x/american-flag-us-flag-usa-flag-on-the-circle-shape-format-png.png",
    },
    {
      Name: "Korea",
      src: "https://media.istockphoto.com/id/1331019423/vector/south-korea-flag-in-circle-shape-isolated-on-jpg-or-transparent-background-symbols-of-seoul.jpg?s=612x612&w=0&k=20&c=lj0cm45KAzx05llGwmliYFU4B4V-GEM5HeCKyfJvsFs=",
    },
    {
      Name: "China",
      src: "https://media.istockphoto.com/id/1313883994/vector/china-flag-icon-vector-illustration-round.jpg?s=612x612&w=0&k=20&c=AZV1wxSTLbCp6DbmkBU0r4h9Lhizy2tWapqmuAMBYSY=",
    },
  ];

  const avatarinfo = [
    { first: "Profile" },
    { first: "Setting & Privacy" },
    { second: "Help" },
    { second: "Sign Out" },
  ];

  const [activeid, setActiveid] = useState(null);
  const [showcontent, setShowcontent] = useState("hidden");

  const handleshow = (id) => {
    setActiveid(id);
    showcontent === "hidden"
      ? setShowcontent("flex")
      : setShowcontent("hidden");
  };

  return (
    <div className="h-[60px] w-full fixed top-0 left-0 md:left-[25vw] lg:left-[19vw] lg:w-[80vw] md:w-[75vw] border-b border-gray-300 bg-white flex justify-between items-center px-4 z-50">
      <button className="block md:hidden p-2" onClick={toggleSidebar}>
        <i
          className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-lg`}
        ></i>
      </button>

      {/* Search Box */}
      <div className="flex items-center hover:bg-gray-200 rounded mx-1">
        <i className="fa-solid fa-magnifying-glass flex justify-center items-center cursor-pointer text-lg text-gray-400 h-[40px] w-[40px]"></i>
        <input
          type="text"
          placeholder="Search Topics..."
          className="h-[40px] w-[200px] px-2 focus:outline-none text-gray-400 text-sm bg-transparent"
        />
      </div>

      {/* Top Right Icons */}
      <div className="flex items-center gap-3">
        <TopNavIcon
          title={"Messages"}
          number={3}
          icon={"fa-regular fa-message"}
          msgdata={Msgdata}
          id={1}
          isActive={activeid === 1}
          onClick={handleshow}
          showcontent={showcontent}
          activeid={activeid}
        />
        <TopNavIcon
          title={"Notifications"}
          number={7}
          icon={"fa-regular fa-bell"}
          msgdata={Notificationdata}
          id={2}
          isActive={activeid === 2}
          onClick={handleshow}
          showcontent={showcontent}
          activeid={activeid}
        />
        <TopNavIcon
          msgdata={Country}
          id={3}
          isActive={activeid === 3}
          onClick={handleshow}
          showcontent={showcontent}
          activeid={activeid}
        />
        <TopNavIcon
          msgdata={avatarinfo}
          id={4}
          isActive={activeid === 4}
          onClick={handleshow}
          showcontent={showcontent}
          activeid={activeid}
        />
      </div>
    </div>
  );
}
