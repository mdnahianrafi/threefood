"use client"
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Correct Swiper CSS import for newer versions
import Image from 'next/image';
import HotRecipe from '../../../public/hot spice logo.png';
import { MdTimer } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { IoIosPlayCircle } from "react-icons/io";
import { FaCirclePause } from "react-icons/fa6";
import Badge from '../../../public/Badge.png'



const VideoSlider = ({ slides }) => {
  // State to keep track of the index of the currently playing video
  const [isVideoPlaying, setIsVideoPlaying] = useState(null);  

  // Reference for the Swiper component (optional)
  const swiperRef = useRef(null);  

  // Function to handle play/pause of the video when the button is clicked
  const handlePlayClick = (index) => {
    const videoElement = slides[index].videoRef;
    if (videoElement) {
      if (isVideoPlaying === index) {
        videoElement.pause();
        setIsVideoPlaying(null);
      } else {
        videoElement.play();
        setIsVideoPlaying(index);
      }
    }
  };
  

  // Function to stop the video when it ends
  const handleVideoEnd = () => {
    setIsVideoPlaying(null);  // Reset the state when the video ends, to indicate no video is playing
  };

  // Function that runs when the slide changes. It stops the video when the user slides to another item.
  const handleSlideChange = () => {
    if (isVideoPlaying !== null) {
      const videoElement = slides[isVideoPlaying].videoRef;
      if (videoElement) {
        videoElement.pause();
      }
      setIsVideoPlaying(null);
    }
  };
  

  return (
    <Swiper
      onSlideChange={handleSlideChange}  // Call handleSlideChange when the slide changes
      ref={swiperRef}  // Attach the Swiper reference
      spaceBetween={50}  // Space between slides in pixels
      slidesPerView={1}  // Only show one slide at a time
    >
      {slides.map((slide, index) => (
        // For each slide, create a SwiperSlide component with content inside
        <SwiperSlide key={index}>
          <div className="flex flex-wrap" >
            {/* Left side: Text/Buttons */}
            <div className="w-full lg:w-1/2 p-12 bg-gradient-to-b  from-white from-10% via-[#ffd15c]  via-34% to-[#f3ba2b] to-100 rounded-l-3xl" >
<div className="flex justify-center items-center md:justify-start">
<button className="bg-white w-40 h-9 md:h-11 rounded-full flex items-center justify-center space-x-2">
            <Image 
  src={HotRecipe} 
  alt="Hot Spice Logo"
  width={20} 
  height={20} 
  sizes="(max-width: 640px) 24px, 
         (max-width: 768px) 24px, 
         (max-width: 1024px) 24px, 
         48px"
/>

  <h1 className="text-black text-xs md:text-sm font-medium">Hot Recipes</h1>
</button>
</div>

<h2 className="py-8 leading-[1.2] text-2xl md:text-4xl lg:text-5xl xl:text-[40px] 2xl:text-[50px] font-semibold font-inter">
  {slide.title}
</h2>



              <p className="text-base leading-7 pb-10">{slide.text}</p>  {/* Display the content (text) of the slide */}

              <div className="flex gap-x-4 justify-center md:justify-start ">
    <div className="bg-gray-200 mb-24 py-2 px-4 rounded-3xl flex gap-x-3" >
<MdTimer className="text-2xl "/>
<p className="text-sm font-medium font-inter mt-[1px] text-gray-600">{slide.cooktime}</p>
    </div>
    <div className="bg-gray-200 mb-24 py-2 px-4 rounded-3xl flex gap-x-3" >
<ImSpoonKnife  className="text-2xl"/>
<p className="text-sm font-medium font-inter mt-[1px] text-gray-600">{slide.cookitem}</p>
    </div>
</div>

<div className="flex justify-between">
    <div className="flex gap-x-5">
  {/* Image section */}
  <img 
    src={slide.cookimg} 
    alt="cook image" 
    className="w-16 h-16 rounded-full object-cover" // Larger image size, make sure it fits well
  />
       <div className="mt-1 ">
       <p className="text-base font-bold font-inter">John Smith</p>
       <p className="text-base  font-inter mt-1">15 March, 2022</p>
       <div className="">
      <Image src={Badge} alt="Badge.png" width={150} height={150} className="absolute z-10 lg:top-10 sm:left-[40%] lg:left-[43%] xl:left-[45%] rotateImg "/>
       </div>
       </div>
    </div>
   
<button 
  onClick={() => handlePlayClick(index)} 
  className="bg-black text-white py-5 px-8 rounded-2xl flex items-center space-x-2"
>
  {isVideoPlaying === index ? (
    <>
      Pause Video  <FaCirclePause  /> 
    </>
  ) : (
    <>
      Play Video <IoIosPlayCircle  />
    </>
  )}
</button>

</div>
            </div>

            {/* Right side: Video */}
            <div className="slide-video w-full lg:w-1/2 h-full flex items-center justify-center ">
  <video
  
  ref={(el) => {
    slide.videoRef = el;
    if (el) {
      el.volume = 0.1;  // Set volume to 10%
    }
  }} // Store ref properly for playback control
    src={slide.videoSrc}
    controls={false}
    onEnded={handleVideoEnd}
    autoPlay={isVideoPlaying === index}
    style={{ width: "100%", height: "640px", objectFit: "cover" }} // Ensure full width & height
    className="rounded-r-3xl"
/>
</div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VideoSlider;  // Export the component so it can be used elsewhere
