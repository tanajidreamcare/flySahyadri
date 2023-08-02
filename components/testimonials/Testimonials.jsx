import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Testimonials() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);
  const slides = [
    {
      url: '/images/parag6.png',
      name: 'Sheldon',
      review: ' "Paragliding with Fly Sahyadri was an extraordinary experience! The breathtaking views, exhilaration of flight, and professional team made it unforgettable."',
      profPic: '/images/profpic.jpg'
    },
    {
      url: '/images/parag4.png',
      name: 'Leornad',
      review: ' "Paragliding with Fly Sahyadri was pure magic! The thrill, the views, the expertise—truly an extraordinary experience!"',
      profPic: '/images/profpic.jpg'
    },
    {
      url: '/images/parag5.png',
      name: 'Raj',
      review: ' Absolute thrill, unforgettable memories!"',
      profPic: '/images/profpic.jpg'
    },
  ]
  return (
    <div className='max-w-[1100px] h-[500px] w-full m-auto py-12 px-4 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center  bg-cover duration-500  text-white'
      >
        <div className='flex justify-center'>
        <div className='flex justify-around place-items-center rounded-2xl mt-48 max-w-[600px] w-10/12 bg-black/50'>
        <div className='my-2 mx-3 w-3/12'>
        <Image
            src={slides[currentIndex].profPic}
            width={150}
            height={300}
            alt="logo"
            className=" z-40 hover:transform rounded-full h-40 hover:scale-105 transition duration-300 shadow-blue-600/50 shadow-xl object-fill"
          />
        </div>
        <div className='w-7/12'>
          <h1 className='text-3xl'>{slides[currentIndex].name}</h1>
          <h1>{slides[currentIndex].review}</h1>
        </div>
        </div>
        </div>
       
        
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials