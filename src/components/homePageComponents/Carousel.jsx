import { useState, useEffect } from "react";

const images = ["box-1.webp", "box-2.webp", "box-3.webp"];

const Carousel = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex">
      {/* First Column */}
      <div className="flex flex-col mt-28 lg:mt-48">
        <div className="relative w-40 h-52 lg:w-64 lg:h-80 overflow-hidden rounded-[40px] shadow-2xl shadow-black mb-4">
          <img
            src="box-1.webp"
            alt="Image 1"
            className="w-full h-full object-cover rounded-[40px]"
            loading= "lazy"
          />
        </div>
      </div>
      {/* Second Column */}
      <div className="flex flex-col ml-4">
        <div className="relative w-40 h-52 lg:w-64 lg:h-80 overflow-hidden rounded-[40px] shadow-2xl shadow-black mb-4">
          <img
            src="box-3.webp"
            alt="Image 3"
            className="w-full h-full object-cover rounded-[40px]"
            loading= "lazy"
          />
        </div>
        <div className="relative w-40 h-52 lg:w-64 lg:h-80 overflow-hidden rounded-[40px] shadow-2xl shadow-black">
          <img
            src="box-2.webp"
            alt="Image 2"
            className="w-full h-full object-cover rounded-[40px]"
            loading= "lazy"
          />
        </div>
      </div>
    </div>
  );
};
export default Carousel;

{/* <div className="relative w-72 h-96 overflow-hidden rounded-[40px]">
      <div className="absolute w-full h-full rounded-[40px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel ${index}`}
            className={`absolute shadow-2xl shadow-black w-full h-auto object-cover transition-opacity rounded-[40px] duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </div> */}