import React from "react";
import Breadcrumb from "../Breadcrumb";

const FontAwesome = () => {
  const icons = [
    { class: "fa-solid fa-home", iconName: "home" },
    { class: "fa-solid fa-user", iconName: "user" },
    { class: "fa-solid fa-envelope", iconName: "envelope" },
    { class: "fa-solid fa-phone", iconName: "phone" },
    { class: "fa-solid fa-search", iconName: "search" },
    { class: "fa-solid fa-camera", iconName: "camera" },
    { class: "fa-solid fa-heart", iconName: "heart" },
    { class: "fa-solid fa-star", iconName: "star" },
    { class: "fa-solid fa-cog", iconName: "cog" },
    { class: "fa-solid fa-check", iconName: "check" },
    { class: "fa-solid fa-times", iconName: "times" },
    { class: "fa-solid fa-shopping-cart", iconName: "shopping-cart" },
    { class: "fa-solid fa-lock", iconName: "lock" },
    { class: "fa-solid fa-book", iconName: "book" },
    { class: "fa-solid fa-globe", iconName: "globe" },
    { class: "fa-solid fa-calendar", iconName: "calendar" },
    { class: "fa-solid fa-map-marker-alt", iconName: "map-marker-alt" },
    { class: "fa-solid fa-cloud", iconName: "cloud" },
    { class: "fa-solid fa-music", iconName: "music" },
    { class: "fa-solid fa-bell", iconName: "bell" },
  ];

  return (
    <div className="min-h-screen h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Icons</p>
          <Breadcrumb />
        </div>
      </div>

      <div className="h-max w-full flex xl:flex-row sm:flex-col justify-between gap-5 mt-6">
        <div className="flex flex-col gap-3 h-max w-full">
          {/*icon Badges*/}
          <div className="h-max w-full gap-3 flex flex-col rounded p-4 bg-white">
            <h4 className="text-lg font-semibold text-start">Icon Badges</h4>
            <p>
              Examples of badges on icons containing text, using primary and
              secondary colors.
            </p>
            <div className="h-max w-full flex flex-wrap gap-3">
              {icons.map((icon, index) => (
                <div
                  className="h-12 w-[19%] flex justify-start items-center gap-3"
                  key={index}
                >
                  <i className={`${icon.class}`} />
                  <p>{icon.iconName}</p>
                </div>
              ))}
            </div>
            <h3 className="text-xl text-blue-600 font-semibold flex self-center">
              For More Icons Visit Font Awesome Site
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FontAwesome;
