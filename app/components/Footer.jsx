import Image from "next/image";
import React from "react";
import FooterLogo from "../../public/Footer Logo.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="container mx-auto ">
        <div className="flex  md:justify-between pb-12">
          <div className="mr-10 md:mr-0">
            <Image src={FooterLogo} alt="Footer Logo.png" />
            <p className="py-6 text-sm  font-inter">Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
          </div>
          <div className="">
            <ul className=" md:flex gap-x-10 lg:gap-x-14 ">
              <li className="text-base font-medium  font-inter hover:font-semibold hover:ease-in-out duration-300">Recipes</li>
              <li className="text-base font-medium  font-inter hover:font-semibold hover:ease-in-out duration-300">Blog</li>
              <li className="text-base font-medium  font-inter hover:font-semibold hover:ease-in-out duration-300">Contact</li>
              <li className="text-base font-medium  font-inter hover:font-semibold hover:ease-in-out duration-300">About Us</li>
            </ul>
          </div>
        </div>
        <hr className="  bg-gray-400"/>
        <div className="py-5">
            <div className="flex">
                <div className="w-1/3"></div>
                <div className="w-1/3 text-center text-base lg:text-[18px]">
                © 2020 Flowbase. Powered by  <span className="text-[#FF7967]">Webflow</span>
                </div>
                <div className="w-1/3 flex justify-end">
                <a href="">
              {" "}
              <FaFacebookF className="text-base lg:text-xl mr-5 lg:mr-10" />
            </a>
            <a href="">
              {" "}
              <FaTwitter className="text-base lg:text-xl mr-5 lg:mr-10" />
            </a>
            <a href="">
              {" "}
              <FaInstagram className="text-base lg:text-xl mr-5 lg:mr-10" />
            </a>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
