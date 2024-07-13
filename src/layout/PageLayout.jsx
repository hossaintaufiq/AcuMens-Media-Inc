import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "../components/homePageComponents/Header";
import Footer from "../components/homePageComponents/Footer";
import { Suspense } from "react";

// importing fallback for pages 
import AboutUsLoader from "../ComponentLoader/AboutUsLoader";
import PricingLoader from "../ComponentLoader/PricingLoader";
import AiSolutionsLoader from "../ComponentLoader/AiSolutionsLoader";
import TermsAndConditionLoader from "../ComponentLoader/TermsAndConditionLoader";

function Hello() {
    return (
        <div className="h-screen text-center text-black flex justify-center items-center">
            Loading...
        </div>
    );
}
const paths = [
    "/Ai-Solutions.htm",
    "/Social-media-automation.htm",
    "/Email-Marketing.htm",
    "/E-commerce.htm",
    "/Web-Design-Hosting.htm",
    "/Google-suite.htm",
    "/Seo.htm",
    "/app-development.htm",
    "/Erp-crm-it-chatbot.htm",
    "/Content-writing.htm",
    "/CCaaS-Outsourcing-Consulting.htm"
];
const PageLayout = () => {

    const location = useLocation();

    const check = () => {
        if (location.pathname === "/contact.htm" || location.pathname === "/audit.htm") {
            return <Hello />
        }else if(paths.includes(location.pathname)){
            return <AiSolutionsLoader />
        }else if (location.pathname === "/blog.htm" || location.pathname === "/about.htm") {
            return <AboutUsLoader />;
        }else if (location.pathname === "/pricing.htm") {
            return <PricingLoader />;
        }else {
            return <TermsAndConditionLoader />;
        }
    };
    
    return (
        <>

            <Header />

            <Suspense fallback={check()}>
                <Outlet />
            </Suspense>

            <div className="w-full pb-[30px] sm:pb-0 bg-gray-200">
                <Footer />
                <div className="footer footer-center p-4 text-base-content border-t-2 border-black">
                    <aside>
                        <div className="space-x-3 font-kanit font-light leading-6 tracking-normal text-base pb-2 sm:pb-0">
                            <div className="relative inline-block rounded-full transition duration-300 ease-in-out ml-2">
                                <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                                    © 2016 - 2024{" "}
                                    <span className="uppercase">Acumens Media Inc.</span>
                                </span>
                            </div>
                            <div className="relative inline-block rounded-full transition duration-300 ease-in-out ml-2">
                                <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                                    <Link to="/terms-condition.htm">Terms & Conditions</Link>
                                </span>
                            </div>
                            <div className="relative inline-block rounded-full transition duration-300 ease-in-out">
                                <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                                    <Link to="/privacy-policy.htm">Privacy Policy</Link>
                                </span>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            <div className="fixed left-0 bottom-12 w-full  pl-4 z-50">
                <span className="inline-block w-14 h-14">
                    <Link to="https://api.whatsapp.com/send?phone=18163210322&text=Hello,%20Welcome%20to%20Acumens%20Media%20Inc.">
                        <img
                            src="WhatsApp-Icon.webp"
                            alt="WhatsApp-Icon"
                            className="w-full h-full object-fill bg-transparent"
                            loading= "lazy"
                        />
                    </Link>
                </span>
            </div>
            <div className="fixed left-0 bottom-0 w-full text-white text-center flex justify-center items-center gap-x-4 sm:hidden z-50 px-6">
                <span className="inline-block w-1/2 px-1 py-2 text-lg font-normal font-kanit bg-black rounded-[40px]">
                    <Link
                        to={{ pathname: "/", state: "homePageForm", hash: "#homePageForm" }}
                    >
                        Speak To Us
                    </Link>
                </span>
                <span className="inline-block w-1/2 px-1 py-2 text-lg font-normal font-kanit bg-black rounded-[40px]">
                    <Link to={"tel:+18009694409"}>8009694402</Link>
                </span>
            </div>
        </>
    );
};
export default PageLayout;
