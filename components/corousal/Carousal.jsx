import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';

const Carousel = ({ images, interval }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [images, interval]);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative">
      <div className="carousel-container">
        {images.map((image, index) => (
          <Transition
            key={index}
            show={activeIndex === index}
            enter="transition-opacity duration-100"
            enterFrom="opacity-50 "
            enterTo="opacity-100 "
            leave="transition-opacity duration-1000"
            leaveFrom="opacity-100 "
            leaveTo="opacity-50 "
            
          >
            <div className="carousel-image">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={200}
                layout='responsive'
                
              />
            </div>
          </Transition>
        ))}
      </div>
      <ul className="carousel-indicators">
        {images.map((_, index) => (
          <li
            key={index}
            className={`indicator ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
