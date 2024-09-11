import React from "react";
import videoone from "../vfolder/video-souece.mp4";
import jabtum from '../vfolder/Jab-tum-chao.mp4'
import mor from '../vfolder/Mor-tho-tilay.mp4'
import Prem from '../vfolder/Prem-ratun.mp4'
import { MdKeyboardVoice } from "react-icons/md";
import { FaCirclePlay } from "react-icons/fa6";
import { Flip, Zoom } from "react-awesome-reveal";


const VideoCompound = () => {
  return (
   <div className=" flex justify-center items-center py-2 md:p-10">
     <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-[1541px]">
       <Zoom>
        <div class="max-w-lg bg-white rounded-lg shadow relative">     
            <video autoPlay muted loop className=" rounded-t-lg" width="510" height="360">
              <source src={jabtum} type="video/mp4" />
            </video>
          <div class="p-5">
            <a href="#" className=""> 
              <MdKeyboardVoice className=" absolute top-4 right-4 text-5xl rounded-full bg-blue-500 p-1 " />
            </a>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                 _Jab Tum Chaho_ Full VIDEO Song _ Prem Ratan Dhan Payo _ Salman Khan, Sonam Kapoor
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
            <video autoPlay muted loop className=" rounded-t-lg"  width="510" height="360">
              <source src={Prem} type="video/mp4" />
            </video>
          <div class="p-5">
            <a href="#" className=""> 
              <MdKeyboardVoice className=" absolute top-4 right-4 text-5xl rounded-full bg-blue-500 p-1 " />
            </a>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mor Tho Tiley Singer Narodha Malni _ Sindh TV Song _ HD 1080p
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
            <video autoPlay muted loop className=" rounded-t-lg" width="510" height="360">
              <source src={mor} type="video/mp4" />
            </video>
          <div class="p-5">
            <a href="#" className=""> 
              <MdKeyboardVoice className=" absolute top-4 right-4 text-5xl rounded-full bg-blue-500 p-1 " />
            </a>
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mor Tho Tiley Singer Narodha Malni _ Sindh TV Song _ HD 1080p
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
      </Zoom>
    </div>
   </div>
  );
};

export default VideoCompound;
