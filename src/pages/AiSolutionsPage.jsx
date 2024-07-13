import Branding from "../components/aiSolutionPageComponents/Branding";
import Contact from "../components/aiSolutionPageComponents/Contact";
import DetailsCard from "../components/aiSolutionPageComponents/DetailsCard";
import Hero from "../components/aiSolutionPageComponents/Hero";
import ResultsCard from "../components/aiSolutionPageComponents/ResultsCard";
import StrategyCard from "../components/aiSolutionPageComponents/StrategyCard";
import Button from "../components/homePageComponents/Button";
import { aiSolutionHero } from "../constants/aiConstant";
import { Link } from "react-router-dom";

const AiSolutionsPage = () => {
  return (
    <div className=" pt-12">
      <div className="bg-gradient-to-b from-[#eeebff] to-[#f8fafa]">

        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
          <Hero hero={aiSolutionHero} />
        </div>
        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto space-y-10 py-10">
          <h1 className="text-3xl lg:text-5xl font-bold text-center font-syne lg: text-black ">
            We lead with Client-first strategies:
          </h1>
          <p className="text-base text-center font-sans text-black px-8 lg:px-0">
            Driving growth through personalized experiences for truly end-to-end
            business building.
          </p>
          <DetailsCard />
        </div>

      </div>

      <div className="bg-gradient-to-b from-[#f8fafa] to-[#fff]">

        <div className="hidden md:flex justify-center py-10 lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
          <img className="w-full" src="../AiSolutions/border-center.webp" loading= "lazy" />
        </div>

        <div className="py-10 lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
          <StrategyCard />
        </div>

      </div>


      <div className=" lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto px-8 lg:px-0">
        <ResultsCard />
      </div>

      <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto px-8 lg:px-0">
        <Branding />
      </div>

      <div className="hidden md:flex justify-center py-10 lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
        <img className="w-full" src="../AiSolutions/border-center.webp" loading= "lazy" />
      </div>

      <div className="py-10 px-8 lg:px-0">
        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mb-10 mx-auto space-y-6 bg-gray-100 py-10 rounded-[40px] relative">
          <img className='absolute w-12 lg:w-16 right-1/4 -top-8 lg:-top-12 custom-rotation' src="/rocket.webp" alt="" loading= "lazy"/>
          <div className="flex justify-center items-center">
            <img
              src="../AiSolutions/google-logo.webp"
              alt="Google partner"
              className="object-cover"
              loading= "lazy"
            />
          </div>
          <div className="flex flex-col justify-center items-center space-y-6 px-8">
            <h1 className="text-center text-3xl lg:text-5xl font-bold font-syne lg:w-[63%] text-black">
              Get started with a Free consultation
            </h1>
            <Button><Link to="/audit.htm">GET A PROPOSAL</Link></Button>
          </div>
        </div>
      </div>

      <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
        <Contact message="See how we can help your business grow" />
      </div>

    </div>
  );
};

export default AiSolutionsPage;
