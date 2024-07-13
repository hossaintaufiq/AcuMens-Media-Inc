import { blogDetails } from "../../constants/constant";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const BlogCard = () => {

  const [noOfCards, setNoOfCards] = useState(2);
  
  useEffect(() => {
    const handleNoOfCards = () => {
      if (window.innerWidth < 460) {
        setNoOfCards(1);
      } else {
        setNoOfCards(2);
      }
    };
    // Add event listener
    window.addEventListener("resize", handleNoOfCards);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleNoOfCards);
    };
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={noOfCards}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {blogDetails.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className=" overflow-hidden shadow-lg shadow-gray-400 h-[440px] lg:h-[450px] xl:h-[480px] 3xl:h-[560px] bg-white rounded-[40px]">
              <img
                src={blog.img}
                alt="Card image"
                className="object-cover w-full"
                loading= "lazy"
              />
              <div className="p-8">
                <h4 className="font-light font-kanit leading-6 tracking-normal text-base mb-2">
                  {blog.date}
                </h4>
                <p className="text-black text-xl font-bold font-syne tracking-tighter leading-6 cursor-pointer">
                  {blog.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default BlogCard;