import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import acumensLogo from "../../assets/acumens-logoo_new2.webp";
import acumensStyleLogo from "../../assets/acumenslogo2.webp";
import DropdownButton from "./DropdownButton";
import Button from "./Button";
import { FaBars } from "react-icons/fa";

// importing dropdown constant from constant folder
import {
  AiSolutionsDropdown,
  WhoWeAreDropdown,
  FollowUs,
  AiSolutionsDropdownMobile,
  LetsTalk
} from "../../constants/constant";

const buttonTabs = ["Login", "Sign Up", "Lets Talk"];

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(10);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {   // if scroll down hide the navbar
        setShow(false);
      } else if (window.scrollY === 0) {
        setShow(true);
      } else {                              // if scroll up show the navbar
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <header className={`bg-white bg-opacity-50 backdrop-blur-md shadow-lg px-4 py-2 text-black fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'} `}>
        {/* Desktop View */}
        <div className="hidden xl:flex flex-1 justify-between items-center gap-x-6 container mx-auto">
          {/* Logo */}
          <Link to='/'>
            <div className="flex items-center shrink-0">
              <img
                src={acumensStyleLogo}
                alt="Acumens Logo"
                className="w-8 h-8 xl:h-10 xl:w-10 mr-2"
                loading= "lazy"
              />
              <img src={acumensLogo} alt="Acumens Logo" className="h-8 xl:h-10" />
            </div>
          </Link>
          {/* Dropdown Menu */}
          <div>
            <ul className="flex flex-row gap-x-2">
              <Link to="/" className="cursor-pointer px-4 py-1 bg-transparent text-sm font-medium text-gray-700 ">
                <button className="relative inline-block text-gray-700 rounded-full transition duration-300 ease-in-out text-[14px] font-syne font-bold leading-5 uppercase tracking-tighter">
                  <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5  before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                    Home
                  </span>
                </button>
              </Link>
              <li className="cursor-pointer">
                <DropdownButton dropdown={AiSolutionsDropdown} classname="w-72" menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
                  <Link to='/Ai-Solutions.htm'>Ai Solutions</Link>
                </DropdownButton>
              </li>
              <Link to="/pricing.htm" className="cursor-pointer px-4 py-1 bg-transparent text-sm font-medium text-gray-700 ">
                <button className="relative inline-block text-gray-700 rounded-full transition duration-300 ease-in-out text-[14px] font-syne font-bold leading-5 uppercase tracking-tighter">
                  <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5 before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                    Pricing
                  </span>
                </button>
              </Link>
              <li className="cursor-pointer">
                <DropdownButton dropdown={WhoWeAreDropdown} classname="w-36" menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
                  Who We Are
                </DropdownButton>
              </li>
              <li className="cursor-pointer">
                <DropdownButton dropdown={FollowUs} classname="w-72" menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
                  Follow Us
                </DropdownButton>
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex flex-row justify-center items-center gap-4">

            <Link to={'/contact.htm'} className="cursor-pointer px-4 py-1 bg-transparent text-sm font-medium text-gray-700 ">
              <p className="text-[12px] font-syne font-bold tracking-tighter leading-5 uppercase">
                Support
              </p>
              <p className="relative inline-block text-gray-700 rounded-full transition duration-300 ease-in-out text-[14px] font-Kanit font-bold leading-5 uppercase tracking-tighter">
                <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5 before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">

                  8884915291

                </span>
              </p>
            </Link>

            <Link to={"tel:+18009694409"} className="cursor-pointer px-4 py-1 bg-transparent text-sm font-medium text-gray-700 ">
              <p className="text-[12px] font-syne font-bold tracking-tighter leading-5 uppercase">
                Sales
              </p>
              <p className="relative inline-block text-gray-700 rounded-full transition duration-300 ease-in-out text-[14px] font-Kanit font-bold leading-5 uppercase tracking-tighter">
                <span className="relative overflow-hidden before:content-[''] before:absolute bottom-0.5 before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:hover:bg-blue-Purple before:transition-width before:duration-500 before:ease-in-out hover:before:w-full">
                  8009694409
                </span>
              </p>
            </Link>

            <div>
              <DropdownButton isHandBar={true} dropdown={LetsTalk} classname="w-40" menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
                <FaBars className="w-20 h-6" />
              </DropdownButton>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile view */}
      <header className={`bg-white bg-opacity-50 backdrop-blur-md shadow-lg p-4 flex justify-between items-center xl:hidden -mt-8 fixed top-8 left-0 w-full z-50 transition-transform duration-300`}>
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center" onClick={toggleMenu}>
            <img
              src={acumensStyleLogo}
              alt="Acumens Logo"
              className="h-10 w-10 mr-2"
              loading= "lazy"
            />
            <img src={acumensLogo} alt="Acumens Logo" className="h-10" loading= "lazy"/>
          </div>
        </Link>

        {/* Mobile menu */}
        <div
          className={`absolute top-[72px] left-0 right-0 bg-white bg-opacity-100 backdrop-blur-md shadow-lg text-white text-lg font-semibold p-4 transition-opacity duration-700 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
          <ul className="flex flex-col space-y-5">
            <Link to="/" className=" cursor-pointer px-4 py-2 rounded-md text-sm font-medium text-gray-700 w-fit">
              <span className="text-[12px] font-syne font-bold tracking-tighter leading-5 uppercase" onClick={toggleMenu} >
                Home
              </span>
            </Link>
            <li className=" cursor-pointer">
              <DropdownButton dropdown={AiSolutionsDropdownMobile} classname="w-72" menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
                Ai Solutions
              </DropdownButton>
            </li>
            <li className=" cursor-pointer px-4 py-2 rounded-md text-sm font-medium text-gray-700 w-fit">
              <Link
                to="/pricing.htm"
                className="text-[12px] font-syne font-bold tracking-tighter leading-5 uppercase"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
            </li>

            <li className="cursor-pointer">
              <DropdownButton dropdown={WhoWeAreDropdown} classname="w-36" menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
                Who We Are
              </DropdownButton>
            </li>

            <li className=" cursor-pointer px-4 py-2 rounded-md text-sm font-medium text-gray-700 w-fit">
              <Link
                to="/contact.htm"
                className="text-[12px] font-syne font-bold tracking-tighter leading-5 uppercase"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
            {buttonTabs.map((button, index) => {
              return (
                <Button key={index}>
                  <Link to="#" onClick={toggleMenu}>
                    {button}
                  </Link>
                </Button>
              );
            })}
          </ul>
        </div>

        {/* Mobile menu icon */}
        <div className="flex flex-row justify-center items-center gap-6">
          <div className="hidden sm:block">
            <Link
              to=""
              className="underline underline-offset-8 decoration-2 decoration-black font-normal uppercase text-[14px] md:text-base font-kanit"
            >
              speak to us
            </Link>
          </div>
          <div className="hidden sm:flex flex-col justify-center items-center gap-y-3 ">
            <Link
              to=""
              className="underline underline-offset-8 decoration-2 decoration-black font-normal uppercase text-[8px] md:text-[10px] font-kanit"
            >
              8884915291
            </Link>
            <Link
              to=""
              className="underline underline-offset-8 decoration-2 decoration-black font-normal uppercase text-[8px] md:text-[10px] font-kanit"
            >
              8009694409
            </Link>
          </div>
          <div>
            <button className="text-black" onClick={toggleMenu}>
              {menuOpen ? (
                <span className={`text-3xl`}>
                  <RxCross1 />
                </span>
              ) : (
                <span className={`text-3xl`}>
                  <RxHamburgerMenu />
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;