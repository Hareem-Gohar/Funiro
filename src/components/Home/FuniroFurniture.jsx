import React from 'react';

const FuniroFurniture = () => {
    const images = [
        '/images/inspo-gallery-iimg-1-4.png',
        '/images/inspo-gallery-iimg-3.png',
        '/images/inspo-gallery-iimg-9.png',
        '/images/inspo-gallery-iimg-1.png',
        '/images/inspo-gallery-iimg-9.png',
        '/images/inspo-gallery-iimg-7.png',
        '/images/inspo-gallery-iimg-6.png',
        '/images/inspo-gallery-iimg-2.png',
        '/images/inspo-gallery-iimg-10.png',
        '/images/inspo-gallery-iimg-8.png',
        '/images/inspo-gallery-iimg-5.png',
    ];

    return (
        <div className="py-16">
            <h2 className="text-center text-3xl font-semibold mb-10">#FuniroFurniture</h2>
            <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-7xl mx-auto px-4">
                {images.map((image, index) => (
                    <>
                        <div
                            key={index}
                            className="flex justify-center items-center mb-4 h-full"
                            style={{ minHeight: '150px' }} // Adjust as necessary
                        >
                            <img
                                src={image}
                                alt={`Funiro setup ${index + 1}`}
                                className="w-full"
                            />
                        </div>

                        
                    </>
                ))}
            </div>
        </div>
    );
};

export default FuniroFurniture;
