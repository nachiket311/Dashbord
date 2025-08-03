import React from "react";
import Breadcrumb from "../Breadcrumb";
import { Link, useLocation } from "react-router-dom";
import Button from "../button/Button";
import { BarChartDataProfile } from "../Graphdata";
import SkillTagProfile from "../SkillTag/SkillTagProfile";
import BarChart from "../Charts/BarChart.jsx";
import LucyAvtar from "../assets/CassandraAvtar.jpg";

function Profile() {
  const { pathname } = useLocation();

  const ProductsData = [
    {
      Name: "AppStake",
      Tech: "HTML",
      License: "Single License",
      Sales: "30",
    },
    {
      Name: "Mira",
      Tech: "React",
      License: "Single License",
      Sales: "63",
    },
    {
      Name: "Milo",
      Tech: "HTML",
      License: "Single License",
      Sales: "28",
    },
    {
      Name: "Robust UI Kit",
      Tech: "Angular",
      License: "Single License",
      Sales: "22",
    },
    {
      Name: "Spark",
      Tech: "React",
      License: "Single License",
      Sales: "56",
    },
  ];

  return (
    <div className="h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Profile</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-full flex xl:flex-row sm:flex-col gap-5 pt-6">
        <div className="flex flex-col items-start gap-5 justify-between h-max xl:w-max sm:w-full">
          <div className="h-max py-4 xl:w-64 sm:w-full rounded bg-white flex flex-col relative justify-center items-center">
            <div className="p-2 absolute top-0 h-7 left-0 font-semibold">
              Profile Details
            </div>
            <div className="h-28 w-28 mt-8 rounded-full">
              <img
                className="h-full w-full rounded-full object-cover"
                src={LucyAvtar}
                alt=""
              />
            </div>
            <div className="mt-1">
              <p className="text-sm font-semibold">Lucy Lavender</p>
              <p className="text-sm">Lead developer</p>
            </div>
            <div className="mt-2 flex gap-3">
              <Button text={"Follow"} colour={"bg-blue-800 text-white"}/>
              <Button text={"Message"} colour={"bg-blue-800 text-white"} />
            </div>
          </div>
          <div className="h-max py-4 xl:w-64 sm:w-full rounded bg-white flex flex-col relative justify-center items-center">
            <div className="p-2 absolute top-0 h-7 left-0 font-semibold">
              Skills
            </div>
            <div className="px-2 flex flex-wrap gap-2 justify-center items-center pt-5">
              <SkillTagProfile
                text={"HTML"}
                colour={"bg-blue-800 text-white"}
              />
              <SkillTagProfile text={"JavaScript"} />
              <SkillTagProfile text={"Saas"} />
              <SkillTagProfile text={"React"} />
              <SkillTagProfile text={"Redux"} />
              <SkillTagProfile text={"Next.js"} />
              <SkillTagProfile text={"Material UI"} />
              <SkillTagProfile text={"UI"} />
              <SkillTagProfile text={"Ux"} />
            </div>
          </div>
          <div className="h-max py-4 xl:w-64 sm:w-full rounded bg-white flex flex-col relative justify-center items-center">
            <div className="p-2 absolute top-0 h-7 left-0 font-semibold">
              About
            </div>
            <div className="w-full flex flex-col pt-7">
              <div className="w-full pl-3 flex justify-start items-center gap-2">
                <i className="fa-solid fa-house text-xs"></i>
                <p className="text-sm">Lives in</p>
                <Link
                  to="/"
                  className="text-blue-700 text-sm cursor-pointer hover:underline"
                >
                  Gujarat , IN
                </Link>
              </div>
              <div className="w-full pl-3 flex justify-start items-center gap-2">
                <i className="fa-solid fa-suitcase text-xs"></i>
                <p className="text-sm">Works at</p>
                <Link
                  to="/"
                  className="text-blue-700 text-sm cursor-pointer hover:underline"
                >
                  Freelancer
                </Link>
              </div>
              <div className="w-full pl-3 flex justify-start items-center gap-2">
                <i className="fa-solid fa-location-dot text-xs"></i>
                <p className="text-sm">Lives in</p>
                <Link
                  to="/"
                  className="text-blue-700 text-sm cursor-pointer hover:underline"
                >
                  Bhavnagar
                </Link>
              </div>
            </div>
          </div>
          <div className="h-max py-4 xl:w-64 sm:w-full rounded bg-white flex flex-col relative justify-center items-center">
            <div className="p-2 absolute top-0 h-7 left-0 font-semibold">
              Elsewhere
            </div>
            <div className="w-full flex flex-col pt-7">
              <div className="w-full pl-3 flex justify-start items-center gap-2">
                <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                <Link
                  to="/"
                  className="text-blue-700 text-sm cursor-pointer hover:underline"
                >
                  LucyLavender.io
                </Link>
              </div>
              <div className="w-full pl-3 flex justify-start items-center gap-2">
                <i className="fa-brands fa-facebook-f text-xs"></i>
                <Link
                  to="/"
                  className="text-blue-700 text-sm cursor-pointer hover:underline"
                >
                  Facebook
                </Link>
              </div>
              <div className="w-full pl-3 flex justify-start items-center gap-2">
                <i className="fa-brands fa-instagram text-xs"></i>
                <Link
                  to="/"
                  className="text-blue-700 text-sm cursor-pointer hover:underline"
                >
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 justify-between h-max xl:w-[95%] sm:w-full">
          <div className="h-max py-4 xl:w-[99%] sm:w-full rounded bg-white flex flex-col relative justify-center items-center">
            <div className="p-2 absolute top-0 h-7 left-0 font-semibold">
              Sales/Revenue
            </div>
            <div className="h-[47vh] xl:w-[99%] sm:w-full pt-7">
              <BarChart
                BarChartData={BarChartDataProfile}
                stacked={false}
              />
            </div>
          </div>
          <div className="h-max w-full flex xl:flex-row sm:flex-col gap-5">
            <div className="h-max p-4 w-full rounded bg-white flex flex-col relative justify-center items-center">
              <div className="h-max flex flex-col w-full gap-3">
                <div className="w-full h-max flex justify-between ">
                  <h2 className="font-semibold text-4xl">$2.405</h2>
                  <h2 className="font-semibold text-4xl text-blue-700 pt-3">
                    $
                  </h2>
                </div>
                <p className="text-sm">Total Earnings</p>
                <div className="flex h-1 w-full">
                  <div className="bg-blue-900 w-[70%]"></div>
                  <div className="bg-blue-400 w-[30%]"></div>
                </div>
              </div>
            </div>
            <div className="h-max p-4 w-full rounded bg-white flex flex-col relative justify-center items-center">
              <div className="h-max flex flex-col w-full gap-3">
                <div className="w-full h-max flex justify-between ">
                  <h2 className="font-semibold text-4xl">30</h2>
                  <h2 className="font-semibold text-4xl text-blue-700 pt-3">
                    <i className="fa-solid fa-bag-shopping"></i>
                  </h2>
                </div>
                <p className="text-sm">Orders Today</p>
                <div className="flex h-1 w-full">
                  <div className="bg-blue-900 w-[30%]"></div>
                  <div className="bg-blue-400 w-[70%]"></div>
                </div>
              </div>
            </div>
            <div className="h-max p-4 w-full rounded bg-white flex flex-col relative justify-center items-center">
              <div className="h-max flex flex-col w-full gap-3">
                <div className="w-full h-max flex justify-between ">
                  <h2 className="font-semibold text-4xl">$1.224</h2>
                  <h2 className="font-semibold text-4xl text-blue-700 pt-3">
                    $
                  </h2>
                </div>
                <p className="text-sm">Total Revenue</p>
                <div className="flex h-1 w-full">
                  <div className="bg-blue-900 w-[50%]"></div>
                  <div className="bg-blue-400 w-[50%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[50vh] xl:h-max xl:w-full sm:w-full p-5 pb-5 rounded bg-white">
            <div className="h-max w-full flex justify-between items-center pb-5">
              <p className="text-lg">Products</p>
            </div>
            <div className="h-11 w-full flex justify-between items-center border-b border-gray-300">
              <div className="h-11 w-[120px] text-sm font-semibold flex justify-start items-center">
                Name
              </div>
              <div className="h-11 w-[160px] text-sm font-semibold flex justify-start items-center">
                tech
              </div>
              <div className="h-11 w-[160px] text-sm font-semibold flex justify-start items-center">
                License
              </div>
              <div className="h-11 w-[160px] text-sm font-semibold flex justify-start items-center">
                Sales
              </div>
            </div>
            {ProductsData.map((Product, index) => (
              <div
                className="h-11 w-full flex justify-between items-center border-b border-gray-300"
                key={index}
              >
                <div className="h-11 w-[120px] text-sm flex justify-start items-center">
                  {Product.Name}
                </div>
                <div
                  className={`h-11 w-[160px] flex justify-start items-center text-white `}
                >
                  <div
                    className={`p-1 text-xs rounded opacity-70 ${
                      Product.Tech === "HTML"
                        ? "bg-blue-800"
                        : Product.Tech === "React"
                        ? "bg-green-700"
                        : "bg-red-700"
                    } `}
                  >
                    {Product.Tech}
                  </div>
                </div>
                <div className="h-11 w-[160px] text-sm flex justify-start items-center">
                  {Product.License}
                </div>
                <div className="h-11 w-[160px] text-sm flex justify-start items-center">
                  {Product.Sales}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
