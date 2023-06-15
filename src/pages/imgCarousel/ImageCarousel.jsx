import React, { useState, useEffect, useRef } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                return prevIndex >= (images.length - 1) ? 0 : prevIndex + 1;
            });
        }, 10000); // Change the delay (in milliseconds) as per your preference

        return () => {
            clearInterval(timer);
        };
    }, [images.length]);

    return (
        <div className="image-carousel">
            <div className="image-carousel-container" ref={carouselRef}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Carousel  ${index}`}
                        style={{ transform: `translateX(-${(currentImageIndex) * 100}%)` }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
