import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 75,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 3,
      },
    },
  };
  const cards = [
    {
      img: "/images/paragliding1.jpg",
      name: "Bliss Joyride",
      duration: "10-15 Min",
      pricing: "Rs1399/-",
      description:
        "Bliss joyride at Tower Hill (Kamshet), Shelar Hill (Karanjgaon), Pavana is ideal for those looking to try paragliding for the first time. Simply sit back and enjoy the flight with a highly trained and experienced pilot. Each ride with an experienced instructor lasts 10 – 15 minutes and allows the passenger to feel the thrill of soaring high in the sky",
      btpoints1: "Basic Flying ",
      btpoints2: "Beginner Friendly",
      btpoints3: "pilot Control",
      btpoints4: " ",
      btpoints5: " ",
      
    },
    {
      img: "/images/paragliding2.jpg",
      name: "Instructional Joyride",
      duration: "10-15 Min",
      pricing: "Rs1599/-",
      description:
        "Experience comprehensive instructional paragliding sessions led by expert instructors. Master the art of launching, controlling, and landing paragliders while prioritizing safety. Gain the necessary skills, knowledge, and confidence to navigate the skies solo, embracing the exhilarating freedom of paragliding with utmost proficiency.",
      btpoints1: "Basic Flying  ",
      btpoints2: "Intermediate Level",
      btpoints3: "Person Control",
      btpoints4: "",
      btpoints5: "",
      
    },
    {
      img: "/images/paragliding4.jpg",
      name: "Special Acro Joyride",
      duration: "10-15 Min",
      pricing: "Rs1799/-",
      description:
        "Unleash your inner daredevil with thrilling acro paragliding. Learn advanced maneuvers, including spins, loops, and wingovers, under the guidance of experienced instructors. Push the boundaries of flight, mastering aerial acrobatics and experiencing an adrenaline-fueled adventure in the sky.",
      btpoints1: "Acro Flying ",
      btpoints2: "Wingovers ",
      btpoints3: "Spiral ",
      btpoints4: "Ridge dancing ",
      btpoints5: "SAT ",
      
    },
  ];
  return (
    <div>
      <div
        className="min-h-screen flex bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/images/parag4.png')" }}
      >
        <div className="font-medium text-white m-10">
  <h1>
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="fade-up-animation"
    >
      <span className="font-bold text-7xl text-orange-500">
        Fly Sahyadri
      </span>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="fade-up-animation"
    >
      <span className="text-6xl text-white">Where Adventure Takes Flight!</span>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="fade-up-animation mt-10"
    >
      <div className="hidden sm:block">
  <div className="flex sm:w-1/3">
    <span className="text-xl text-start text-white font-display font-medium">
      Looking for an adrenaline rush near Pune? Kamshet is the answer! With thrilling paragliding adventures, Kamshet and Lonavala offer breathtaking landscapes. Explore the beauty of Pune and Kamshet with exciting activities. From joyrides to Kamshet Adventure, immerse yourself in the excitement. Experience paragliding in India's diverse landscapes. Get ready for an unforgettable adventure!
    </span>
  </div>
</div>

    </motion.div>
  </h1>
</div>

      </div>
      <div>
        <div className="text-center mt-5">
          <h1 className="text-5xl font-bold text-orange-600">Our Packages</h1>
        </div>
        <div className="text-center px-10 w-full mt-5 font-bold flex justify-center">
          <motion.p
            className="sm:w-2/3 text-blue-900"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            Experience the ultimate adventure in Kamshet! Paraglide through
            breathtaking landscapes, explore Kamshet and Lonavala's tourist
            spots, and indulge in thrilling activities in Pune. Discover the
            thrill of paragliding in Kamshet and Pune, and explore the diverse
            landscapes of India. Get ready for an unforgettable adventure like
            no other!
          </motion.p>
        </div>
      </div>
      <div>
        {/* card starts here  /images/paragliding3.jpg*/}
        <div className="container mx-auto py-8 ">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex flex-col md:flex-row mx-4 md:mx-8 lg:mx-40 border shadow-2xl shadow-blue-300 rounded-lg mt-10 p-5 hover:scale-105 transition-transform duration-300 ease-in-out "
            >
              <img
                src={card.img}
                alt="Product Image"
                className="rounded-lg flex-none w-full md:w-1/3 mr-0 md:mr-8 shadow-lg h-72 md:h-fit  "
              />
              <div className="flex-1 p-5">
                <h1 className="text-3xl font-bold mb-2 text-blue-600">
                  {card.name}
                </h1>
                <p className="text-blue-900 mb-2">{card.duration}</p>
                <p className="text-blue-900 mb-4 font-semibold">{card.pricing}</p>
                <p className="text-blue-900 mb-4">{card.description}</p>
                <ul className="font-semibold list-inside mb-4 list-none text-blue-900">
                  <li>{card.btpoints1}</li>
                  <li>{card.btpoints2}</li>
                  <li>{card.btpoints3}</li>
                  <li>{card.btpoints4}</li>
                  <li>{card.btpoints5}</li>
                </ul>
                <button className="bg-orange-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition-colors duration-500 ease-in-out mb-4">
  Book Now
</button>

                <p className="text-gray-600 text-sm">{card.note}</p>
              </div>
            </div>
          ))}
        </div>
        {/* ends here */}
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Services;
