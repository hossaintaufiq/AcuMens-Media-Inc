import Carousel from "./Carousel";
import Button from "./Button";
import { Link } from "react-router-dom";
import { TypeAnimation } from "./TypeAnimation";
const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between min-h-max px-8 lg:px-0 py-5 pt-24 md:pt-20 gap-10 text-white">
            <div className="text-left md:w-3/5 flex flex-col justify-start items-start gap-y-10 lg:gap-y-20">
                <div className="lg:h-[125px] h-[150px]">
                    <TypeAnimation />
                </div>
                <p className="lg:text-xl text-base lg:mt-5 font-kanit font-light mb-6 lg:w-[80%] tracking-normal leading-6">
                    {" "}
                    <span className="inline-block mb-5">
                        Ready for a paradigm shift in your business&rsquo;s online marketing
                        & promotions?
                    </span>{" "}
                    <br />{" "}
                    <span>
                        At Acumens, we&rsquo;re redefining the landscape with AI-driven
                        strategies that are propelling businesses to new heights. Contact us
                        today to Elevate your Business with AI-POWERED Youtube, Social Media
                        & Search Engine Marketing.
                    </span>
                </p>
                <Button>
                    <Link to="/audit.htm">Get Started</Link>
                </Button>
            </div>
            <div className="flex justify-center">
                <div className={`md:w-2/5 mt-8 md:mt-0 flex justify-center `}>
                    <Carousel />
                </div>
            </div>
        </div>
    );
};
export default Hero;