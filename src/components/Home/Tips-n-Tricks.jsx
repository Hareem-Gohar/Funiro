// TipsAndTricks.js
import React from "react";
import Slider from "react-slick";

const TipsAndTricks = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const tips = [
    {
      title: "How to create a living room to love",
      image: "/images/f-serene-living.png",
      description: "Short description here...",
    },
    {
      title: "Solution for clean look working space",
      image: "/images/inspo-gallery-iimg-1.png",
      description: "Short description here...",
    },
    {
      title: "Make your cooking activity more fun",
      image: "/images/clean-dining.png",
      description: "Short description here...",
    },
  ];

  return (
    <div className="w-full max-w-7xl px-4 mx-auto py-10 my-5">
      <h2 className="text-center text-3xl font-semibold mb-6">Tips & Tricks</h2>
      <Slider {...settings} className="">
        {tips.map((tip, index) => (
          <div key={index} className="px-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src={tip.image}
                alt={tip.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{tip.title}</h3>
                <p className="text-sm text-gray-600">{tip.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TipsAndTricks;
