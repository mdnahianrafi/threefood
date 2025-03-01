"use client";
import { useParams } from "next/navigation";
import React from "react";
import { tastyRecipes, deliciousrecipes } from "@/data";
import Image from "next/image";
import cook from "../../../public/cook.png";
import { MdTimer } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { IoMdPrint } from "react-icons/io";
import { CiShare2 } from "react-icons/ci";
import Subscribe from "@/app/components/Subscribe";
import Checkbox from "@/app/components/Checkbox";
import AccordionComponent from "@/app/components/AccordionComponent";
import RecipeSlider from "@/app/components/RecipeSlider";
import AdImg from "../../../public/Ads.png";
import Recommendation from "@/app/components/Recommendation";

const Page = () => {
  const { id } = useParams();
  const recipe =
    tastyRecipes.find((recipe) => recipe.id === parseInt(id)) ||
    deliciousrecipes.find((recipe) => recipe.id === parseInt(id));

  return (
    <div className="container mx-auto py-20 relative overflow-x-hidden">
      <div className="grid grid-cols-6 gap-4">
        {/* Left Content */}
        <div className="col-span-6 lg:col-span-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[64px] font-bold font-inter">
            {recipe.title}
          </h1>

          {/* Info Section */}
          <div className="flex flex-wrap gap-x-6 lg:gap-x-12 py-16">
            {/* Author */}
            <div className="flex gap-x-4 pr-7 lg:pr-14 border-r-2">
              <Image src={cook} alt="cook" />
              <div className="font-inter">
                <p className="text-sm lg:text-base font-bold">Jhon Smith</p>
                <p className="text-xs lg:text-sm font-light">15 March, 2022</p>
              </div>
            </div>

            {/* Prep Time */}
            <div className="flex gap-x-4 pr-7 lg:pr-14 border-r-2">
              <MdTimer className="text-2xl mt-3" />
              <div className="font-inter">
                <p className="text-sm lg:text-base font-bold py-1">Prep Time</p>
                <p className="text-xs lg:text-sm font-light">15 Minutes</p>
              </div>
            </div>

            {/* Cook Time */}
            <div className="flex gap-x-4 pr-7 lg:pr-14 border-r-2 ml-3 mt-5 sm:mt-0 lg:mt-5 xl:mt-0">
              <MdTimer className="text-2xl mt-3" />
              <div className="font-inter">
                <p className="text-sm lg:text-base font-bold py-1">Cook Time</p>
                <p className="text-xs lg:text-sm font-light">15 Minutes</p>
              </div>
            </div>

            {/* Purpose */}
            <div className="flex gap-x-4 pr-7 lg:pr-14 mt-5 md:mt-0 lg:mt-5 2xl:mt-0">
              <ImSpoonKnife className="text-2xl mt-3" />
              <div className="font-inter">
                <p className="text-sm lg:text-base mt-3">{recipe.cookpurpose}</p>
              </div>
            </div>
          </div>

          {/* Recipe Image */}
          <div>
            <Image src={`/${recipe.imgSrc}`} alt="Recipe Image" width={900} height={200} />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-6 lg:col-span-2 mt-20">
          {/* Print & Share Buttons */}
          <div className="flex xl:mt-8">
            <button>
              <IoMdPrint className="mx-5 lg:mx-7 text-2xl p-4 w-16 h-16 lg:w-[77px] lg:h-[77px] bg-gradyellow rounded-full border-2 border-transparent hover:bg-transparent hover:border-gradyellow ease-in-out duration-300" />
            </button>
            <p className="text-center py-3 text-xs font-medium font-inter">PRINT</p>

            <button>
              <CiShare2 className="mx-5 lg:mx-7 text-2xl p-4 w-16 h-16 lg:w-[77px] lg:h-[77px] bg-gradyellow rounded-full border-2 border-transparent hover:bg-transparent hover:border-gradyellow ease-in-out duration-300" />
            </button>
            <p className="text-center py-3 text-xs font-medium font-inter">SHARE</p>
          </div>

          {/* Nutrition Information */}
          <div className="bg-gradyellow p-8 flex flex-col rounded-3xl mt-[81px]">
            <p className="pb-4 text-2xl font-semibold font-inter">Nutrition Information</p>
            {[
              { label: "Calories", value: "219.9 kCal" },
              { label: "Total Fat", value: "10.7 g" },
              { label: "Protein", value: "7.9 g" },
              { label: "Carbohydrate", value: "22.3 g" },
              { label: "Cholesterol", value: "37.4 mg" },
            ].map((item, index) => (
              <div key={index} className="flex justify-between py-4 border-b-2 border-black text-[18px] font-medium font-inter">
                <p>{item.label}</p>
                <p>{item.value}</p>
              </div>
            ))}
            <p className="text-center">Lorem ipsum text here...</p>
          </div>
        </div>
      </div>

      {/* Recipe Details */}
      <p className="font-inter py-16 lg:py-20">Lorem ipsum text...</p>

      {/* Ingredients & Directions */}
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-2/3">
          <h1 className="text-3xl font-semibold font-inter">Ingredients</h1>

          <div className="py-14 text-2xl font-semibold font-inter">For Main Dish</div>
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex py-8 border-b-2">
              <Checkbox />
              <p className="pl-6">Lorem ipsum...</p>
            </div>
          ))}

          <div className="py-16">
            <p className="py-14 text-2xl font-semibold font-inter">Directions</p>
            <AccordionComponent />
          </div>
        </div>

        {/* Other Recipes (Slider) */}
        <div className="w-full lg:w-1/3">
          <h1 className="text-3xl font-semibold font-inter">Other Recipes</h1>
          <RecipeSlider />
          <div className="flex justify-center items-center py-20">
            <Image src={AdImg} alt="ad img" />
          </div>
        </div>
      </div>

      <Subscribe />
      <Recommendation />
    </div>
  );
};

export default Page;
