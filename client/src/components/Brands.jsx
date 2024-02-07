import React from "react";
import B1 from "../assets/Images/brand1.png";
import B2 from "../assets/Images/brand2.png";
import B3 from "../assets/Images/brand3.png";
import B4 from "../assets/Images/brand4.png";
import B5 from "../assets/Images/brand5.png";
import Deals from "./Deals";

function Brands() {
  return (
    <>
      <div className=" lg:ml-16 lg:my-8">
        <div className="lg:flex lg:flex-row gap-x-4 flex flex-col place-items-center ">
          <div className="lg:px-14 py-6  cursor-pointer ">
            <img src={B1} alt="" />
          </div>
          <div className="lg:px-14 py-6  cursor-pointer ">
            <img src={B2} alt="" />
          </div>
          <div className="lg:px-14 py-6  cursor-pointer ">
            <img src={B3} alt="" />
          </div>
          <div className="lg:px-14 py-6  cursor-pointer ">
            <img src={B4} alt="" />
          </div>
          <div className="lg:px-14 py-6  cursor-pointer ">
            <img src={B5} alt="" />
          </div>
        </div>
      </div>
      <Deals></Deals>
    </>
  );
}

export default Brands;
