import img1 from "../../public/images/para1.jpg";
import img2 from "../../public/images/para2.jpg";
import img3 from "../../public/images/para3.jpg";
import img4 from "../../public/images/para4.jpg";
import img5 from "../../public/images/parag1.png";
import img6 from "../../public/images/parag1.png";
import img7 from "../../public/images/parag2.png";
import img8 from "../../public/images/parag3.png";
import img9 from "../../public/images/parag4.png";
import img10 from "../../public/images/parag5.png";
import img11 from "../../public/images/parag6.png";
import img12 from "../../public/images/parag7.png";
import img13 from "../../public/images/parag8.png";
import img14 from "../../public/images/parag8.png";
import { FaWindowClose } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
];

function PGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handlePrevClick = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
    document.addEventListener("keydown", handlePrevClick);
    return () => {
      document.removeEventListener("keydown", handleNextClick);
    };
  }, [selectedImage]);

  return (
    <>
      
      <div className="mt-20 mb-20">
        <div className="w-full max-w-5xl gap-5 p-5 pb-10 mx-auto mb-10 space-y-5 columns-4">
          {images.map((src, index) => (
            <div key={src} className="relative">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                layout="responsive"
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
          {selectedImage !== null && (
            <div className="fixed inset-0 z-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
              <div className="z-20">
                <Image
                  src={images[selectedImage]}
                  alt={`Image ${selectedImage + 1}`}
                  layout="responsive"
                  sizes="80vh"
                />
                <div>
                  <div className="">
                    <button
                      className="absolute top-60 bottom-0 left-10 sm:left-80 p-2 h-8 mt-4 mr-4 text-white bg-gray-800 border border-white rounded-full"
                      onClick={handlePrevClick}
                    >
                      <BsArrowLeftCircleFill />
                    </button>
                    <button
                      className="absolute top-60 bottom-0 right-10  md:right-80 p-2 h-8 mt-4 mr-4 text-white bg-gray-800 border border-white rounded-full"
                      onClick={handleNextClick}
                    >
                      <BsFillArrowRightCircleFill />
                    </button>
                  </div>

                  
                </div>
                <button
                  className="absolute top-20 right-80 p-2 mt-4 mr-4 text-white bg-gray-800 border border-white rounded-full"
                  onClick={() => setSelectedImage(null)}
                >
                  <FaWindowClose />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PGallery;
