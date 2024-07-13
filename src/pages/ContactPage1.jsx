import { Link } from "react-router-dom";
import CustomForm from "../components/homePageComponents/CustomForm";
import { inputFields } from "../constants/constant";
import Contact from "../components/aiSolutionPageComponents/Contact";

const ContactPage1 = () => {
  return (
    <div className="pt-12 bg-gradient-to-b from-light-purple to-gray-100">
    <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
      <div className="  flex flex-col  px-4 py-16 md:flex-row">
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
            <div className=" p-3 space-y-6">
              <p className="text-base font-bold font-syne text-black">
                Sales:
                <br />
                <Link to="#">800-969-4409</Link>
              </p>
              <p className="text-base font-bold font-syne text-black">
                Support:
                <br />
                <Link to="#">888-491-5291</Link>
              </p>
            </div>
            <div className=" p-3 space-y-6">
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
        </div>
        <div className="flex justify-center items-start w-full md:w-1/2">
          <CustomForm page='contact1' fields={inputFields} message="Contact Us" />
        </div>
      </div>
      </div>
      <div className="w-full px-8 py-10">
        <div className="lg:w-[900px] xl:w-[1140px] 2xl:w-[1400px] 3xl:w-[1600px] mx-auto">
          <Contact message="See how we can help your business grow with digital marketing" />
        </div>
      </div>
    </div>
  );
};

export default ContactPage1;