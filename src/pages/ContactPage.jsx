import { Link } from "react-router-dom";
import CustomForm from "../components/homePageComponents/CustomForm";
import { inputFields } from "../constants/constant";
import Contact from "../components/aiSolutionPageComponents/Contact";
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const ContactPage = () => {
  const formRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contactForm' && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {
    if (location.hash === '#contactForm' && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="pt-12 bg-gradient-to-b from-purple-200 to-gray-100 ">
      <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
        <div className="flex flex-col px-4 py-16 md:flex-row">
          <div className=" w-full md:w-1/2 text-left p-4 space-y-6 ">
            <h6 className="text-base font-bold font-syne uppercase text-black">
              contact
            </h6>
            <h1 className="text-4xl lg:text-5xl font-bold font-syne text-black">
              We&rsquo;re here to help you grow
            </h1>
            <p className="text-base font-bold md:w-[90%] font-syne text-black">
              Feel free to reach out to us through your preferred method of
              contact. We are eager to connect with you and explore how our
              digital marketing team can contribute to your success.
            </p>
            <div className="flex flex-col md:flex-row md:justify-between justify-start items-start gap-4">
              <div className="py-2 space-y-6">
                <p className="text-base font-bold font-syne text-black">
                  Sales:
                  <br />
                  <Link to="tel:+18009694409">800-969-4409</Link>
                </p>
                <p className="text-base font-bold font-syne text-black">
                  Support:
                  <br />
                  <Link to="tel:+18009694409">888-491-5291</Link>
                </p>
              </div>
              <div className="py-2 space-y-6">
                <p className="text-base font-bold font-syne text-black">
                  Sales:
                  <br />
                  <Link to="mailto:sales@acumensinc.com">
                    sales@acumensinc.com
                  </Link>
                </p>
                <p className="text-base font-bold font-syne text-black">
                  Support:
                  <br />
                  <Link to="mailto:support@acumensinc.com">
                    support@acumensinc.com
                  </Link>
                </p>
              </div>
            </div>

            <div className="space-y-3 flex flex-col justify-center items-center text-center pt-16">
              <h5 className='text-lg lg:text-2xl font-bold font-syne text-black'>Address</h5>
              <div className="w-16 h-16 rounded-full bg-gray-300 flex justify-center items-center">
                <span className="text-2xl text-blue-Purple">
                  <img src="map.webp" alt="map.webp" className="w-7 h-7 object-contain" loading= "lazy" />
                </span>
              </div>
              <p className=" w-48 text-base lg:text-xl font-normal font-syne  text-black">440 N Barranca Ave.,
                Covina,
                CA 91723
              </p>
              <div className="relative inline-block rounded-full transition duration-300 ease-in-out">
                <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                  <Link to="https://www.google.com/maps/place/440+N+Barranca+Ave,+Covina,+CA+91723,+USA/@34.0901483,-117.8812267,17z/data=!3m1!4b1!4m6!3m5!1s0x80c32859273c7a1b:0x11c9d90ae80b6ca!8m2!3d34.0901483!4d-117.8812267!16s%2Fg%2F11sshfp7sj?entry=ttu" className="font-bold uppercase text-sm font-syne text-black">view on map</Link>
                </span>
              </div>
            </div>

          </div>

          <div className="flex justify-center md:justify-end items-start w-full md:w-1/2" ref={formRef} id="contactForm">
            <CustomForm page='contact' fields={inputFields} message="Contact Us" />
          </div>

        </div>
      </div>
      <div className="w-full px-8">
        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
          <Contact message="See how we can help your business grow with digital marketing" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;