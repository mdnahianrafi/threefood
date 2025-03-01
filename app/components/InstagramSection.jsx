import React from "react";
import Post1 from "../../public/Post 1.png";
import Post2 from "../../public/Post 2.png";
import Post3 from "../../public/Post 3.png";
import Post4 from "../../public/Post 4.png";
import { GrInstagram } from "react-icons/gr";
import Image from "next/image";
const InstagramSection = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl lg:text-5xl font-semibold font-inter text-center">
          Check out @foodieland on Instagram
        </h1>
        <p className="py-10 text-base font-inter text-center ">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>

        <div className="py-20 flex justify-center flex-wrap gap-x-10">
          <Image src={Post1} alt="post 1 .png" />
          <Image src={Post2} alt="post 1 .png" />
          <Image src={Post3} alt="post 1 .png" />
          <Image src={Post4} alt="post 1 .png" />
        </div>

<div className="flex justify-center items-center">
<button className="my-10 px-8 py-4  bg-gradyellow hover:bg-transparent rounded-3xl text-sm font-semibold font-inter border-2 border-transparent hover:border-black ease-in-out duration-300">
          <div className="flex gap-x-4">
            <p className="text-sm font-semibold font-inter">
              View Our Instagram
            </p>
            <GrInstagram className="text-xl" />
          </div>
        </button>
</div>
      </div>
    </>
  );
};

export default InstagramSection;
