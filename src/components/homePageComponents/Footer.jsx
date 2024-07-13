
import { Link } from "react-router-dom";

// importing Footer constants from constants folder
import { footerServiceLinks1, footerServiceLinks2, AboutUs } from "../../constants/constant";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5 text-center lg:text-left justify-items-center items-start py-5">

        {/* <div className="space-y-3 flex flex-col justify-center items-center text-center">
            <h5 className="text-lg font-bold font-syne text-black">Address</h5>
            <div className="w-16 h-16 rounded-full bg-gray-300 flex justify-center items-center">
              <span className="text-2xl ">
                <SiGooglemaps />
              </span>
            </div>
            <p className=" w-48 text-base font-normal font-syne  text-black">
              440 N Barranca Ave., Covina, CA 91723
            </p>
            <div className="relative inline-block rounded-full transition duration-300 ease-in-out">
              <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                <Link
                  to="https://www.google.com/maps/place/440+N+Barranca+Ave,+Covina,+CA+91723,+USA/@34.0901483,-117.8812267,17z/data=!3m1!4b1!4m6!3m5!1s0x80c32859273c7a1b:0x11c9d90ae80b6ca!8m2!3d34.0901483!4d-117.8812267!16s%2Fg%2F11sshfp7sj?entry=ttu"
                  className="font-bold uppercase text-sm font-syne"
                >
                  view on map
                </Link>
              </span>
            </div>
          </div> */}

        <div className="space-y-5 col-span-1 md:col-span-2">
          <h5 className="text-2xl font-bold font-syne text-black text-center">
            Services
          </h5>
          <div className="flex justify-center flex-col lg:flex-row lg:justify-between items-start gap-2 lg:gap-8">
            <div>
              <ul className="cursor-pointer flex flex-col gap-y-2">
                {footerServiceLinks1?.map((link, index) => (
                  <Link
                    key={index}
                    to={link.route}
                    className="text-lg font-kanit font-light tracking-normal leading-6"
                  >
                    <div
                      key={index}
                      className="relative inline-block rounded-full transition duration-300 ease-in-out"
                    >
                      <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                        {link.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
            <div>
              <ul className="cursor-pointer flex flex-col gap-y-2">
                {footerServiceLinks2?.map((link, index) => (
                  <Link
                    key={index}
                    to={link.route}
                    className="text-lg font-kanit font-light tracking-normal leading-6"
                  >
                    <div
                      key={index}
                      className="relative inline-block rounded-full transition duration-300 ease-in-out"
                    >
                      <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                        {link.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <h5 className="text-2xl font-bold font-syne text-black">About Us</h5>
          <ul className="cursor-pointer flex flex-col gap-y-2">
            {AboutUs?.map((link, index) => (
              <Link
                key={index}
                to={link.route}
                className="text-lg font-kanit font-light tracking-normal leading-6"
              >
                <div
                  key={index}
                  className="relative inline-block rounded-full transition duration-300 ease-in-out"
                >
                  <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                    {link.name}
                  </span>
                </div>
              </Link>
            ))}
          </ul>
        </div>

        <div className="space-y-5 col-span-1">
          <h5 className="text-2xl font-bold font-syne text-black">
            Follow Us
          </h5>
          <ul className="w-full h-full flex flex-row justify-start items-center gap-4">
            <li className="text-xl h-8 w-8 cursor-pointer hover:scale-150 transition-all duration-700 hover:text-blue-Purple">
              <Link to="https://www.linkedin.com" target="_blank">
                <img
                  src="linkedin.webp"
                  className="h-full w-full object-contain grayscale-[10] hover:grayscale-[0]"
                  alt="LinkedIn"
                  loading= "lazy"
                />
              </Link>
            </li>
            <li className="text-xl h-8 w-8 cursor-pointer hover:scale-150 transition-all duration-700 hover:text-blue-Purple">
              <Link to="https://www.facebook.com/acumensincdotcom/" target="_blank">
                <img
                  src="facebook.webp"
                  className="w-full h-full object-contain grayscale-[10] hover:grayscale-[0]"
                  alt="Facebook"
                  loading= "lazy"
                />
              </Link>
            </li>
            <li className="text-xl h-8 w-8 cursor-pointer hover:scale-150 transition-all duration-700 hover:text-blue-Purple">
              <Link to="https://www.instagram.com/acumensmediainc/" target="_blank">
                <img
                  src="instagram.webp"
                  className="w-full h-full object-contain grayscale-[10] hover:grayscale-[0]"
                  alt="Instagram"
                  loading= "lazy"
                />
              </Link>
            </li>
            <li className="text-xl h-8 w-8 cursor-pointer hover:scale-150 transition-all duration-700 hover:text-blue-Purple">
              <Link to="https://www.twitter.com" target="_blank">
                <img
                  src="twitternew.webp"
                  className="w-full h-full object-contain grayscale-[10] hover:grayscale-[0]"
                  alt="Twitter"
                  loading= "lazy"
                />
              </Link>
            </li>
            <li className="h-11 w-11 -translate-x-2 text-xl cursor-pointer hover:scale-150 transition-all duration-700 hover:text-blue-Purple">
              <Link to="https://www.youtube.com/@acumensmediainc" target="_blank">
                <img
                  src="youtubenew.webp"
                  className="w-full h-full object-contain grayscale-[10] hover:grayscale-[0]"
                  alt="YouTube"
                  loading= "lazy"
                />
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer