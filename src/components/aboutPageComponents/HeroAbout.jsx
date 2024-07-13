const HeroAbout = () => {
    return (
      <>
        <div className="flex flex-col md:flex-row justify-center items-start gap-6 px-8 lg:px-0">
          <div className="w-full md:w-1/2 space-y-6 text-left">
            <h6 className="text-left uppercase text-lg font-semibold font-syne text-black">
              About Us
            </h6>
            <h1 className="text-left text-3xl lg:text-6xl font-bold font-syne text-black">
              Digital marketing solutions designed to generate revenue for your
              business
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex lg:justify-end justify-center items-center">
            <img
              src="./pexels-moe-magners-7495410.webp"
              alt="sdsds"
              className="w-[400px] h-[400px] object-cover rounded-[40px]  transition-transform duration-1000 hover:scale-95"
              loading= "lazy"
            />
          </div>
        </div>
  
      </>
    );
  };
  
  export default HeroAbout;