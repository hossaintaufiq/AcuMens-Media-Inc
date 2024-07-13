const AiSolutionsLoader = () => {
  return (
    <div className="w-full min-h-screen pb-10 px-8 py-20 bg-gradient-to-b from-[#efedff] to-[#ffffff]">
      <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto flex flex-col md:flex-row justify-center items-start gap-10 md:gap-80 px-8 lg:px-0 pt-16">
        <div className="w-full md:w-1/2 space-y-6">
          <div className="h-10 md:h-8 w-60 bg-gradient-to-r from-gray-300 to-black rounded-2xl overflow-hidden">
            <div className="w-full h-full bg-white animate-pulse"></div>
          </div>
          <div className=" h-[70px] w-[90%]  bg-gradient-to-r from-gray-300 to-black rounded-2xl overflow-hidden">
            <div className="w-full h-full bg-white animate-pulse"></div>
          </div>
          <div className=" h-[50px] w-[84%]  bg-gradient-to-r from-gray-300 to-black rounded-2xl overflow-hidden">
            <div className="w-full h-full bg-white animate-pulse"></div>
          </div>
          <div className=" h-[50px] w-[84%]  bg-gradient-to-r from-gray-300 to-black rounded-2xl overflow-hidden">
            <div className="w-full h-full bg-white animate-pulse"></div>
          </div>
          <div className="h-7 md:h-7 w-36 bg-gradient-to-r from-gray-300 to-black rounded-2xl overflow-hidden">
            <div className="w-full h-full bg-white animate-pulse"></div>
          </div>
        </div>
        <div className="w-full md:w-[35%] lg:justify-end justify-center">
          <div className="h-96 md:w-96 bg-gradient-to-r from-gray-300 to-black rounded-2xl overflow-hidden">
            <div className="w-full h-full bg-white animate-pulse"></div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex justify-center px-8 py-5 mb-16 lg:px-0">
        <img src="../AiSolutions/border-center.webp" className="w-full" />
      </div>
      <div className="mx-auto lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] px-8 lg:px-0 py-10 lg:pb-20">
        <div className="h-60 w-full md:w-1/2 bg-gradient-to-r from-gray-300 to-black rounded-2xl overflow-hidden">
          <div className="w-full h-full bg-white animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default AiSolutionsLoader;
