import React from "react";
import Breadcrumb from "../Breadcrumb";
import Button from "../button/Button";
import Project1 from "../assets/Project-1.jpg";

const Cards = () => {
  return (
    <div className="min-h-screen h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Cards</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full flex xl:flex-row sm:flex-col justify-between gap-5 mt-6">
        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm-w-full">
          {/*image card*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md bg-white">
            <img src={Project1} className="h-52 w-full rounded-md" />
            <div className="flex flex-col items-start p-3 gap-2">
              <h4 className="font-semibold text-xl">Lizard</h4>
              <p className="text-sm text-gray-700">
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
                Nam quam nunc, blandit vel, luctus pulvinar.
              </p>
            </div>
            <div className="h-max w-full p-2 flex gap-3">
              <Button
                text={"Share"}
                colour={"bg-gray-100 w-max text-blue-700"}
              />
              <Button
                text={"Learn More"}
                colour={"bg-gray-100 w-max text-blue-700"}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 h-max xl:w-[49%] sm-w-full">
          {/*card*/}
          <div className="h-max w-full gap-3 flex flex-col rounded-md bg-white">
            <div className="flex flex-col items-start gap-1 p-3">
            <p className="text-sm text-gray-500">Word of the Day</p>
              <h4 className="font-semibold text-xl">be•nev•o•lent</h4>
              <p className="text-sm text-gray-500">
                adjective
              </p>
              <p className="text-sm">
                Well Meaning And Kindly.
              </p>
              <p className="text-sm">
                "a benevolent smile"
              </p>
            </div>
            <div className="h-max w-full p-2 flex gap-3">
              <Button
                text={"Learn More"}
                colour={"bg-gray-100 w-max text-blue-700"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
