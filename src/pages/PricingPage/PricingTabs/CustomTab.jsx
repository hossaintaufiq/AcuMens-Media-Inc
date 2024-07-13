import AiSolutionFaqs from "../../../components/aiSolutionPageComponents/AiSolutionFaqs";
import Contact from "../../../components/aiSolutionPageComponents/Contact";
import CustomPlan from "../../../components/pricingPageComponents/CustomPlan";
import { socialMediaPlanFaqs } from "../../../constants/pricingPageConstant";

const CustomTab = () => {

    return (

        <div className="min-h-screen pt-10">

            <h1 className="md:text-4xl text-3xl font-bold font-syne text-gray-900 text-center px-8 lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
                Need Something more?
                We can provide Custom Built Apps, Chatbots, Plans or Tailored Services
                based on your business needs</h1>

            <div className="py-10 flex justify-center items-center">
                <CustomPlan />
            </div>

            <div className="w-full py-10">
                <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto space-y-6">
                    <h6 className='text-center uppercase text-lg font-semibold font-syne text-black px-8'>{socialMediaPlanFaqs.title}</h6>
                    <div className='flex flex-col justify-center items-center space-y-6 px-8'>
                        <h1 className='text-center text-3xl lg:text-5xl font-bold font-syne lg:w-[80%] text-black'>{socialMediaPlanFaqs.heading}</h1>
                        <p className='text-center text-base font-kanit font-light tracking-normal leading-6 text-black mb-5 lg:w-[63%]'>{socialMediaPlanFaqs.subTitle}</p>
                    </div>
                    <div className="pt-10">
                        <AiSolutionFaqs faqs={socialMediaPlanFaqs} />
                    </div>
                </div>
            </div>

            <div className='lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto pt-10'>
                <Contact message={"Want to know how else can we help your business?"} />
            </div>

        </div>
    );
};

export default CustomTab;
