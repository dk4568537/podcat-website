import React, { useState } from "react";
import one from "../assets/images/one.png";
import two from "../assets/images/two.png";
import three from "../assets/images/three.png";
import four from "../assets/images/four.png";
import { Hinge, Roll, Wobble } from "react-awesome-reveal";

const Content = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");

  const [formData, setformData] = useState({
    isAgree: false,
    design: "App design",
  });

  const handledesign = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handlesubmit = () => {
    console.log({ firstname, lastname, email, phone });
  };

  return (
    <div className="flex justify-center items-center flex-col md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full h-full">
       <Roll> 
        <div className="text-white flex justify-center items-center ">
          <div className="bg-[#5c40b3] w-full md:w-[535px] h-full md:h-[760px] pl-5 md:pl-10 py-5 md:py-12 gap-8 flex flex-col rounded-2xl">
            <h1 className="text-xl md:text-4xl font-bold">
              Contact Information
            </h1>
            <p className="text-sm md:text-2xl">
              Fill up the form and our Team will <br /> get back to you within
              24 hours.
            </p>
            <p className="flex text-normal md:text-lg">
              <img
                className="mr-3 md:mr-5 p-2 bg-white rounded-full"
                src={one}
                alt=""
              />{" "}
              +91 98765 43210
            </p>
            <p className="flex txt-normal md:text-lg">
              <img
                className="p-2 mr-3 md:mr-5 bg-white rounded-full"
                src={two}
                alt=""
              />{" "}
              domain@paypal.com
            </p>
            <p className="flex text-normal md:text-lg ">
              <img
                className="p-2 mr-3 md:mr-5 bg-white rounded-full"
                src={three}
                alt=""
              />{" "}
              https://paypal.com
            </p>
            <p className="flex text-normal md:text-lg">
              <img
                className="p-2 mr-3 md:mr-5 bg-white rounded-full"
                src={four}
                alt=""
              />{" "}
              Location
            </p>
          </div>
        </div>
        <div className="px-5 md:px-0 md:pr-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            <div className="">
              <h1 className=" font-semibold text-lg pt-8">First Name</h1>
              <input
                onChange={(e) => setfirstname(e.target.value)}
                value={firstname}
                className=" w-full p-4 border-b-2 border-b-slate-400 pb-4"
                type="text"
              />
            </div>
            <div>
              <h1 className="font-semibold text-lg pt-8">Listname</h1>
              <input
                onChange={(e) => setlastname(e.target.value)}
                value={lastname}
                className=" w-full p-4 border-b-2 border-b-slate-400 pb-4"
                type="text"
              />
            </div>
            <div>
              <h1 className="font-semibold text-lg pt-8">Mail</h1>
              <input
                onChange={(e) => setemail(e.target.value)}
                value={email}
                className="w-full p-4 border-b-2 border-b-slate-400  pb-4"
                type="text"
              />
            </div>
            <div>
              <h1 className="font-semibold text-lg pt-8">Phone</h1>
              <input
                onChange={(e) => setphone(e.target.value)}
                value={phone}
                className=" w-full p-4 border-b-2 border-b-slate-400  pb-4"
                type="text"
              />
            </div>
          </div>
          <h1 className="py-5 md:py-10 text-xl font-semibold">
            What service do you need?
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <h1 className=" text-xl font-semibold">
              <input
                type="radio"
                name="design"
                onChange={handledesign}
                checked={formData.design === "Web Design"}
                value="Web Design"
              />{" "}
              Web Design
            </h1>
            <h1 className=" text-xl font-semibold">
              <input
                type="radio"
                name="design"
                onChange={handledesign}
                checked={formData.design === "App Design"}
                value="App Design"
              />{" "}
              App Design
            </h1>
            <h1 className=" text-xl font-semibold">
              <input
                type="radio"
                name="design"
                onChange={handledesign}
                checked={formData.design === "Graphic Design"}
                value="Graphic Design"
              />{" "}
              Graphic Design
            </h1>
            <h1 className=" text-xl font-semibold">
              <input
                type="radio"
                name="design"
                onChange={handledesign}
                checked={formData.design === "Digital Marketing"}
                value="Digital Marketing"
              />{" "}
              Digital Marketing
            </h1>
            <h1 className=" text-xl font-semibold">
              <input
                type="radio"
                name="design"
                onChange={handledesign}
                checked={formData.design === "Other"}
                value="Other"
              />{" "}
              Other
            </h1>
          </div>
          <div className="grid grid-cols-1">
            <h1 className="text-xl font-semibold py-5 md:py-7">Message</h1>
            <textarea
              onChange={(e) => setmessage(e.target.value)}
              value={message}
              className="border-b border-b-slate-600 pb-2 px-2 w-full"
              placeholder="Write Your Message... "
            />
          </div>
          <div className="grid grid-cols-1 pt-5 md:pt-12 text-blue-900">
            <button
              onClick={handlesubmit}
              className="border rounded-md border-t-[3px] border-blue-900 font-semibold text-blue-700 px-5 py-2"
            >
              Send Message {formData.design}
            </button>
          </div>
        </div>
        </Roll>
      </div>
    </div>
  );
};

export default Content;
