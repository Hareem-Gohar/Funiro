import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bedroom from "./../../../public/images/f-bedroom.png";
import dinning from "./../../../public/images/f-dinning.png";
import shelf from "./../../../public/images/f-shelf.png";
import "./../../assets/Styles/Insp-Slider.css";

const Inspiration = () => {

    const InspItems = [
        {
            id: "1",
            name: "Inner Peace",
            category: "Bedroom",
            image: bedroom
        },
        {
            id: "2",
            name: "Modern Dining",
            category: "Dining Room",
            image: dinning
        },
        {
            id: "3",
            name: "Inner Peace",
            category: "Bedroom",
            image: bedroom
        },
        {
            id: "4",
            name: "Bohauss Shelf",
            category: "Shelf Set",
            image: shelf
        }
    ];

    const settings = {
        className: "center",
        infinite: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        centerPadding: "60px",
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="w-full bg-[#F9F1E7] py-16 px-0 mx-auto my-10 relative">
            <div className="flex lg:flex-row flex-col flex-wrap items-center">
                <div className="w-full lg:w-[40%] px-8">
                    <div className="content max-w-full mb-8 text-center lg:text-start lg:max-w-sm w-full ">
                        <h2 className="text-4xl font-bold mb-4 text-gray-800">50+ Beautiful Rooms Inspiration</h2>
                        <p className="text-gray-500 mb-8">Our designers have created beautiful room prototypes to inspire you.</p>
                        <div className="flex justify-center lg:justify-start">
                            <button
                                className="w-full max-w-56 px-10 py-3 rounded text-white bg-[#E89F71] ">
                                Explore More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="slider-container ins-slider w-full lg:w-[60%]">
                    <Slider {...settings} className="h-full">
                        {
                            InspItems.map((item) => (
                                <div key={item.id} className="flex items-center justify-center h-full insp-slide">
                                    <div className="relative px-2 md:px-4 -me-0 md:-me-3 h-full">
                                        <img
                                            src={item.image}
                                            alt={`${item.name} - ${item.category}`}
                                            className="w-full h-[520px] object-cover"
                                        />
                                        <div className="absolute bottom-6 left-10  flex items-end justify-center lg:justify-normal">
                                            <div className='p-6 bg-white bg-opacity-65'>
                                                <p className="text-sm font-medium text-gray-600">{item.category}</p>
                                                <h3 className="text-xl font-semibold text-gray-700">{item.name}</h3>
                                            </div>
                                            <div>
                                                <button
                                                    className="px-4 py-2 bg-[#E89F71] text-white hover:scale-100 transition-transform duration-300 ease-in-out"
                                                    aria-label={`View ${item.name}`}
                                                >
                                                    ➤
                                                </button>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Inspiration;
