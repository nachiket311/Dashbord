import React from "react";
import Dropdown from "./Dropdown";
import Navitem from "./Navitem";
import Avatar from "./Avatar";

export default function LeftNav({ isOpen, closeSidebar }) {
  return (
    <>
      {/* Backdrop for small screens only (sm only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={closeSidebar}
        />
      )}

      <div
        className={`
          bg-blue-950 text-white z-50 transition-transform duration-300 ease-in-out no-scrollbar
          fixed top-0 left-0 h-full overflow-y-auto
          w-[35%]
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 lg:w-[19vw]  md:w-[25vw] md:block
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 h-[60px] border-b border-gray-700 sm:justify-center">
          <span className="text-xl font-bold">Navbar</span>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar font-semibold text-gray-500 cursor-pointer">
          <p className="pl-4 pt-2">Pages</p>
          <Dropdown
            title="Dashbord"
            icon="fa-solid fa-sliders"
            option0={{ val: "Default", pth: "/" }}
            option1={{ val: "Analytics", pth: "/Analytics" }}
            option2={{ val: "Saas", pth: "/Saas" }}
          />
          <Dropdown
            title="Pages"
            icon="fa-solid fa-table-list"
            option0={{ val: "Profile", pth: "/Pages/Profile" }}
            option1={{ val: "Settings", pth: "/Pages/Settings" }}
            option2={{ val: "Pricing", pth: "/Pages/Pricing" }}
            option3={{ val: "Chat", pth: "/Pages/Chat" }}
            option4={{ val: "Blank Page", pth: "/Pages/BlankPage" }}
          />
          <Navitem
            title="Projects"
            icon="fa-solid fa-suitcase"
            value={8}
            pth="/Pages/Projects"
          />
          <Navitem
            title="Orders"
            icon="fa-solid fa-cart-shopping"
            pth="/Pages/Orders"
          />
          <Navitem
            title="Products"
            icon="fa-solid fa-cube"
            pth="/Pages/Products"
          />
          <Dropdown
            title="Invoices"
            icon="fa-regular fa-credit-card"
            option0={{ val: "List", pth: "/Pages/Invoice" }}
          />
          <Navitem
            title="Task"
            icon="fa-solid fa-list-check"
            value={17}
            pth="/Pages/Tasks"
          />
          <Navitem
            title="Calender"
            icon="fa-regular fa-calendar"
            pth="/Pages/Calender"
          />
          <Dropdown
            title="Auth"
            icon="fa-solid fa-user-group"
            option0={{ val: "Sign In", pth: "/auth/Pages/SignIn" }}
            option1={{ val: "Sign In Cover", pth: "/auth/Pages/SignInCover" }}
            option2={{ val: "Sign Up", pth: "/auth/Pages/SignUp" }}
            option3={{ val: "Sign Up Cover", pth: "/auth/Pages/SignUpCover" }}
            option4={{
              val: "Reset Password",
              pth: "/auth/Pages/ResetPassword",
            }}
            option5={{
              val: "Reset Password Cover",
              pth: "/auth/Pages/ResetPasswordCover",
            }}
            option6={{ val: "404 Page", pth: "/auth/Pages/NotFound" }}
            option7={{ val: "500 Page", pth: "/auth/Pages/InternalError" }}
          />

          <p className="pl-4 pt-4">ELEMENTS</p>
          <Dropdown
            title="Components"
            icon="fa-solid fa-table-cells"
            option0={{ val: "Alerts", pth: "/Component/Alerts" }}
            option1={{ val: "Avatar", pth: "/Component/Avatars" }}
            option2={{ val: "Badges", pth: "/Component/Badges" }}
            option3={{ val: "Buttons", pth: "/Component/Buttoncomponent" }}
            option4={{ val: "Cards", pth: "/Component/Cards" }}
            option5={{ val: "Lists", pth: "/Component/Lists" }}
            option6={{ val: "Menus", pth: "/Component/Menus" }}
            option7={{ val: "Progress", pth: "/Component/Progress" }}
            option8={{ val: "Tooltip", pth: "/Component/Tooltip" }}
          />
          <Navitem
            title="Charts"
            icon="fa-solid fa-chart-pie"
            pth="/Charts/Charts"
          />
          <Dropdown
            title="Forms"
            icon="fa-solid fa-list-check"
            option0={{ val: "Pickers", pth: "/Forms/Pickers" }}
            option1={{ val: "SelectionControl", pth: "/Forms/SelectionControl" }}
            option2={{ val: "TextFields", pth: "/Forms/TextFields" }}
            option3={{ val: "FormLink", pth: "/Forms/FormLink" }}
          />
          <Dropdown
            title="Tables"
            icon="fa-solid fa-list"
            option0={{ val: "SimpleTable", pth: "/Tables/SimpleTable" }}
            option1={{ val: "AdvanceTable", pth: "/Tables/AdvanceTable" }}
          />
          <Dropdown
            title="Icons"
            icon="fa-regular fa-heart"
            option0={{ val: "FontAwesome", pth: "/Icons/FontAwesome" }}
          />
          <Dropdown
            title="Maps"
            icon="fa-regular fa-map"
            option0={{ val: "LeafLetMap", pth: "/Maps/LeafLetMap" }}
          />

          <p className="pl-4 pt-4">Mira pro</p>
          <Navitem title="Documentation" icon="fa-solid fa-book-open" />
          <Navitem
            title="Change-log"
            icon="fa-solid fa-list-ul"
            value="v4.6.0"
          />
          <div className="h-max w-full flex font-semibold bg-blue-950 p-3 cursor-pointer">
            <Avatar bordercolor="border-blue-900" />
            <div className="flex flex-col justify-center">
              <p className="text-white pl-3 text-sm">Lucy Lavender</p>
              <p className="text-white pl-3 text-sm">UX Designer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
