import { tastyRecipes,deliciousrecipes } from '@/data'
import React from 'react'
import { CardContainer,CardItem,CardBody } from './ui/3d-card'
import { MdTimer } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import Link from 'next/link';
const DelRecipe = () => {

  return (
 <>
 <div id="recipes"  className="container mx-auto py-36">
    <div className="lg:flex lg:justify-between lg:gap-x-10 py-5">
        <h1 className="text-3xl lg:text-5xl font-semibold font-inter xl:pr-[300px] pb-5 ">Try this delicious recipe
        to make your day</h1>
        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
    </div>

    <div className="flex flex-wrap justify-center items-center xl:justify-normal">
      {deliciousrecipes.map(({ id, title, imgSrc, cookpurpose }) => (

        <Link  key={id} href={`/recipedetails/${id}`}>
<CardContainer className="w-[380px]" key={id}>
          <CardBody className=" bg-gradient-to-b  from-white from-10% via-[#dfe4d3b2]  via-34% to-[#dbdfd394] to-100 relative group/card  hover:shadow-2xl w-auto  sm:w-[30rem] h-auto rounded-xl p-6 border mx-3">
            <CardItem
              translateZ="100"
              rotateX={20}
              rotateZ={-10}
              className="w-full mt-4"
            >
              <img
                src={imgSrc}
                alt="thumbnail"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              />
            </CardItem>

            <CardItem
              as="p"
              translateZ="60"
              className="text-2xl font-semibold font-inter max-w-sm py-8"
            >
             {title}
            </CardItem>

            <div className="flex gap-x-6 items-center ">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal"
              >
                <div className="flex gap-x-3">
                  <MdTimer className="text-2xl " />
                  <p className="text-sm text-gray-600">30 Minutes</p>
                </div>
              </CardItem>
              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl dark:text-black  text-xs font-bold"
              >
                <div className="flex gap-x-3">
                  <ImSpoonKnife className="text-2xl " />
                  <p className="text-sm text-gray-600">{cookpurpose}</p>
                </div>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
</Link>
      ))}
    </div>
 </div>
 </>
  )
}

export default DelRecipe


