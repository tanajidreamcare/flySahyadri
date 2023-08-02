import React, { useState } from "react";
import Image from "next/image";
import useMediaQuery from "../../hooks/useMediaQuery";
import AccordionItem from "../accordian/AccordionItem";
import Testimonials from "../testimonials/Testimonials";
import Footer from "../footer/Footer";

function Landing() {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const accordionData = [
    {
      id: 1,
      title: "What is Paragliding?",
      desc: "Paragliding is an exhilarating adventure sport that involves flying a lightweight, free-flying aircraft called a paraglider. Pilots launch from a hill or mountain and use wind currents to glide and soar through the air, experiencing the freedom of flight and breathtaking aerial views.",
    },
    {
      id: 2,
      title: "Is Paragliding in sahyadri safe?",
      desc: "Paragliding in the Sahyadri region can be safe if proper precautions and safety measures are followed. It is essential to choose a reputable paragliding operator that prioritizes safety, employs experienced pilots, and maintains their equipment regularly. Additionally, monitoring weather conditions, flying within skill and experience limits, and using safety gear like helmets and reserve parachutes further enhance safety during paragliding activities. Always consult with local experts and adhere to their guidance to ensure a safe and enjoyable experience.",
    },
    {
      id: 3,
      title: "What is Acro Tandem paragliding ?",
      desc: "Acro tandem paragliding is an exhilarating form of tandem flying where skilled pilots perform aerobatic maneuvers with a passenger. This thrilling experience includes loops, spins, and other dynamic stunts, providing an adrenaline rush while ensuring safety under the guidance of experienced pilots.",
    },
  ];
  return (
    <div>
      <div className="relative h-screen border-b-2 border-black">
        <video
          src="/paraglidingvideo.mp4"
          autoPlay
          loop
          muted
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 z-10"></div>
        <div className="relative z-10 top-60">
          <div className="flex justify-center h-full w-full">
            <div className="-mt-10">
              <h1 className="text-shadow-pop-top font-display text-5xl font-extrabold text-white text-center mb-6">
                Paragliding in Kamshet
              </h1>
              <h4 className=" text-3xl text-white font-bold md:px-56 text-center">
                Say yes to the adrenaline and have the best experience of your
                life time.
              </h4>
              <div className="md:hidden w-full text-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 hover:bg-gradient-to-r hover:from-amber-500 hover:to-red-500  mt-16  py-4 text-white rounded-md">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container h-full ">
        <div className="flex justify-center">
          <div className="px-6">
            <h1 className="textShadow text-5xl text-w font-display font-extrabold text-center mt-5">
              Kamshet Paragliding Experiences
            </h1>
            <p className="mt-5 text-blue-900 text-center">
              FlySahyadri lets you customize your paragliding experiences.
            </p>
          </div>
        </div>
        <div className="md:flex justify-center mt-2 md:gap-10 mb-40 ">
          <div className="relative md:mx-2 flex justify-center hover:transform hover:scale-105 transition duration-300">
            <Image
              src={"/images/parag2.png"}
              width={isAboveMediumScreens ? 230 : 300}
              height={500}
              alt="logo"
              className="relative rounded-lg -z-10 mt-16 hover:transform hover:scale-105 transition duration-300 shadow-blue-600/50 shadow-xl object-cover"
            />
            <div>
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-3/5 md:w-full flex justify-center  absolute top-[500px] left-[80px] md:top-[430px] md:left-0 z-20">
                <h1 className="textShadow   font-extrabold text-lg text-white">
                  Bliss Joyride
                </h1>
              </div>
              <div className="bg-gradient-to-r from-amber-500 to-red-500  w-3/5 md:w-full flex justify-center absolute top-[530px] left-[80px] md:top-[460px] md:left-0 z-20">
                <h1 className="textShadow  font-extrabold text-3xl  text-white">
                  Rs.1399
                </h1>
              </div>
            </div>
          </div>
          <div className="relative md:mx-2 flex justify-center hover:transform hover:scale-105 transition duration-300">
            <Image
              src={"/images/parag3.png"}
              width={isAboveMediumScreens ? 280 : 300}
              height={400}
              alt="logo"
              className="relative rounded-lg -z-10 mt-6  shadow-blue-600/50 shadow-xl object-cover"
            />
            <div>
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-3/5 md:w-full flex justify-center  absolute top-[460px] left-[80px] md:top-[430px] md:left-0 z-20">
                <h1 className="textShadow   font-extrabold text-lg text-white">
                  Instructional Tandem
                </h1>
              </div>
              <div className="bg-gradient-to-r from-amber-500 to-red-500 w-3/5 md:w-full flex justify-center absolute top-[490px] left-[80px] md:top-[460px] md:left-0 z-20">
                <h1 className="textShadow  font-extrabold text-3xl  text-white">
                  Rs.1599
                </h1>
              </div>
            </div>
          </div>
          <div className="relative md:mx-2 flex justify-center hover:transform hover:scale-105 transition duration-300">
            <Image
              src={"/images/parag1.png"}
              width={isAboveMediumScreens ? 230 : 300}
              height={500}
              alt="logo"
              className="mt-16 rounded-lg hover:transform hover:scale-105 transition duration-300 shadow-blue-600/50 shadow-xl object-cover"
            />
            <div>
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-3/5 md:w-full flex justify-center  absolute top-[500px] left-[80px] md:top-[430px] md:left-0 z-20">
                <h1 className="textShadow   font-extrabold text-lg text-white">
                  Acro Tandem
                </h1>
              </div>
              <div className="bg-gradient-to-r  from-amber-500 to-red-500 w-3/5 md:w-full flex justify-center absolute top-[530px] left-[80px] md:top-[460px] md:left-0 z-20">
                <h1 className="textShadow  font-extrabold text-3xl  text-white">
                  Rs.1799
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-20 text-blue-900">
        <div className="flex justify-center">
          <div className="">
            <h1 className="textShadow mt-10 text-5xl text-w font-display font-extrabold text-center ">
              What we offer
            </h1>
            <p className="mt-5 px-10">
              We have always operated in a transparent system where our clients
              are welcomed to see for themselves what happens behind the scenes
            </p>
          </div>
        </div>
        <div>
        
        <div className="md:flex justify-center ">
          <div className="md:w-5/12  ">
            <Image
              src={"/images/parag4.png"}
              width={700}
              height={500}
              alt="logo"
              className="mt-16 rounded-lg hover:transform hover:scale-105 transition duration-300 shadow-blue-600/50 shadow-xl object-cover"
            />
          </div>
          
          <div className="md:w-6/12 px-5 lg:px-20">
          <h1 className="font-extrabold text-4xl mt-16 text-blue-900 underline-offset-2">
              Top Quality Equipments
            </h1>
            <p className="mt-10 text-blue-900">
              At Fly Sahyadri, safety is paramount. Our cutting-edge paragliding
              gear ensures secure and exhilarating experiences. Our meticulously
              designed wings provide stability and maneuverability, while our
              harnesses offer comfort and secure connections. With regularly
              inspected reserve parachutes and certified helmets, we prioritize
              your protection. Our pilots utilize variometers, radios, and GPS
              devices for enhanced situational awareness. Choose Fly Sahyadri
              for a safe and thrilling paragliding adventure like no other. Book
              your unforgettable experience today!
            </p>
            <p className="mt-5 text-blue-900">
              Experience safe thrills with our premier paragliding gear.
              Meticulously designed wings, secure harnesses, and certified
              safety equipment. Book now!
            </p>
          </div>
        </div>
        </div>
        
        <div className="md:w-5/12 md:hidden  lg:px-10">
          <Image
            src={"/images/parag5.png"}
            width={700}
            height={500}
            alt="logo"
            className="mt-16 rounded-lg hover:transform hover:scale-105 transition duration-300 shadow-blue-600/50 shadow-xl object-cover"
          />
        </div>
        <div className="md:flex justify-center">
          <div className="md:w-6/12 px-10">
          <h1 className="font-extrabold text-center text-4xl mt-16  underline-offset-2">
              Expert Trainers
            </h1>
            
            <p className="mt-10">
              At Fly Sahyadri, safety is our top priority. Our expert trainers,
              coupled with our top-quality equipment, ensure a secure and
              thrilling paragliding experience. With their guidance and our
              meticulously designed gear, you can confidently soar through the
              skies. Book now and embark on an unforgettable adventure with us!
            </p>
            <p className="mt-5">
              Soar Fearlessly with Expert Trainers and Premier Paragliding
              Equipment for a Safe and Thrilling Adventure. Book Now!
            </p>
          </div>
          <div className="md:w-5/12 hidden md:flex px-10">
            <Image
              src={"/images/parag5.png"}
              width={700}
              height={500}
              alt="logo"
              className="mt-16 rounded-lg hover:transform hover:scale-105 transition duration-300 shadow-blue-600/50 shadow-xl object-cover"
            />
          </div>
        </div>
        
        <div className="md:flex justify-center">
          <div className="md:w-6/12 px-5 lg:px-10">
            <Image
              src={"/images/parag6.png"}
              width={700}
              height={500}
              alt="logo"
              className="mt-16 rounded-lg hover:transform hover:scale-105 transition duration-300 shadow-blue-600/50 shadow-xl object-cover"
            />
          </div>
          <div className="md:w-6/12 px-5 lg:px-10">
          <h1 className="font-extrabold text-4xl mt-16 text-center  underline-offset-2">
              Safe and Thrill guaranteed
            </h1>
            
            <p className="mt-10">
           
              At Fly Sahyadri, we offer the perfect blend of adrenaline-pumping
              thrills and uncompromising safety. With our top-quality gear and
              experienced trainers, you can push your limits while enjoying a
              secure paragliding adventure. Embark on the thrill of a lifetime
              and book your safe and exciting experience today!
            </p>
            <p className="mt-5">
              Unleash Thrills Safely with Our Premier Paragliding Equipment and
              Expert Trainers. Experience the Perfect Balance of Adventure and
              Security. Book Now for an Unforgettable Journey!
            </p>
          </div>
        </div>
      </div>

      <section className="pb-10 mt-10 bg-sky-100">
        <div className="md:flex  justify-evenly ">
          <div className="md:w-6/12">
            <div>
              <h1 className="textShadow my-10 text-5xl text-w font-display font-extrabold text-center ">
                Know more about Paragliding
              </h1>
            </div>
            <div className="px-4">
              {accordionData.map((data, index) => {
                return (
                  <AccordionItem
                    key={index}
                    open={index === open}
                    title={data.title}
                    desc={data.desc}
                    toggle={() => toggle(index)}
                  />
                );
              })}
            </div>
          </div>

          <div>
            <Image
              src={"/images/parag8.png"}
              width={450}
              height={200}
              alt="logo"
              className="hover:transform hover:scale-105 transition duration-300 h-full"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="place-items-center">
          <h1 className="text-Shadow mt-12  pt-12 text-5xl text-w font-display font-extrabold text-center ">
            What our clients has to say
          </h1>
          <div className="flex justify-center">
            <div className="w-full">
              <Testimonials />
            </div>
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Landing;
