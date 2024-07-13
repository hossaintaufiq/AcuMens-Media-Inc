/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { toast } from 'sonner';
import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from 'react';
import { FaChevronCircleDown } from "react-icons/fa";


const CustomForm = ({ page, message }) => {
    const [phnNo, setPhnNo] = useState('')
    // const [otp, setOtp] = useState('')
    const [isOtpSent, setIsOtpSent] = useState(false)
    const [isOtpVerify, setIsOtpVerify] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    // console.log(page);
    const onSubmit = async (data) => {

        const toastId = toast.loading("Processing...")
        const userData = {
            userFirstName: data?.userFirstName,
            userLastName: data?.userLastName,
            CompanyName: data?.CompanyName,
            userEmail: data?.userEmail,
            userPhnNo: phnNo,
            message: data?.message
        }
        console.log({ userData });
        try {
            if (page === 'contact') {
                const res = await fetch('https://chat.acumensinc.com/submit', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userData)
                })
                // eslint-disable-next-line no-unused-vars
                const info = await res.json();
                // console.log(info);
                toast.success("Form submitted successfully", { id: toastId, duration: 1000 })
                reset();
            }
            else if (page === 'contact1') {
                const res = await fetch('https://chat.acumensinc.com/submitVendor1', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userData)
                })
                // eslint-disable-next-line no-unused-vars
                const info = await res.json();
                // console.log(info);
                toast.success("Form submitted successfully", { id: toastId, duration: 1000 })
                reset();
            }
            else if (page === 'contact2') {
                const res = await fetch('https://chat.acumensinc.com/submitVendor2', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userData)
                })
                // eslint-disable-next-line no-unused-vars
                const info = await res.json();
                // console.log(info);
                toast.success("Form submitted successfully", { id: toastId, duration: 1000 })
                reset();
            }
            else if (page === 'contact3') {
                const res = await fetch('https://chat.acumensinc.com/submitVendor3', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(userData)
                })
                // eslint-disable-next-line no-unused-vars
                const info = await res.json();
                // console.log(info);
                toast.success("Form submitted successfully", { id: toastId, duration: 1000 })
                reset();
            }

        } catch (error) {
            console.log(error?.message);
        }
    };

    const handleSendOtp = () => {
        const toastId = toast.loading("Processing...")

        const userFirstName = document.getElementById("userFirstName").value;
        // console.log(phnNo);
        const userData = {
            phone: phnNo,
            name: userFirstName ? userFirstName : "Jony"
        }
        if (isValidPhoneNumber(phnNo)) {
            fetch('https://verify.acumensinc.com/send-otp', {
                method: "POST",
                headers: {
                    "content-type": "application/json",

                },
                body: JSON.stringify(userData)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data?.success === true) {
                        setIsOtpSent(true)
                        toast.success("Otp sent successfully", { id: toastId, duration: 1000 })
                    }
                })
        } else {
            toast.warning("Phone number is invalid");
        }
    }
    const handleVerify = () => {
        const toastId = toast.loading("Processing...")
        const otp = document.getElementById("otp").value;
        const userData = {
            phone: phnNo,
            otp: otp
        }
        try {
            fetch('https://verify.acumensinc.com/verify-otp', {
                method: "POST",
                headers: {
                    "content-type": "application/json",

                },
                body: JSON.stringify(userData)
            })
                .then(res => res.json())
                .then(data => {

                    if (data?.success === true) {
                        setIsOtpSent(false);
                        toast.success("Otp verify successfully", { id: toastId, duration: 1000 })
                        setIsOtpVerify(true)
                    } else {
                        toast.error("Invalid otp", { id: toastId, duration: 1000 })
                    }
                })
        } catch (error) {
            toast.error(error?.message);
        }
    }

    return (
        <div className="bg-white p-8 lg:p-12 rounded-[40px] shadow-lg shadow-black w-auto xl:w-[600px] text-base font-kanit font-light leading-6 tracking-normal text-black relative mt-10">
            <img className='absolute w-12 lg:w-16 lg:h-[120px] right-[15%] lg:-top-12 -top-[5%] custom-rotation' src="/rocket.webp" alt="" loading= "lazy"/>
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="53" viewBox="0 0 54 53" className='absolute -top-7 right-[35%] custom-rotation-star'>
                <g fill="" fillRule="nonzero">
                    <path d="M27.07.77c-5.93 19.07-3.73 19.51-26.51 26 22.78 6.49 20.58 6.93 26.5 26 5.9-19.07 3.72-19.52 26.5-26-22.78-6.48-20.6-6.93-26.5-26ZM45.24 14.54c1.17-3.79.74-3.88 5.27-5.17C45.98 8.08 46.4 8 45.24 4.2c-1.18 3.8-.74 3.88-5.27 5.17 4.53 1.3 4.1 1.38 5.27 5.17ZM10.87 40.14c-1.5 1.86-1.28 2.01-4.1 1.71 2.26 1.75 1.99 1.7 1.81 4.09 1.5-1.86 1.27-2.01 4.1-1.71-2.26-1.75-2-1.7-1.81-4.09Z">
                    </path>
                </g>
            </svg>
            <h2 className="xl:text-3xl lg:text-xl  text-lg mb-8 font-syne font-bold">{message}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    type="text"
                    id="CompanyName"
                    autoComplete="on"
                    required

                    {...register("CompanyName", {
                        required: true,
                    })}
                    placeholder="Company Name"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 placeholder-black`}
                    style={{ placeholder: "black" }}
                />
                <input
                    type="text"
                    id="userFirstName"
                    autoComplete="on"
                    required

                    {...register("userFirstName", {
                        required: true,
                    })}
                    placeholder="First Name"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 placeholder-black my-5`}
                    style={{ placeholder: "black" }}
                />
                <input
                    type="text"
                    id="userLastName"
                    autoComplete="on"
                    required

                    {...register("userLastName", {
                        required: true,
                    })}
                    placeholder="Last Name"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 placeholder-black`}
                    style={{ placeholder: "black" }}
                />
                <input
                    type="email"
                    id="userEmail"
                    autoComplete="on"
                    required

                    {...register("userEmail", {
                        required: true,
                    })}
                    placeholder="Email Address"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 placeholder-black my-5`}
                    style={{ placeholder: "black" }}
                />
                <div className=''>
                    {
                        isOtpSent ? (
                            <div className="flex justify-center items-center gap-2">
                                {/* <input type='number'/> */}
                                <input
                                    type="number"
                                    required
                                    id='otp'
                                    placeholder="Enter OTP"
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 placeholder-black `}
                                    style={{ placeholder: "black" }}
                                />
                                <button onClick={handleVerify} className='btn rounded-full w-fit px-5 py-2 bg-black text-white transition-colors duration-700 hover:bg-blue-Purple  cursor-pointer text-[12px] font-bold font-syne uppercase shrink-0 flex justify-center items-center gap-1 ' type='button'  >
                                    Submit
                                    <span className="text-2xl">
                                        <IoIosArrowRoundForward />
                                    </span>
                                </button>
                            </div>

                        ) : (
                            <div className="flex justify-center items-center gap-2">
                                <label className="input input-bordered flex items-center gap-2 focus:outline-none focus:border-blue-500 w-full text-black">

                                    <PhoneInput
                                        type="text"
                                        name="userPhnNo"
                                        id="userPhnNo"
                                        required
                                        value={phnNo}
                                        onChange={setPhnNo}
                                        defaultCountry="US"
                                        placeholder="Phone Number"
                                        className="w-full   focus:outline-none focus:border-blue-500 placeholder-black text-black"
                                        style={{ placeholder: "black" }}
                                    />
                                    {
                                        isOtpVerify &&
                                        <span className="badge badge-info p-3 gap-1 bg-green-400 text-white">
                                            <FaChevronCircleDown />
                                            Verified</span>

                                    }
                                </label>


                                <button onClick={handleSendOtp} className={`btn rounded-full w-fit px-1 py-1 md:px-4 md:py-1 bg-black text-white transition-colors duration-700 hover:bg-blue-Purple  cursor-pointer text-[12px] font-bold font-syne uppercase shrink-0 flex justify-center items-center gap-1 ${phnNo ?
                                    "cursor-pointer" : "cursor-not-allowed"}`} type='button' disabled={!phnNo} >
                                    <span className='hidden md:block'>Verify</span>
                                    <span className="text-2xl">
                                        <IoIosArrowRoundForward />
                                    </span>
                                </button>
                            </div>
                        )
                    }

                </div>

                <textarea

                    type="text"
                    id="message"
                    autoComplete="on"
                    required
                    {...register("message", {

                    })}
                    placeholder="What can we help you with?"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 placeholder-black textarea textarea-bordered mt-5"
                />




                {/* <p className='text-red-600 mt-2 text-md font-normal italic'>{errors[field.name]?.message}</p> */}

                <div className='flex justify-start items-start'>
                    <input
                        type="checkbox"
                        checked
                        id="terms"
                        {...register("terms", {
                            required: {
                                value: true,
                                message: "Check the box"
                            }
                        })}

                        className="mr-3 mt-1"
                    />
                    <label className="block text-black font-light text-[13px]">
                        I , Agree to the Terms & Conditions and the Privacy policy of Acumens media inc.
                    </label>


                </div>
                <div className='flex justify-start items-start'>
                    <input
                        type="checkbox"
                        checked
                        id="terms"
                        {...register("terms", {
                            required: {
                                value: true,
                                message: "Check the box"
                            }
                        })}

                        className="mr-3 mt-1"
                    />
                    <label className="block text-black font-light text-[13px]">
                        Yes, I would like to receive promotional emails & newsletters
                    </label>


                </div>



                <button
                    className={`btn rounded-full mt-6 w-fit px-5 py-2 transition-colors duration-700  text-[12px] font-bold font-syne uppercase shrink-0 flex justify-center items-center gap-1 bg-black text-white hover:bg-blue-Purple ${isOtpVerify
                        ? 'bg-black text-white hover:bg-blue-Purple'
                        : 'bg-black text-white hover:bg-blue-Purple cursor-not-allowed tooltip tooltip-bottom'
                        }`}
                    type="submit"
                    // disabled={!isOtpVerify}
                    data-tip="Verify phone number"
                >
                    Submit
                    <span className="text-2xl">
                        <IoIosArrowRoundForward />
                    </span>
                </button>
            </form>
        </div>


    );
};

export default CustomForm;