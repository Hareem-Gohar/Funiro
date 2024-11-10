import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sofa from "./../../../public/images/sofa.png";
import roomSofa from "./../../../public/images//room-sofa.png";
import bed from "./../../../public/images//bed.png";
import arrow from "./../../../public/images/arrow-right.png";
import "./../../assets/Styles/Slider.css";

const HeroSection = () => {

    const furnitureItems = [
        {
            name: "Bohauss",
            description: "Luxury big sofa 2-seat",
            price: "17,00,000",
            image: sofa
        },
        {
            name: "Room Sofa",
            description: "Comfortable 3-seat sofa for living rooms",
            price: "20,00,000",
            image: roomSofa
        },
        {
            name: "Modern Dining Set",
            description: "Luxury dining table with 6 chairs",
            price: "15,00,000",
            image: sofa
        },
        {
            name: "Bohauss Bed",
            description: "Elegant king-size bed with a soft mattress",
            price: "25,00,000",
            image: bed
        }
    ];

    const settings = {
        className: "center",
        infinite: true,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerPadding: "60px",
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 768,  
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 480,  
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true, 
                }
            }
        ]
    };
 
    return (
        <div className="w-full pt-6 px-3 mx-auto my-10 relative">
            <div className="slider-container hero-section-slider">
                <Slider {...settings}>
                    {furnitureItems.map((item, index) => (
                        <div key={index} className="relative slide-item">
                            <div className="pt-4 px-4 w-full relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-[300px] md:h-[550px] object-cover w-full"
                                />
                                <div className="absolute w-72 bottom-10 right-8 flex flex-col justify-end bg-white bg-opacity-80 p-6 text-[#3A3A3A]">
                                    <h2 className="text-2xl font-semibold mb-1">{item.name}</h2>
                                    <p className="mb-2 text-sm">{item.description}</p>
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold">Price: {item.price}</p>
                                        <img src={arrow} alt="right arrow" className="cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="hidden md:block absolute top-0 left-8 w-[300px] lg:w-[450px] p-8 lg:p-14 bg-white bg-opacity-70 text-[#3A3A3A]">
                <h1 className="text-3xl lg:text-5xl leading-[40px] lg:leading-[60px] font-bold">High-Quality Furniture Just For You</h1>
                <p className="mt-4 text-lg mb-4">Our furniture is carefully selected and made from the best quality materials suitable for your dream home.</p>
                <button className="mt-6 w-full px-4 py-4 lg:py-6 bg-[#E89F71] text-white font-semibold">Shop Now</button>
            </div>
        </div>
        
    );
}

export default HeroSection;
