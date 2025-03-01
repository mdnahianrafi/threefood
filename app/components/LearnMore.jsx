import React from 'react'
import Chef from '../../public/chef photo.png'
import Image from 'next/image'
const LearnMore = () => {
  return (
  <>
  <section className="container mx-auto py-36">
<div className="flex flex-wrap">
    <div className="lg:w-1/2 pt-32 pb-16 pr-14">
<h1 className="text-5xl font-semibold font-inter">Everyone can be a
chef in their own kitchen</h1>
<p className="pt-8 pb-[72px] lg:pr-[100px]">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
<button className="p-5 w-[180px] bg-gradyellow hover:bg-transparent rounded-3xl text-sm font-semibold font-inter border-2 border-transparent hover:border-black ease-in-out duration-300">
    Learn More
</button>
    </div>
    <div className="lg:w-1/2">
        <Image 
        src={Chef}
        alt="chef photo.png"
        className="floating-obj border-r-2 border-r-gradyellow rounded-3xl"
        />
    </div>
</div>
  </section>
  </>
  )
}

export default LearnMore