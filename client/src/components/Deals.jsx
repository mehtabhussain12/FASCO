import React from "react";
import timer from "../assets/Images/timer.png";
import d1 from "../assets/Images/deal1.png";
import d2 from "../assets/Images/deal2.png";
import { BsThreeDots } from "react-icons/bs";
import Arrival from "./Arrival";

function Deals() {
  return (
    <>
      <div className="bg-[#F5F5F5] mt-4">
        <div className=" md:flex md:flex-row md:ml-28 flex flex-col m-4 mb-12 pb-24 ">
          <div className="py-4 mt-20 ">
            <h1 className="md:text-5xl text-3xl text-center font-semibold pb-6">
              Deals Of The Month
            </h1>
            <p className="pb-6 ml-8 md:ml-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque <br />
              duis ultrices sollicitudin aliquam sem. Scelerisque <br /> duis
              ultrices sollicitudin
            </p>
            <button className="bg-black text-white px-12 py-2 rounded-md shadow-md ml-20 md:ml-0 ">
              BUY NOW
            </button>
            <div className="mt-12 mb-2 text-[#484848]">
              <h1 className="text-4xl font-semibold ">
                Hurry, Before It’s Too Late!
              </h1>
              <img className="mt-8" src={timer} alt="" />
            </div>
          </div>
          <div className="flex flex-col md:flex md:flex-row ml-8 mt-20 gap-x-8">
            <img src={d1} alt="" />
            <img className="h-[486px] md:flex hidden" src={d2} alt="" />
          </div>
          <div className=" flex justify-center text-4xl md:hidden">
            {" "}
            <BsThreeDots />
          </div>
        </div>
      </div>
      <Arrival></Arrival>
    </>
  );
}

export default Deals;
