/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

function DropdownButton({ children, dropdown, classname = "", isHandBar = false, menuOpen, setMenuOpen }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <button
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                className="inline-flex justify-center w-max px-4 py-1 bg-transparent text-[14px] font-syne font-bold tracking-tighter leading-5 uppercase text-gray-700"
            >
                {children}
            </button>

            {isOpen && (
                <div
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className={`origin-top-right absolute top-6 xl:top-[20px] left-0 mt-2 ${classname} rounded-md shadow-lg bg-white bg-opacity-90 backdrop-blur-3xl ring-1 ring-black ring-opacity-5 z-50`}
                >
                    {children !== "Follow Us" && isHandBar !== true &&

                        <div className="py-1">
                            {dropdown?.map((dropdownMenu, index) => {
                                return (

                                    <Link key={index} to={dropdownMenu.router} className="flex justify-start items-center gap-4 px-4 py-2 text-sm text-gray-700 transform transition-transform duration-300 hover:scale-110"
                                        onClick={() => {
                                            setIsOpen(false);
                                            toggleMenu();
                                        }} >
                                        {dropdownMenu?.icon && <span className='text-xl text-blue-Purple'>{dropdownMenu.icon}</span>}
                                        <span className='font-syne font-bold tracking-tighter leading-5'>{dropdownMenu.content}</span>
                                    </Link>
                                )
                            })}

                        </div>
                    }

                    {children === "Follow Us" &&

                        <div className='flex flex-row justify- items-center'>
                            {dropdown?.map((dropdownMenu, index) => {
                                return (

                                    <Link key={index} to={dropdownMenu.router} className="py-1 px-4 items-center text-base text-gray-700 rounded-md font-syne font-bold tracking-tighter leading-5 cursor-pointer scale-110 hover:scale-150 transition-all duration-700 hover:text-blue-Purple"
                                        onClick={() => {
                                            setIsOpen(false);
                                            toggleMenu();
                                        }} >
                                        <img src={dropdownMenu.icon} alt={dropdownMenu.icon} className={dropdownMenu.class} loading= "lazy" />
                                    </Link>

                                )
                            })}
                        </div>

                    }
                    {isHandBar === true &&

                        <div className='px-2 py-3 space-y-2'>
                            {dropdown?.map((dropdownMenu, index) => {
                                return (
                                    <Button key={index}>
                                        <Link to={dropdown.router}>{dropdownMenu.content}</Link>
                                    </Button>
                                    //  <button key={index} className='btn bg-black text-white rounded-full btn-sm mb-2 flex justify-center items-center hover:bg-black'>
                                    //             <Link to={dropdown.router}>{dropdownMenu.content}</Link>
                                    //             <IoIosArrowRoundForward />
                                    //         </button>
                                )
                            })}
                        </div>

                    }
                </div>
            )}
        </div>
    );
}

export default DropdownButton;