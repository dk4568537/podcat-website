import React from "react";
import aduioimg from '../assets/images/Audio track.png'
import { Bounce } from "react-awesome-reveal";

const Embrace = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className=" items-center w-[1541px] h-[550px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
         <Bounce>
         <div className=" p-5">
            <h1 className=" font-bold text-3xl md:text-6xl md:w-[697px] h-28 md:h-[186px]">
              <span className=" text-blue-900 border-b-2 border-blue-900">
                Embrace
              </span>{" "}
              tech, <br />
              transform your world.
            </h1>
            <p className=" text-[#6d6d6d] w-full h-full md:w-[950px] lg:w-full lg:h-full md:h-78 text-base md:text-4xl lg:text-4xl">
              Explore the world of technology, entrepreneurship, <br /> 
              and business on our engaging podcast. Join us <br />
              as we delve into insightful discussions and <br />
              inspire innovation
            </p>
          </div>
          <div className=" flex justify-end p-5">
            <img className=" w-[100%] h-full md:w-[619.05px] lg:h-full md:h-[500.49px]" src={aduioimg} alt="" />
          </div>
         </Bounce>
        </div>
      </div>
    </div>
  );
};

export default Embrace;
