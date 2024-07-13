import BannerL from "../components/LandingPageComponents/BannerL";
import HeroL from "../components/LandingPageComponents/HeroL";
import HeroS from "../components/LandingPageComponents/HeroS";
import Review from "../components/LandingPageComponents/Review";
import { landingPageReview } from "../constants/landingPageConstant";


// rajkumar


import CustomForm from "../components/homePageComponents/CustomForm";


// importing constants from constant folder
import {  partnerImages,  marketingList, awardedImages, inputFields } from "../constants/constant"

// importing react icons
import { FaCheckCircle } from "react-icons/fa";
import Portfolio from "../components/homePageComponents/Portfolio";



const LandingPage = () => {
  return (
    <div className="pt-4">
    <div className=" bg-gray-100">
      <div className="mt-6 p-10 bg-white rounded-b-[40px]">
        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
          <div className="hidden md:block">
            <HeroL
              borderColor={"border-black"}
              buttonBg={"bg-blue-Purple"}
              listColor={"text-blue-Purple"}
              bgColor={"bg-black"}
            />
          </div>
          <div className="block md:hidden">
            <HeroS
              borderColor={"border-black"}
              buttonBg={"bg-blue-Purple"}
              listColor={"text-blue-Purple"}
              bgColor={"bg-black"}
            />
          </div>
          <BannerL color={"text-black"} />
          <div className="flex justify-center items-center lg:justify-between gap-6 flex-wrap py-10">
            {landingPageReview.map((review, index) => (
              <Review
                key={index}
                review={review}
                borderColor={"border-black"}
              />
            ))}
          </div>
        </div>
      </div>
     <div className=" bg-blue-Purple">
      <div className="bg-gray-100 rounded-b-[40px] p-10">
        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
          <div className="hidden md:block">
            <HeroL
              borderColor={"border-black"}
              buttonBg={"bg-blue-Purple"}
              listColor={"text-blue-Purple"}
              bgColor={"bg-black"}
            />
          </div>
          <div className="block md:hidden">
            <HeroS
              borderColor={"border-black"}
              buttonBg={"bg-blue-Purple"}
              listColor={"text-blue-Purple"}
              bgColor={"bg-black"}
            />
          </div>
          <BannerL color={"text-black"} />
          {/* <div className="flex justify-center items-center lg:justify-between gap-6 flex-wrap py-10">
            {landingPageReview.map((review, index) => (
              <Review
                key={index}
                review={review}
                borderColor={"border-black"}
              />
            ))}
          </div> */}
        </div>
      </div>
      </div>

      
     <div className="bg-black">
      <div className="bg-blue-Purple rounded-b-[40px] p-10 text-white ">
        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
          <div className="hidden md:block">
            <HeroL
              borderColor={"border-white"}
              buttonBg={"bg-dark"}
              listColor={"text-black"}
              bgColor={"bg-white"}
            />
          </div>
          <div className="block md:hidden">
            <HeroS
              borderColor={"border-white"}
              buttonBg={"bg-dark"}
              listColor={"text-black"}
              bgColor={"bg-white"}
            />
          </div>

          <BannerL color={"text-white"} />

          {/* <div className="flex justify-center items-center lg:justify-between gap-6 flex-wrap py-10">
            {landingPageReview.map((review, index) => (
              <Review
                key={index}
                review={review}
                borderColor={"border-white"}
              />
            ))}
          </div> */}
        </div>
      </div>
      </div>
     <div className=" bg-blue-Purple">
      <div className="bg-black p-10 rounded-b-[40px] text-white ">
        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
          <div className="hidden md:block">
            <HeroL
              borderColor={"border-white"}
              buttonBg={"bg-blue-Purple"}
              listColor={"text-blue-Purple"}
              bgColor={"bg-white"}

            />
          </div>
          <div className="block md:hidden">
            <HeroS
              borderColor={"border-white"}
              buttonBg={"bg-blue-Purple"}
              listColor={"text-blue-Purple"}
              bgColor={"bg-white"}

            />
          </div>

          <BannerL color={"text-white"} />

          <div className="flex justify-center items-center lg:justify-between gap-6 flex-wrap py-10">
            {landingPageReview.map((review, index) => (
              <Review
                key={index}
                review={review}
                borderColor={"border-white"}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
      
      {/* form */}

      <div className="w-full lg:px-0 py-10 bg-blue-Purple text-white outline-0">
        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto space-y-16">

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-[50%] flex flex-col justify-center items-center gap-y-5">
              <h1 className="text-4xl lg:text-5xl font-bold font-syne">Unlock a Complimentary Consultation to Supercharge Your Business</h1>
              <p className="text-base font-light font-kanit tracking-normal leading-6">Experience a comprehensive marketing analysis, assessing the effectiveness of your company&apos;s marketing initiatives. Here&apos;s what awaits you:</p>

              <hr className="w-full h-2 " />

              <ul className="space-y-4">
                {
                  marketingList.map((list, index) => (

                    <li key={index} className="flex gap-x-5 items-start justify-start text-base font-light font-kanit tracking-normal leading-6"><span className="text-xl mt-1"><FaCheckCircle /></span>{list}</li>
                  ))
                }


              </ul>

              <div className="w-full text-center">
                <h1 className="text-3xl font-bold font-syne text-black">Awarded Marketing Agency</h1>
                <ul className="flex flex-row justify-between items-center mt-10">
                  {
                    awardedImages.map((image, index) => (

                      <li key={index}><img src={image} alt="" className="h-auto w-28 object-cover" /></li>
                    ))
                  }
                </ul>
              </div>

            </div>
            <div id="homePageForm" className="w-full md:w-[50%] flex flex-col justify-center md:justify-start items-center md:items-end">
              <CustomForm fields={inputFields} message="Get you free audit" />

            </div>

          </div>

          <div>
            <Portfolio images={partnerImages} />
          </div>

        </div>

      </div>
     </div>

    </div>
  );
};

export default LandingPage;
