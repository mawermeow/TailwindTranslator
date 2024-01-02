import React, { useState } from "react";
import { motion } from "framer-motion";
import {sourcePath} from "../../utils/path";

const CarouselItem = ({ width, image }) => (
    <motion.div
        className="relative flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{width:width,height:width/16*9}}
    >
        <motion.img
            src={image.src.replace("./",sourcePath)}
            alt={image.description}
            className="h-full object-contain"
        />
    </motion.div>

);

const Carousel = ({ width, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) {
        return null; // Return null or some placeholder if images is not provided or empty
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative overflow-x-hidden my-4">
            <div className="w-full text-center mb-1">{`[${images[0].description}]`}</div>
            <motion.div
                className="flex"
                animate={{ translateX: -currentIndex * width }}
                transition={{duration:0.5}}
                style={{width:width*images.length}}
            >
                {images.map((image, index) => (
                    <CarouselItem key={index} width={width} image={image} />
                ))}
            </motion.div>
            <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 bg-gray-700 text-white opacity-70 hover:opacity-100"
                onClick={handlePrev}
            >
                &lt;
            </button>
            <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4 bg-gray-700 text-white opacity-70 hover:opacity-100"
                onClick={handleNext}
            >
                &gt;
            </button>
            <div className="w-full text-center">{`${currentIndex+1} / ${images.length}`}</div>
        </div>
    );
};

export default Carousel;
