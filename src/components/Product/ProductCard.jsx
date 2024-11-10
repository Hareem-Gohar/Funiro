import React from 'react'

const ProductCard = ({ product }) => {
const {
category,
discount,
discountAmount,
discountPercent,
img,
new:isNew,
price,
title
} = product;

  return (
<div className="relative group w-full sm:max-w-[350px] mx-auto bg-[#F4F5F7] overflow-hidden shadow-lg">
{/* Product Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-auto sm:h-80  transition-transform duration-300 transform group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute z-10 inset-0 bg-black rounded-lg bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button className="text-[#E89F71] font-medium px-6 py-2 bg-white hover:text-white hover:bg-[#E89F71] transition">
          Add to cart
        </button>
      </div>

      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-4 right-3 bg-[#E97171] text-white px-2 py-3 rounded-full text-sm ">
          -{discountPercent}%
        </div>
      )}
      {/* New Product */}
      {
        isNew && (
          <div className="absolute top-4 right-3 bg-[#2EC1AC] text-white px-2 py-3 text-sm rounded-full">
          New
        </div>
        )
      }

      {/* Product Details */}
      <div className="p-4 ">
        <h3 className="text-lg text-gray-700 font-semibold">{title}</h3>
        <p className="text-gray-500">{category}</p>

        <div className="mt-2 flex items-center">
          <span className="text-gray-700 font-bold">
            Rp {price}
          </span>
          {discount && (
            <span className="text-gray-500 line-through ml-2">
              Rp {(price + discountAmount)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard