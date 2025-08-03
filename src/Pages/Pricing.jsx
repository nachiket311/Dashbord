import React from "react";
import Breadcrumb from "../Breadcrumb";

function Pricing() {
  const pricingdata = [
    {
      title: "Free",
      desc: "",
      icon: "",
      price: "$0",
      user: "10 user included",
      storage: "10 GB Storage",
      help: "Help Center Access",
      support: "Email Support",
      button: "Sign Up for Free",
    },
    {
      title: "star",
      desc: "Most Popular",
      icon: <i class="fa-regular fa-star"></i>,
      price: "$15",
      user: "20 user included",
      storage: "10 GB Storage",
      help: "Help Center Access",
      support: "Priority Email Support",
      button: "Get Started",
    },
    {
      title: "Enterprise",
      desc: "",
      icon: "",
      price: "$30",
      user: "50 user included",
      storage: "30 GB Storage",
      help: "Help Center Access",
      support: "Phone & Email Support",
      button: "Contact US",
    },
  ];

  return (
    <div className="h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Pricing</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 mt-6">
        <h3 className="text-3xl font-bold">We have a plan for everyone</h3>
        <p>
          Whether you're a business or an individual, 14-day trial no credit
          card required.
        </p>
        <div className="h-max w-full flex sm:flex-col sm:items-center xl:flex-row justify-center items-end gap-6">
          {pricingdata.map((price, i) => (
            <div
              className="h-max xl:w-[25%] sm:w-full flex flex-col justify-center items-center gap-2 rounded py-6 bg-white relative"
              key={i}
            >
              <div className="text-center ">
                <p className="font-semibold text-xl">{price.title}</p>
                <p className="absolute right-10 top-3">{price.icon}</p>
                <p className="text-gray-600">{price.desc}</p>
              </div>
              <h3 className="text-3xl font-bold">
                {price.price}
                <span className="text-xl font-semibold text-gray-600">/mo</span>
              </h3>
              <div className="h-max w-full text-center py-4">
                <p>{price.user}</p>
              <p>{price.storage}</p>
              <p>{price.help}</p>
              <p>{price.support}</p>
              </div>
              <button
                className={`h-9 w-[80%] rounded text-sm cursor-pointer border border-blue-500 ${
                  i === 1
                    ? "bg-blue-700 hover:bg-blue-900 text-white"
                    : "bg-white font-semibold text-blue-500 hover:bg-blue-50"
                } `}
              >
                {price.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
