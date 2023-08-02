import img1 from "../../public/images/para1.jpg";
import img2 from "../../public/images/para2.jpg";
import img6 from "../../public/images/para3.jpg";
import img7 from "../../public/images/para4.jpg";
import img10 from "../../public/images/parag1.png";
import img11 from "../../public/images/parag1.png";
import img15 from "../../public/images/parag2.png";
import img16 from "../../public/images/parag3.png";
import img19 from "../../public/images/parag4.png";
import img20 from "../../public/images/parag5.png";
import img21 from "../../public/images/parag6.png";
import img22 from "../../public/images/parag7.png";
import img24 from "../../public/images/parag8.png";
import img26 from "../../public/images/parag8.png";
import Image from "next/legacy/image";
import { useState } from "react";

const images = [
  img1,
  img2,
  img6,
  img7,
  img10,
  img11,
  img15,
  img16,
  img19,
  img20,
  img21,
  img22,
  img24,
  img26,
];

const Gallery = () => {
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

  return (
    <>
      {/* <div className="text-center ">
        <h1 className="my-5 mb-10 text-3xl font-bold text-black">GALLERY</h1>
      </div> */}
      <div className="mt-10 mb-20">
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
              <div className="relative">
                <Image
                  src={images[selectedImage]}
                  alt={`Image ${selectedImage + 1}`}
                  layout="responsive"
                  sizes="100vh"
                />
                <button
                  className="absolute top-0 bottom-0 left-0 w-1/2 bg-transparent"
                  onClick={handlePrevClick}
                ></button>
                <button
                  className="absolute top-0 bottom-0 right-0 w-1/2 bg-transparent"
                  onClick={handleNextClick}
                ></button>
                <button
                  className="absolute top-0 right-0 p-2 mt-4 mr-4 text-white bg-gray-800 border border-white rounded-full"
                  onClick={() => setSelectedImage(null)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
