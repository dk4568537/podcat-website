import React from "react";
import "./Inspring.css";
import pulse from "../assets/images/Pulse.png";

const Inspring = () => {
  return (
    <div className=" relative mt-5">
      <div class="bgimage">
        <div className=" w-full md:w-[482px] h-full md:h-[330px] pt-4 md:pt-[187px] pl-7 md:pl-[140px]">
          <div className=" text-white md:w-[442px] md:h-[330px]">
            <h1 className=" font-bold md:w-[582px] md:h-[161px] text-2xl md:text-6xl text-[#f4f2ff]">
              Tech's inspiring <br /> stories
            </h1>
            <p className=" w-[190px] md:w-[500px] md:h-[112px] text-[7px] md:text-[22px] md:text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Mus cras
              lacus tellus morbi viverra suspendisse ornare.  Sit volutpat,
              volutpat ut netus malesuada enim penatibus non aliquet.
            </p>
            <div className=" pt-4 md:pt-20">
            <button className=" px-3 md:px-10 border text-xs sm:text-xs md:text-xl py-1 md:py-3">Listen Now</button>
            </div>
          </div>
          
        </div>
        <div className=" absolute top-[166px] md:top-[634px] right-0 w-[80px] md:w-[600px]">
          <img src={pulse} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Inspring;
