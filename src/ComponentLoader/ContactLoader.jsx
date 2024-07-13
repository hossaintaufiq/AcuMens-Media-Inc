const ContactLoader = () => {
  return (
    <div className="w-full min-h-screen pb-10 px-8 py-20 bg-gradient-to-b from-[#efedff] to-[#ffffff]">
      <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto flex flex-col md:flex-row justify-center items-start gap-10 md:gap-14 px-8 lg:px-0 pt-16">
        <div className="w-full md:w-1/2 space-y-10">
          <div className="h-10 md:h-8 w-52 bg-gradient-to-r from-gray-300 to-black rounded-2xl overflow-hidden">
            <div className="w-full h-full bg-white animate-pulse"></div>
          </div>
          <div className=" h-[80px] w-[90%]  bg-gradient-to-r from-gray-300 to-black rounded-2xl overflow-hidden">
            <div className="w-full h-full bg-white animate-pulse"></div>
          </div>
          <div className=" h-[65px] w-[84%]  bg-gradient-to-r from-gray-300 to-black rounded-2xl overflow-hidden">
            <div className="w-full h-full bg-white animate-pulse"></div>
          </div>
          <div className=" md:flex md:flex-row gap-24">
            <div className=" h-[50px] md:w-[34%] w-[44%] bg-gradient-to-r from-gray-300 to-black rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-white animate-pulse"></div>
            </div>
            <div className=" h-[50px] md:w-[34%] w-[44%] mt-10 md:mt-0 bg-gradient-to-r from-gray-300 to-black rounded-2xl overflow-hidden">
              <div className="w-full h-full bg-white animate-pulse"></div>
            </div>
          </div>
          <div className="h-7 md:h-7 w-36 bg-gradient-to-r from-gray-300 to-black rounded-2xl overflow-hidden">
            <div className="w-full h-full bg-white animate-pulse"></div>
          </div>
        </div>
        <div className="w-full md:w-[35%] lg:justify-end justify-center">
          <div className="h-[580px] md:w-[585px] bg-gradient-to-r from-gray-300 to-black rounded-2xl overflow-hidden">
            <div className="w-full h-full bg-white animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLoader;
