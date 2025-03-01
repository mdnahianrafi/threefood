import React from 'react'
import Image from 'next/image'
import Breakfast from '../../public/breakfast.png'
import Vegan from '../../public/vegan.png'
import Meat from '../../public/meat.png'
import Dessert from '../../public/dessert.png'
import Lunch from '../../public/lunch.png'
import Chocolate from '../../public/chocolate.png'
import RecipeLists from './RecipeLists'
const Categories = () => {
  return (
<section className="container mx-auto">
<div className="flex justify-between pb-20">
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter">Categories</h1>
  <button className="bg-gradyellow border-2 border-transparent hover:bg-transparent hover:border-black transition-all ease-in-out duration-300 px-6 py-3 rounded-3xl text-base font-semibold font-inter">
    View all Categories
  </button>
</div>

<div className="flex flex-wrap justify-center items-center gap-x-10 pb-40 lg:pb-[181px]  ">
    <div className="w-[180px] h-[152px] relative rounded-3xl bg-gradient-to-b  from-white from-10% via-[#dfe4d3b2]  via-34% to-[#dbdfd394] to-100">
        <Image src={Breakfast} alt="breakfast.png" width={100} className="absolute -top-10 left-9 floating-obj"/>
        <p className="absolute bottom-10 left-12 text-[18px] font-semibold">Breakfast</p>
    </div>
    
    <div className="w-[180px] h-[152px] relative rounded-3xl bg-gradient-to-b  from-white from-10% via-[#dfe4d3b2]  via-34% to-[#cfe6a294] to-100">
        <Image src={Vegan} alt="breakfast.png" width={100} className="absolute -top-10 left-9 floating-obj"/>
        <p className="absolute bottom-10 left-16 text-[18px] font-semibold">Vegan</p>
    </div>

    <div className=" mt-20 sm:mt-0 w-[180px] h-[152px] relative rounded-3xl bg-gradient-to-b  from-white from-10% via-[#f8a59fe3]  via-34% to-[#fd786fb4] to-100">
        <Image src={Meat} alt="breakfast.png" width={100} className="absolute -top-10 left-9 floating-obj"/>
        <p className="absolute bottom-10 left-16 text-[18px] font-semibold">Meat</p>
    </div>

    <div className=" mt-20 lg:mt-0 w-[180px] h-[152px] relative rounded-3xl bg-gradient-to-b  from-white from-10% via-[#f0dfbf]  via-34% to-[#f0b039c9] to-100">
        <Image src={Dessert} alt="breakfast.png" width={100} className="absolute -top-10 left-9 floating-obj"/>
        <p className="absolute bottom-10 left-14 text-[18px] font-semibold ">Dessert</p>
    </div>

    <div className=" mt-20 lg:mt-0 w-[180px] h-[152px] relative rounded-3xl bg-gradient-to-b  from-white from-10% via-[#dfe4d3b2]  via-34% to-[#dbdfd394] to-100">
        <Image src={Lunch} alt="breakfast.png" width={100} className="absolute -top-10 left-9 floating-obj"/>
        <p className="absolute bottom-10 left-14 text-[18px] font-semibold">Lunch</p>
    </div>

    <div className=" mt-20 lg:mt-0 w-[180px] h-[152px] relative rounded-3xl bg-gradient-to-b  from-white from-10% via-[#41190049]  via-34% to-[#411900b7] to-100">
        <Image src={Chocolate} alt="breakfast.png" width={100} className="absolute -top-10 left-9 floating-obj"/>
        <p className="absolute bottom-10 left-12 text-[18px] font-semibold">Chocolate</p>
    </div>
</div>
<RecipeLists/>
</section>
  )
}

export default Categories