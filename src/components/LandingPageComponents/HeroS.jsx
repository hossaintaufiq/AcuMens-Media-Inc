import { FaCircleCheck } from "react-icons/fa6";
import Button from "../homePageComponents/Button";
const HeroS = ({ borderColor, buttonBg, listColor, bgColor }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-center items-start gap-4">
        <div className="w-full ">
          <img
            src="GettyImages-1437209359.webp"
            alt="sdsds"
            className="w-full h-[300px]  object-cover rounded-[40px]"
            loading= "lazy"
          />
        </div>
        <div className="w-full  space-y-4 text-left p-4">
          <h1 className="text-left text-xl  font-bold font-syne">
            Everything You Need to Create a Website
          </h1>
          <h6 className="text-left uppercase text-lg font-semibold font-syne">
            Up to 83% off Hosting + Website Builder
          </h6>
          <ul className="text-left list-disc text-lg font-kanit font-normal tracking-normal leading-6 mb-5 space-y-4">
            <li className="flex flex-row gap-x-3 justify-start items-center">
              <span className={`${listColor} text-xl`}>
                <FaCircleCheck />
              </span>
              <span>Free Domain</span>
            </li>
            <li className="flex flex-row gap-x-3 justify-start items-center">
              <span className={`${listColor} text-xl`}>
                <FaCircleCheck />
              </span>
              <span>Free Website Migration</span>
            </li>
            <li className="flex flex-row gap-x-3 justify-start items-center">
              <span className={`${listColor} text-xl`}>
                <FaCircleCheck />
              </span>
              <span>24/7 Customer Support</span>
            </li>
          </ul>
          <p className="text-left text-lg font-kanit font-normal tracking-normal leading-6">
            ₹<span className="text-4xl">69.00</span>/mo + 3 Months Free
          </p>
          <Button className={`${buttonBg}`}>Start Now</Button>
        </div>
        <div className="flex justify-center items-center gap-2 w-full pb-4">
          <div
            className={`w-[40%] ${bgColor} border h-[0.2rem]  ${borderColor}`}
          ></div>
          <h1 className="text-3xl font-syne font-bold leading-6 tracking-normal">
            v<span className="text-xl">/</span>s
          </h1>
          <div
            className={`w-[40%] ${bgColor} border h-[0.2rem]  ${borderColor}`}
          ></div>
        </div>
        <div className="w-full ">
          <img
            src="GettyImages-1437209359.webp"
            alt="sdsds"
            className="w-full h-[300px]  object-cover rounded-[40px]"
            loading= "lazy"
          />
        </div>
        <div className="w-full  space-y-4 text-left  p-4">
          <h6 className="text-xl  font-bold font-syne">
            Everything You Need to Create a Website
          </h6>
          <h6 className="uppercase text-lg font-semibold font-syne">
            Up to 83% off Hosting + Website Builder
          </h6>
          <ul className="text-left  list-disc text-lg font-kanit font-normal tracking-normal leading-6 mb-5 space-y-4">
            <li className="flex flex-row gap-x-3 justify-start  items-center">
              <span className={`${listColor} text-xl`}>
                <FaCircleCheck />
              </span>
              <span>Free Domain</span>
            </li>
            <li className="flex flex-row gap-x-3 justify-start  items-center">
              <span className={`${listColor} text-xl`}>
                <FaCircleCheck />
              </span>
              <span>Free Website Migration</span>
            </li>
            <li className="flex flex-row gap-x-3 justify-start  items-center">
              <span className={`${listColor} text-xl`}>
                <FaCircleCheck />
              </span>
              <span>24/7 Customer Support</span>
            </li>
          </ul>
          <p className="text-left  text-lg font-kanit font-normal tracking-normal leading-6 mb-5">
            ₹<span className="text-4xl">69.00</span>/mo + 3 Months Free
          </p>
          <Button className={`${buttonBg}`}>Start Now</Button>
        </div>
      </div>
    </div>
  );
};
export default HeroS;