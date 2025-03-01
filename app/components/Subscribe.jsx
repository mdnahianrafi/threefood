import React from 'react'

const Subscribe = () => {
  return (
    <div className="container mx-auto py-28">
    <div className="text-center SubscribeCard py-28 rounded-3xl">
    <h1 className="py-6 text-4xl lg:text-5xl font-semibold font-inter">Deliciousness to your inbox</h1>
    <p className="xl:px-96">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
    <form className="py-16 relative">
      <input type="email" placeholder="Your Email Address" className="p-8 bg-white w-96 lg:w-[476px] h-14 lg:h-[75px] rounded-3xl"/>
      <button type="submit" className="bg-black px-9 lg:px-11 py-4 lg:py-5 text-white absolute top-[68px] right-9 md:top-[35%]  md:right-[25%]  2xl:right-[35%] rounded-3xl">Subscribe</button>
    </form>
    </div>
    
     </div>
  )
}

export default Subscribe