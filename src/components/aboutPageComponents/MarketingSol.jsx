import { Link } from "react-router-dom";

const MarketingSol = () => {
  return (
    <div className="space-y-6 lg:space-y-10">

      <div className="flex flex-col md:flex-row justify-center lg:justify-start items-start gap-6">
        <div className="w-full md:w-1/2 space-y-6 text-left">
          <h6 className="text-left uppercase text-lg font-semibold font-syne text-black">
            Marketing solutions provider
          </h6>
          <h1 className="text-left text-4xl lg:text-5xl font-bold font-syne text-black">
            We&apos;re a leader in digital marketing solutions
          </h1>
        </div>
        <div className="w-full md:w-1/2 md:py-14 md:text-lg text-left space-y-4">
          <p>After years of experience, we have learned that each marketing channel has its own unique advantages, but they work best when strategically combined with other channels. Therefore, we provide our clients with full-service strategies that utilize a comprehensive mix of digital channels to enhance visibility, boost conversions, and drive revenue.</p>

          <div className="relative inline-block rounded-full transition duration-300 ease-in-out">
            <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
              <Link to="" className="font-syne font-bold tracking-tight leading-6 text-sm">BUSINESS SOLUTIONS</Link>
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-16">

        <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-syne font-bold text-black">Our Clients</h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <img src="./jolie-1.webp" loading= "lazy" />
          <img src="./caridad.webp" loading= "lazy"/>
          <img src="./F7.webp" loading= "lazy"/>
          <img src="./Scuola_Logo_OnlyTop-1.webp" loading= "lazy" />
          <img src="./petmania.webp" loading= "lazy"/>
          <img src="./tecnologia.webp" loading= "lazy"/>
        </div>

      </div>



    </div>
  );
};

export default MarketingSol;
