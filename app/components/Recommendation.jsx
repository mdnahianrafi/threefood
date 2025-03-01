"use client"
import { tastyRecipes, deliciousrecipes } from '@/data';
import React from 'react';
import { CardContainer, CardItem, CardBody } from './ui/3d-card';
import { MdTimer } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import Link from 'next/link';


const Recommendation = () => {
  const halfRecipes = deliciousrecipes.slice(0, Math.ceil(deliciousrecipes.length / 2));
  const allRecipes = [...tastyRecipes, ...halfRecipes];

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-center text-5xl font-bold font-inter">You may like these recipe too</h1>
        <div className="flex flex-wrap justify-center items-center xl:justify-normal">
          {halfRecipes.map(({ id, title, imgSrc, cookpurpose }) => (
            <Link key={id} href={`/recipedetails/${id}`}>
              <CardContainer className="w-[380px]" key={id}>
                <CardBody className="bg-gradient-to-b from-white from-10% via-[#dfe4d3b2] via-34% to-[#dbdfd394] to-100 relative group/card hover:shadow-2xl w-auto sm:w-[30rem] h-auto rounded-xl p-6 border mx-3">
                  <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4">
                    <img
                      src={`/${imgSrc}`}
                      alt="thumbnail"
                      height={400} // Adjust size as needed
                      width={400} // Adjust size as needed
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    />
                  </CardItem>
                  <CardItem as="p" translateZ="60" className="text-2xl font-semibold font-inter max-w-sm py-8">
                    {title}
                  </CardItem>

                  <div className="flex gap-x-6 items-center">
                    <CardItem
                      translateZ={20}
                      translateX={-40}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal"
                    >
                      <div className="flex gap-x-3">
                        <MdTimer className="text-2xl" />
                        <p className="text-sm text-gray-600">30 Minutes</p>
                      </div>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      translateX={40}
                      as="button"
                      className="px-4 py-2 rounded-xl dark:text-black text-xs font-bold"
                    >
                      <div className="flex gap-x-3">
                        <ImSpoonKnife className="text-2xl" />
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
  );
};

export default Recommendation;
