import { FaCheckCircle } from "react-icons/fa";
import CustomForm from "../components/homePageComponents/CustomForm";
import { inputFields } from "../constants/constant";
import Contact from "../components/aiSolutionPageComponents/Contact";

const AuditPage = () => {
  return (
    <>
      <div className="pt-12 bg-gradient-to-b from-light-purple to-gray-100 ">
        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
          <div className=" flex flex-col  px-4 py-16 md:flex-row">
            <div className=" w-full md:w-1/2 text-left p-4 space-y-6 ">
              <h6 className="text-base font-bold font-syne uppercase text-black">
                Free Audit
              </h6>
              <h1 className="text-4xl lg:text-5xl font-bold font-syne text-black">
                Ready to grow your revenue?
              </h1>
              <p className="text-base font-bold md:w-[90%] font-syne text-black">
                When you partner with Acumens, we take care of the heavy
                lifting, so you can enjoy more website traffic, leads, and
                revenue.
              </p>
              <hr className="h-[2px] w-full bg-white my-10 inline-block" />
              <ul className=" space-y-6 py-4">
                <li className="flex gap-x-5 items-start justify-start text-base font-light font-kanit tracking-normal leading-6">
                  <span className="text-xl mt-1 text-blue-Purple">
                    <FaCheckCircle />
                  </span>
                  Review your marketing goals: Begin by reviewing your marketing
                  goals and objectives.
                </li>
                <li className="flex gap-x-5 items-start justify-start text-base font-light font-kanit tracking-normal leading-6">
                  <span className="text-xl mt-1 text-blue-Purple">
                    <FaCheckCircle />
                  </span>
                  Evaluate your target audience to see if they have changed or
                  if you need to adjust your messaging to better reach them
                </li>
                <li className="flex gap-x-5 items-start justify-start text-base font-light font-kanit tracking-normal leading-6">
                  <span className="text-xl mt-1 text-blue-Purple">
                    <FaCheckCircle />
                  </span>
                  Analyze your website to ensure it is user-friendly,
                  mobile-responsive, and optimized for search engines.
                </li>
                <li className="flex gap-x-5 items-start justify-start text-base font-light font-kanit tracking-normal leading-6">
                  <span className="text-xl mt-1 text-blue-Purple">
                    <FaCheckCircle />
                  </span>
                  Review your content marketing efforts, including your blog
                  posts, social media, and email marketing.
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-start w-full md:w-1/2">
              <CustomForm fields={inputFields} message="Get your free audit" />
            </div>
          </div>
        </div>
        <div className="w-full px-8">
          <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
            <Contact message="See how we can help your business grow with digital marketing" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AuditPage;
