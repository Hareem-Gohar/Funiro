import React from 'react'
import { FaHeadset, FaUserShield } from 'react-icons/fa';
import { HiOutlineTrophy } from "react-icons/hi2";
import { LiaShippingFastSolid } from 'react-icons/lia';



const featuresData = [
    {
        icon: < HiOutlineTrophy />,
        title: "High Quality",
        description: "crafted from top materials"
    },
    {
        icon: <FaUserShield />,
        title: "Warranty Protection",
        description: "Over 2 years"
    },
    {
        icon: <LiaShippingFastSolid />,
        title: "Free Shipping",
        description: "Order over 150 $"
    },
    {
        icon: < FaHeadset />,
        title: "24 / 7 Support",
        description: "Dedicated support"
    }
];

const Services = () => {
    return (
        <div className="flex items-center justify-between gap-y-5 py-8 flex-wrap">
            {featuresData.map((feature, index) => (
                <div key={index} className="flex items-center p-3 sm:p-0 rounded-md bg-[#fff1e8] sm:bg-transparent gap-5 w-full sm:w-72">
                    <div className="text-4xl">
                        {feature.icon}
                    </div>
                    <div className="w-full">
                        <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                        <p className="text-black">{feature.description}</p>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Services


// f2cfb9