import React from "react";
import cardone from "../assets/images/cardone.png";
import { FaCirclePlay } from "react-icons/fa6";
import cardtwo from "../assets/images/two (2).png";
import photov from "../../src/assets/images/photo-of-women-having-conversation-3194524.png";
import { MdKeyboardVoice } from "react-icons/md";
import { Bounce } from "react-awesome-reveal";


const Card = () => {
  return (
    <div className="flex justify-center items-center">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-[1541px]">
       <Bounce>
       <div class="max-w-lg bg-white rounded-lg shadow relative">
          <a href="#">
            <img class="rounded-t-lg w-full" src={cardone} alt="" />
          </a>
          <div class="p-5">
            <a href="#" className=""> 
              <MdKeyboardVoice className=" absolute top-4 right-4 text-5xl rounded-full bg-blue-500 p-1 " />
            </a>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Ep 1: How to build a world-class business brand
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum at vero eos et accusam et justo duo dolores et ea
              rebum.
            </p>
            <a href="" class=" inline-flex pt-2">
              <a
                href="https://youtu.be/5JiRgc3iunA?si=AT2fcm7w_aYSXeHG"
                class=" text-4xl pr-1"
              >
                <FaCirclePlay />
              </a>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-500  focus:ring-4 focus:outline-none "
              >
                Read more
              </a>
            </a>

          </div>
        </div>
        <div class="max-w-lg bg-white rounded-lg shadow relative">
          <a href="#">
            <img class="rounded-t-lg w-full" src={cardtwo} alt="" />
          </a>
          <div class="p-5">
            <a href="#" className=""> 
              <MdKeyboardVoice className=" absolute top-4 right-4 text-5xl rounded-full bg-blue-500 p-1 " />
            </a>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Ep 2: Getting the first 100 customers for your business
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum at vero eos et accusam et justo duo dolores et ea
              rebum.
            </p>
            <a href="" class=" inline-flex pt-2">
              <a
                href="https://youtu.be/5JiRgc3iunA?si=AT2fcm7w_aYSXeHG"
                class=" text-4xl pr-1"
              >
                <FaCirclePlay />
              </a>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center focus:ring-4 focus:outline-none text-blue-500"
              >
                Listen Now
              </a>
            </a>
          </div>
        </div>

        <div class="max-w-lg bg-white rounded-lg shadow relative">
          <a href="#">
            <img class="rounded-t-lg w-full" src={photov} alt="" />
          </a>
          <div class="p-5">
            <a href="#" className=""> 
              <MdKeyboardVoice className=" absolute top-4 right-4 text-5xl rounded-full bg-blue-500 p-1 " />
            </a>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Ep 3: Should I raise money for my startup, or not?
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem ipsum at vero eos et accusam et justo duo dolores et ea
              rebum.
            </p>
            <a href="" class=" inline-flex pt-2">
              <a
                href="https://youtu.be/5JiRgc3iunA?si=AT2fcm7w_aYSXeHG"
                class=" text-4xl pr-1"
              >
                <FaCirclePlay />
              </a>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-blue-500 focus:ring-4 focus:outline-none"
              >
                Read more
              </a>
            </a>
          </div>
        </div>
       </Bounce>
      </div>
    </div>
  );
};

export default Card;
