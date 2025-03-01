import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import LearnMore from '../components/LearnMore'
import InstagramSection from '../components/InstagramSection'
import DelRecipe from '../components/DelRecipe'
import Subscribe from '../components/Subscribe'


const HomePage = () => {
  return (
    <>
    <Banner/>
    <Categories/>
    <LearnMore/>
    <InstagramSection/>
<div className="" id="ti">
<DelRecipe/>
</div>
    <Subscribe/>
    </>
  )
}

export default HomePage