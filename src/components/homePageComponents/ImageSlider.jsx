/* eslint-disable react/prop-types */
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap relative">
      <div className="animate-scroll lg:gap-x-36">
        {images?.map((image, index) => (
          <div key={index} className='relative w-auto h-auto text-black bg-transparent overflow-hidden mr-10 md:mr-0'>

            <img
              src={image}
              alt={`Slide ${index}`}
              className='w-28 h-28 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain'
              loading= "lazy"
            />
          </div>
        ))}
        {images?.map((image, index) => (
          <div key={index} className='relative w-auto h-auto text-black bg-transparent overflow-hidden hidden md:block md:mr-0'>
            <img
              src={image}
              alt={`Slide ${index}`}
              className='w-28 h-28 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain'
              loading= "lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
