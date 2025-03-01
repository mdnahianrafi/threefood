"use client"
import React from 'react'
import RecipeGrid from './ui/RecipeGrid'
import { useEffect } from 'react';
import gsap from 'gsap';



const RecipeLists = () => {
  useEffect(() => {
    gsap.to('#tasty', { opacity: 1,y:0, delay: 1 });
    gsap.to('#recipes', { opacity: 1,y:0, delay: 1.5 });
  
  }, []);
  return (
   <>
<div className="">
<div className="">
    <h1 id="tasty" className="text-center text-5xl font-semibold font-inter opacity-0 translate-y-5">Simple and tasty recipes</h1>
    <p id="recipes" className="pt-11 pb-28 text-center text-base font-inter leading-7 xl:px-[320px] opacity-0 translate-y-8">
    Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim 
    </p>
</div>

<RecipeGrid/>
   </div>
   </>
  )
}

export default RecipeLists