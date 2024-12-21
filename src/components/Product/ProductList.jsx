import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);

  useEffect(() => {
    fetch("/Data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching product data:", error));
  }, []);

  // Show more products
  const handleProducts = () => {
    setVisibleProducts((prev) => prev + 8);
  };

  // Show less products
  const handleLessProducts = () => {
    setVisibleProducts((prev) => Math.max(prev - 8, 8));
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-3">
      <h2 className="pb-8 text-3xl text-center text-gray-800 font-semibold">
        Our Products
      </h2>
      <div className="grid max-[490px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6 py-3">
        {products.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex gap-6 justify-center mt-8">
        {/* "See More" button */}
        {visibleProducts < products.length && (
          <div className="flex justify-center">
            <button
              onClick={handleProducts}
              className="border-[#E89F71] border-2 w-full max-w-56 text-[#E89F71] px-10 py-2 rounded hover:text-white hover:bg-[#cf815a] transition"
            >
              See More
            </button>
          </div>
        )}

        {/* "See Less" button */}
        {visibleProducts > 10 && (
          <div className="flex justify-center">
            <button
              onClick={handleLessProducts}
              className="border-[#E89F71] border-2 w-full max-w-48 text-[#E89F71] px-10 py-2 rounded hover:text-white hover:bg-[#cf815a] transition"
            >
              See Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
