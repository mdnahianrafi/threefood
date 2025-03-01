import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import meatball from "../../public/Small meatball.png";
import creamychicken from "../../public/small creamy chicken.png";
import potchicken from "../../public/small pot chicken.png";
import Image from "next/image";

function VerticalModeResponsive() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          vertical: true, // Switch to horizontal mode on larger screens
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          vertical: false, // Switch to horizontal mode on medium screens
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          vertical: false, // Switch to horizontal mode on medium screens
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false, // Switch to horizontal mode on small screens
        }
      }
    ],
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };

  return (
    <div className="slider-container py-8">
      <Slider {...settings}>
        <div>
          <div className="flex justify-center items-center">
            <Image src={meatball} alt="meatball.png" />
            <p className="text-xl font-semibold font-inter">Chicken Meatball with Creamy Cheese</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <Image src={creamychicken} alt="meatball.png" />
            <p className="text-xl font-semibold font-inter">The Creamiest Creamy Chicken</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <div className="w-1/2">
              <Image src={potchicken} alt="meatball.png" />
            </div>
            <p className="text-xl font-semibold font-inter">The Best Easy One Pot Chicken and Rice</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default VerticalModeResponsive;
