import { MdRocket } from "react-icons/md";
import { companyFeedback } from "../../constants/constant";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';


const AcumensReview = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-x-4'>
            <div className='w-full lg:w-[40%] h-full p-3 space-y-10 lg:border-r lg:border-black px-8 lg:px-0'>
                <h1 className="text-center lg:text-left text-4xl lg:text-5xl align-middle font-bold font-syne text-black">Driving digital <br></br> revenue for our <br></br> 1000+ satisfied <br></br> customers</h1>
                <div className="w-full lg:w-[80%]">
                    <div className='w-full flex flex-row justify-between items-center space-x-6 bg-white rounded-full pr-5 outline-none'>
                        <span className=" rounded-full text-3xl p-4 outline-none bg-gray-200"><MdRocket /></span>
                        <span className="text-3xl font-bold font-syne text-black">24%</span>
                        <span className="text-[12px] font-bold md:text-[13px] md:font-normal pr-2">Average Traffic <br /> Increase for Clients</span>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-[60%] h-full p-5'>
            <Swiper
            slidesPerView={1}
            loop={true}
            navigation={true}
            modules={[Navigation]}
        >
            {
                companyFeedback.map((feedBack, index) => (

                    <SwiperSlide key={index} style={{padding:"0px 80px"}}>
                        <div className='lg:p-3 p-0 flex flex-col space-y-6 justify-start items-start'>
                            <div>
                                <p className="text-2xl lg:text-justify text-left italic font-light font-kanit leading-8">{feedBack.opinion}</p>
                            </div>
                            <div className="space-y-1 text-left">
                                <p className="text-base font-normal font-kanit text-black ">{feedBack.companyCEO}</p>
                                <p className="text-base uppercase font-light font-kanit">{feedBack.company}</p>
                            </div>
                        </div>
                    </SwiperSlide>

                ))
            }

        </Swiper>

            </div>
        </div>
    )
}

export default AcumensReview