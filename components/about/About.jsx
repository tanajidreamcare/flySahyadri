import React, { useState } from "react";
import Image from "next/image";
import Carousel from "../corousal/Carousal";
import LiveVideo from "../liveVideo/LiveVideo";
import useMediaQuery from "../../hooks/useMediaQuery";
import NumberCounter from "../NumberCounter";

const About = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const stats = [
    {
      id: 1,
      value: 4321,
      name: "Flights till Date",
      icon: "/images/paraglidingIcon.png",
    },
    {
      id: 2,
      value: 10,
      name: "Paragliders to serve you",
      icon: "/images/teacherIcon.png",
    },
    {
      id: 3,
      value: 15,
      name: "Years of Experience",
      icon: "/images/badgeIcon.png",
    },
  ];

  const duration = 5000;

  const images = [
    {
      src: "/images/para1.jpg",
      alt: "Image 1",
    },
    {
      src: "/images/para2.jpg",
      alt: "Image 2",
    },
    {
      src: "/images/para3.jpg",
      alt: "Image 3",
    },
    {
      src: "/images/para4.jpg",
      alt: "Image 4",
    },
  ];

  const liveVideoId = "V1QGeAzvI-Q";

  return (
    <div>
      
      <div className="">
        <div className="md:flex justify-center pt-20">
        <div
        className="min-h-screen flex bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/images/para1.jpg')" }}
      >
          <div className=" md:px-20 text-center">
            <h1 className=" text-3xl text-amber-500 mb-5 mt-10">Welcome</h1>
            <h1 className=" textShadow text-5xl text-w font-display font-extrabold mb-10">
              Paragliding In Lonavala Since 2008!


            </h1>
            <h1 className="text-blue-900">
              Welcome to Fly Sahyadri, your gateway to thrilling paragliding
              adventures in the breathtaking locales of Kamshet and Lonavala. We
              specialize in providing adrenaline-pumping paragliding experiences
              that showcase the beauty of these regions. Whether you're a
              first-time flyer or an experienced enthusiast, our expert team is
              dedicated to delivering unforgettable joyrides and exhilarating
              flights. With Flysahyadri as our trusted partner, we guarantee
              safe and exhilarating Kamshet adventures. Join us in exploring the
              skies of Pune and beyond, as we offer the best paragliding
              experiences in India. Discover the serenity of Lonavala, immerse
              yourself in Kamshet's adventure activities, and witness the
              picturesque tourist places this region has to offer. Soar with us,
              embrace the thrill, and create memories that will last a lifetime.
              Get ready to embark on an extraordinary paragliding journey with
              Fly Sahyadri.
            </h1>
          </div>
          </div>
          {/* <div className="md:w-6/12 md:mx-28 pt-10">
            <Carousel images={images} interval={3000} />
          </div> */}
        </div>
      </div>



      <div className="flex justify-center w-full md:mt-60 my-32">
        <div className="md:p-10 md:w-8/12 rounded-3xl flex justify-center relative">
          <Image
            src={"/images/paraglidingMisc.png"}
            width={isAboveMediumScreens ? 230 : 300}
            height={500}
            alt="logo"
            className="absolute hidden md:block -left-32 -top-20  "
          />
          <Image
            src={"/images/paraMan.png"}
            width={isAboveMediumScreens ? 100 : 150}
            height={300}
            alt="logo"
            className="absolute hidden md:block -right-32 top-60  "
          />
          <div className="absolute hidden md:block right-2 shadow-blue-600/50 shadow-xl top-8 w-5 h-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 "></div>
          <div className="absolute hidden md:block left-2 shadow-blue-600/50 shadow-xl bottom-8  w-5 h-5 rounded-full bg-gradient-to-r from-amber-500 to-red-500 "></div>
          <div className="absolute hidden md:block right-10 shadow-blue-600/50 shadow-xl -top-2 w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-red-500 "></div>
          <div className="absolute hidden md:block left-10 shadow-blue-600/50 shadow-xl -bottom-2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 "></div>
          <div className="absolute hidden md:block right-6 shadow-blue-600/50 shadow-xl top-16 w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-red-500 "></div>
          <div className="absolute hidden md:block left-6 shadow-blue-600/50 shadow-xl bottom-16  w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 "></div>
          <div className="absolute hidden md:block -right-16 shadow-blue-600/50 shadow-xl top-8 w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-red-500 "></div>
          <div className="absolute hidden md:block -left-16 shadow-blue-600/50 shadow-xl bottom-8 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 "></div>
          <div className="absolute hidden md:block -right-10 shadow-blue-600/50 shadow-xl -top-5 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 "></div>
          <div className="absolute hidden md:block -left-10 shadow-blue-600/50 shadow-xl -bottom-5 w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-red-500 "></div>

          <div className="flex justify-center rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500   py-10 ">
            <NumberCounter stats={stats} duration={duration} />
          </div>
        </div>
      </div>
      <div className="container sm:flex  md:mb-12">
        <div className="md:w-6/12  mt-10 mx-3 lg:mx-10">
          <LiveVideo videoId={liveVideoId} />
        </div>
        <div className="md:px-5 my-12">
          <h1 className="textShadow text-3xl text-center font-display font-extrabold  mb-10">
            A brief History
          </h1>
          <p className="text-blue-900 w-full mx-2">
            Fly Sahyadri has a captivating history in the world of adventure.
            Since 2010, we have been pioneers in providing thrilling paragliding
            experiences in Kamshet, Lonavala, and beyond. With a commitment to
            safety and customer satisfaction, we invite you to join us on an
            extraordinary journey through the skies.
          </p>
          <p className="text-blue-900 w-full mx-2">
            With skilled and experienced pilots at the helm, we have guided
            countless thrill-seekers to new heights, creating unforgettable
            memories in the process. As we forge ahead, we are excited to
            continue our legacy of delivering remarkable paragliding adventures,
            weaving stories of courage, freedom, and the sheer joy of flight.
            Join us on this extraordinary journey as we soar to new horizons and
            create history in the skies.
          </p>
        </div>
      </div>
    </div>
  );
};

export const AboutComponent = About;
