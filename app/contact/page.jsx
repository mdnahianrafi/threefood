import React from "react";
import okchef from "../../public/ok chef.png";
import Image from "next/image";
import Subscribe from "../components/Subscribe";
import DelRecipe from "../components/DelRecipe";
import Recommendation from "../components/Recommendation";
const Page = () => {
  return (
    <>
      <div className="container mx-auto py-24">
        <h1 className="text-5xl lg:text-6xl text-[64px] font-semibold font-inter text-center pb-14">
          Contact Us
        </h1>

        <div className="flex ">
          <div className="lg:w-1/3 w-full">
            <Image src={okchef} alt="ok chef.png" />
          </div>
          <div className="lg:w-2/3 w-full">
            <form action="">
              <div className="flex flex-wrap gap-x-10">
                <div className="flex flex-col w-[400px] text-gray-600">
                  <label className="text-xs font-medium font-inter pb-5">
                    NAME
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name..."
                    className="py-6 px-6 rounded-3xl border-2"
                  />
                </div>
                <div className="flex flex-col w-[400px] text-gray-600">
                  <label className="text-xs font-medium font-inter pb-5">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email..."
                    className="py-6 px-6 rounded-3xl border-2"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-x-10 py-7">
                <div className="flex flex-col w-[400px] text-gray-600">
                  <label className="text-xs font-medium font-inter pb-5">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your subject..."
                    className="py-6 px-6 rounded-3xl border-2"
                  />
                </div>
                <div className="flex flex-col w-[400px] text-gray-600">
                  <label className="text-xs font-medium font-inter pb-5">
                    ENQUERY TYPE
                  </label>
                  <select
                    name="enquery"
                    id="enquery"
                    className="py-6 px-6 rounded-3xl border-2"
                  >
                    <option value="advertising">Advertising</option>
                    <option value="marketing">Marketing</option>
                    <option value="payment">Payment</option>
                  </select>
                </div>
              </div>
              <div className=" flex flex-col">
                <label className="text-xs font-medium font-inter pb-5">MESSAGE</label>
                <input type="text" placeholder="Your message here ... "  
                    className="pt-6 px-6 pb-[163px] rounded-3xl border-2" />
                  <button type="submit" value="Submit" className="w-44 mt-12 bg-black text-white font-medium font-inter py-6 px-16 rounded-3xl">Submit</button>  
              </div>
            </form>
          </div>
        </div>
        <Subscribe/>
        <Recommendation/>
      </div>
    </>
  );
};

export default Page;
