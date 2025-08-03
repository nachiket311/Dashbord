import React from "react";
import "leaflet/dist/leaflet.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashbord from "./Dashbord.jsx";
import AuthLayout from "./AuthLayout.jsx";
import AnalyticDashbord from "./AnalyticDashbord.jsx";
import SaasDashbord from "./SaasDashbord.jsx";
import MainContent from "./MainContent.jsx";
import Profile from "./Pages/Profile.jsx";
import Settings from "./Pages/Settings.jsx";
import Pricing from "./Pages/Pricing.jsx";
import Chat from "./Pages/Chat.jsx";
import BlankPage from "./Pages/BlankPage.jsx";
import Projects from "./Pages/Projects.jsx";
import Orders from "./Pages/Orders.jsx";
import Products from "./Pages/Products.jsx";
import Invoice from "./Pages/Invoice.jsx";
import Details from "./Pages/Details.jsx";
import Tasks from "./Pages/Tasks.jsx";
import Calender from "./Pages/Calender.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignInCover from "./Pages/SignInCover.jsx";
import SignUp from "./Pages/SignUp.jsx";
import SignUpCover from "./Pages/SignUpCover.jsx";
import ResetPassword from "./Pages/ResetPassword.jsx";
import ResetPasswordCover from "./Pages/ResetPasswordCover.jsx";
import NotFound from "./Pages/NotFound.jsx";
import InternalError from "./Pages/InternalError.jsx";
import Alerts from "./Component/Alerts.jsx";
import Avatars from "./Component/Avatars.jsx";
import Badges from "./Component/Badges.jsx";
import Buttoncomponent from "./Component/Buttoncomponent.jsx";
import Cards from "./Component/Cards.jsx";
import Lists from "./Component/Lists.jsx";
import Progress from "./Component/Progress.jsx";
import Tooltip from "./Component/Tooltip.jsx";
import Menus from "./Component/Menus.jsx";
import Charts from "./Charts/Charts.jsx";
import SelectionControl from "./Forms/SelectionControl.jsx";
import Pickers from "./Forms/Pickers.jsx";
import TextFields from "./Forms/TextFields.jsx";
import FormLink from "./Forms/FormLink.jsx";
import SimpleTable from "./Tables/SimpleTable.jsx";
import NutritionTable from "./Tables/AdvanceTable.jsx";
import AdvanceTable from "./Tables/AdvanceTable.jsx";
import FontAwesome from "./Icons/FontAwesome.jsx";
import LeafletMap from "./Maps/LeafletMap.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashbord />,
    children: [
      {
        path: "",
        element: <MainContent />,
      },
      {
        path: "Analytics",
        element: <AnalyticDashbord />,
      },
      {
        path: "Saas",
        element: <SaasDashbord />,
      },
      {
        path: "Pages/Profile",
        element: <Profile />,
      },
      {
        path: "Pages/Settings",
        element: <Settings />,
      },
      {
        path: "Pages/Pricing",
        element: <Pricing />,
      },
      {
        path: "Pages/Chat",
        element: <Chat />,
      },
      {
        path: "Pages/BlankPage",
        element: <BlankPage />,
      },
      {
        path: "Pages/Projects",
        element: <Projects />,
      },
      {
        path: "Pages/Orders",
        element: <Orders />,
      },
      {
        path: "Pages/Products",
        element: <Products />,
      },
      {
        path: "Pages/Invoice",
        element: <Invoice />,
      },
      {
        path: "Pages/Invoice/Details/:id",
        element: <Details />,
      },
      {
        path: "Pages/Tasks",
        element: <Tasks />,
      },
      {
        path: "Pages/Calender",
        element: <Calender />,
      },
      {
        path: "/Component/Alerts",
        element: <Alerts />,
      },
      {
        path: "/Component/Avatars",
        element: <Avatars />,
      },
      {
        path: "/Component/Badges",
        element: <Badges />,
      },
      {
        path: "/Component/Buttoncomponent",
        element: <Buttoncomponent />,
      },
      {
        path: "/Component/Cards",
        element: <Cards />,
      },
      {
        path: "/Component/Lists",
        element: <Lists />,
      },
      {
        path: "/Component/Menus",
        element: <Menus />,
      },
      {
        path: "/Component/Progress",
        element: <Progress />,
      },
      {
        path: "/Component/Tooltip",
        element: <Tooltip />,
      },
      {
        path: "/Charts/Charts",
        element: <Charts />,
      },
      {
        path: "/Forms/SelectionControl",
        element: <SelectionControl />,
      },
      {
        path: "/Forms/Pickers",
        element: <Pickers />,
      },
      {
        path: "/Forms/TextFields",
        element: <TextFields />,
      },
      {
        path: "/Forms/FormLink",
        element: <FormLink />,
      },
      {
        path: "/Tables/SimpleTable",
        element: <SimpleTable />,
      },
      {
        path: "/Tables/AdvanceTable",
        element: <AdvanceTable />,
      },
      {
        path: "/Icons/FontAwesome",
        element: <FontAwesome />,
      },
      {
        path: "/Maps/LeafLetMap",
        element: <LeafletMap />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "Pages/SignIn", element: <SignIn /> },
      { path: "Pages/SignInCover", element: <SignInCover /> },
      { path: "Pages/SignUp", element: <SignUp /> },
      { path: "Pages/SignUpCover", element: <SignUpCover /> },
      { path: "Pages/ResetPassword", element: <ResetPassword /> },
      { path: "Pages/ResetPasswordCover", element: <ResetPasswordCover /> },
      { path: "Pages/NotFound", element: <NotFound /> },
      { path: "Pages/InternalError", element: <InternalError /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
