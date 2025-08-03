import React from "react";
import Breadcrumb from "../Breadcrumb";
import { useParams, useNavigate } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleback = () =>{
    navigate(-1)
  }

  const invoicedata = [
    {
      Description : "Mira Theme Customization",
      Quantity : "2",
      Amount : "$150.00"
    },
    {
      Description : "Monthly Subscription",
      Quantity : "3",
      Amount : "$25.00"
    },
    {
      Description : "Additional Service",
      Quantity : "2",
      Amount : "$100.00"
    },
    {
      Quantity : "Subtotal",
      Amount : "$275.00"
    },
    {
      Quantity : "Shipping",
      Amount : "$8.00"
    },
    {
      Quantity : "Discount",
      Amount : "5%"
    },
    {
      Quantity : "Total",
      Amount : "$268.85"
    }
  ]

  return (
    <div className="h-max sm:w-screen lg:w-[80vw] md:w-[75vw] pb-24 mt-[60px] absolute p-10 bg-blue-50">
      {/* Header */}
      <div className="h-max w-full flex justify-between items-center pb-5 border-b border-gray-300">
        <div className="h-max w-max flex flex-col">
          <p className="text-3xl font-semibold">Details</p>
          <Breadcrumb />
        </div>
      </div>
      <div className="h-max w-[85%] bg-white mt-6 m-auto p-6">
        <div className="h-max w-full border-b flex flex-col gap-9 border-gray-300 ">
          <div className="h-max w-full">
            <p>Hello Anna Walley,</p>
            <p>
              This is the receipt for a payment of $268.85 (USD) you made to
              Mira.
            </p>
          </div>
          <div className="h-max w-full mb-5 flex justify-between">
            <div>
              <p>Payment no.</p>
              <p>741037024</p>
            </div>
            <div>
              <p className="text-end">Payment Date</p>
              <p className="text-end">January 2, 2023 - 03:45 pm</p>
            </div>
          </div>
        </div>
        <div className="mt-6 h-max w-full  flex flex-col">
            <div className="h-max w-full flex justify-between">
                <div className="h-max w-full">
                    <p className="text-sm">Client</p>
                    <p>Anna Walley</p>
                    <p>4183 Forest Avenue</p>
                    <p>New York City</p>
                    <p>10011</p>
                    <p>USA</p>
                    <p className="text-blue-800 hover:underline">anna@vally.com</p>
                </div>
                <div className="h-max w-full flex flex-col items-end">
                    <p className="text-sm">Payment To</p>
                    <p>Mira LLC</p>
                    <p>354 Roy Alley</p>
                    <p>Denver</p>
                    <p>80202</p>
                    <p>USA</p>
                    <p className="text-blue-800 hover:underline" >info@mira.com</p>
                </div>
            </div>
        </div>
        <div className="h-max w-full mt-7">
          <table className="w-full table-fixed">
            <thead>
              <tr className=" h-12 text-gray-600 text-left border-b border-gray-300">
                <th className="text-left px-3 w-[46%]">
                  Description
                </th>
                <th className="text-center w-[33%]">
                  Quantity
                </th>
                <th className="text-right px-3 w-[20%]">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {
              invoicedata.map((invoiceDetails , i)=>(
                <tr key={i} className="h-12 text-gray-600 text-left border-b border-gray-300">
                  <td className="text-left px-3 w-[46%]">{invoiceDetails.Description}</td>
                  <td className="text-center w-[33%]">{invoiceDetails.Quantity}</td>
                  <td className="text-right px-3 w-[20%]">{invoiceDetails.Amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="h-max w-full mt-3 flex flex-col justify-center items-center gap-2">
          <p className="text-sm">Extra note: Please send all items at the same time to the shipping address. Thanks in advance.</p>
          <div className="h-max w-full flex justify-center items-center gap-3">
            <button className="p-2 px-4 rounded bg-blue-700 text-white" onClick={handleback} >Go Back</button>
            <button className="p-2 px-4 rounded bg-blue-700 text-white">Print This Recipt</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
