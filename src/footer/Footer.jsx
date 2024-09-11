import React from "react";
import footerlogo from "../assets/images/footerlogo.png";
import email from "../assets/images/email.png";
import call from "../assets/images/call.png";
import location from "../assets/images/location.png";
import twitter from "../assets/images/twitter.png";
import linkdin from "../assets/images/linkdin.png";
import facebook from "../assets/images/facebook.png";
import github from "../assets/images/github.png";
import vector from "../assets/images/222222.png";
import golo from "../assets/images/golo.png";

const getYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-[#593db1] pt-10 mt-3">
      <div className="md:p-8 p-4 md:w-[85%]">
        <div className="text-white border-b border-[#9b5cf4] pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="pb-8 md:pb-0">
              <div className="flex">
                <img className="h-8 mt-1" src={footerlogo} alt="" />
                <h1 className="text-3xl font-bold text-white">BOOLEAN</h1>
              </div>
              <p className="pt-5 text-[#d6bbfb]">
                Design amazing digital experiences that create more happiness
                in the world.
              </p>
            </div>
            <div className="pb-8 md:pb-0 md:pl-8">
              <div className="grid grid-cols-2">
                <div className="pb-5">
                  <h1 className="text-2xl text-[#d6bbfb] font-semibold pb-3">
                    Product
                  </h1>
                  <p className="text-lg pb-2">Overview</p>
                  <p className="text-lg pb-2">Features</p>
                  <p className="text-lg pb-2">Solution</p>
                  <p className="text-lg pb-2">Tutorials</p>
                  <p className="text-lg pb-2">Pricing</p>
                  <p className="text-lg pb-2">Releases</p>
                </div>
                <div>
                  <h1 className="text-2xl text-[#d6bbfb] font-semibold pb-3">
                    Resources
                  </h1>
                  <p className="text-lg pb-2">Blog</p>
                  <p className="text-lg pb-2">Newsletter</p>
                  <p className="text-lg pb-2">Events</p>
                  <p className="text-lg pb-2">Help Center</p>
                  <p className="text-lg pb-2">Tutorials</p>
                  <p className="text-lg pb-2">Support</p>
                </div>
              </div>
            </div>
            <div className="pt-5">
            <h1 className="text-2xl text-[#d6bbfb] font-semibold pb-3">Reach</h1>
            <p className="flex pb-2">
              <img className="pr-3 h-5 pt-1" src={email} alt="" />
              Hello@booleaninc.com
            </p>
            <p className="text-lg flex pb-2">
              <img className="pr-3" src={call} alt="" />
              +1 513-440-3385
            </p>
            <p className="text-lg flex pb-2">
              <img className="pr-3" src={call} alt="" />
              +44 7888 865185
            </p>
            <div className="text-lg flex pb-2">
              <img className="h-12 pt-6 pr-3" src={location} alt="" />
              Office 4021 182-184 High <br /> Street North, East Ham, London <br /> E6 2JA. UK
            </div>
          </div>
          </div>

        </div>
        <div className="flex justify-between pt-5 flex-col md:flex-row items-center">
          <p className="text-[#d6bbfb] text-center md:text-left">
            © {getYear} Untitled UI. All rights reserved.
          </p>
          <div className="flex gap-2 md:gap-5 pt-3 md:pt-0">
            <img src={twitter} alt="" />
            <img src={linkdin} alt="" />
            <img src={facebook} alt="" />
            <img src={github} alt="" />
            <img src={vector} alt="" />
            <img src={golo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
