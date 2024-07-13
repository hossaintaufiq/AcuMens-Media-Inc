import { useContext } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { useForm } from 'react-hook-form';
import { MyContext } from '../../context api/MyProvider';


const HomePageModal = () => {

    const { isModalOpen, setIsModalOpen } = useContext(MyContext);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const toggleModal = () => {
        setIsModalOpen((prevValue) => !prevValue);
    }

    const onSubmit = (data) => {
        console.log("data is fetched : ", data);
        reset();
    };

    return (
        <>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0" style={{ backgroundColor: "rgba(14, 14, 14, 0.4)" }}></div>
                    <div className="relative bg-white rounded-md shadow-2xl shadow-white p-4 space-y-2">

                        {/* Close Button */}

                        <div className="absolute right-4 text-black">
                            <button className="text-xl w-8 h-8 rounded-full bg-white p-1 z-50" onClick={toggleModal}><RxCross1 /></button>
                        </div>

                        {/* Popup content */}
                        <div className="w-[320px] h-[450px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[640px] overflow-auto">
                            
                            <h1 className="text-2xl text-center font-bold font-syne text-black">Speak To Us</h1>

                            <div className='py-10 px-8'>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className='w-[100%] mb-8 space-y-6'>
                                        <input
                                            type="text"
                                            id='firstName'
                                            {...register("firstName", {
                                                required: "First Name is Required", maxLength: {
                                                    value: 30,
                                                    message: 'you can\'t exceed 30 characters'
                                                },
                                                minLength: {
                                                    value: 3,
                                                    message: 'character should be between 3 to 30 characters'
                                                }
                                            })}
                                            placeholder="First Name"
                                            className={`w-full px-4 py-2 border-b-2 border-red-500 focus:outline-none focus:border-blue-500`}
                                        />
                                        {errors["firstName"]?.message && <p className='text-red-600 mt-2 text-md font-normal italic'>{errors["firstName"]?.message}</p>}
                                    </div>

                                    <div className='mb-8 space-y-6'>
                                        <input
                                            type="text"
                                            id='lastName'
                                            {...register("lastName", {
                                                required: "Last Name is Required", maxLength: {
                                                    value: 30,
                                                    message: 'you can\'t exceed 30 characters'
                                                },
                                                minLength: {
                                                    value: 3,
                                                    message: 'character should be between 3 to 30 characters'
                                                }
                                            })}
                                            placeholder="Last Name"
                                            className={`w-full px-4 py-2 border-b-2 border-red-500 focus:outline-none focus:border-blue-500`}
                                        />
                                        {errors["lastName"]?.message && <p className='text-red-600 mt-2 text-md font-normal italic'>{errors["lastName"]?.message}</p>}
                                    </div >

                                    <div className='mb-8 space-y-6'>

                                        <input
                                            type="text"
                                            id='companyName'
                                            {...register("companyName", {
                                                required: "Company Name is Required", maxLength: {
                                                    value: 30,
                                                    message: 'you can\'t exceed 30 characters'
                                                },
                                                minLength: {
                                                    value: 3,
                                                    message: 'character should be between 3 to 30 characters'
                                                }
                                            })}
                                            placeholder="Company Name"
                                            className={`w-full px-4 py-2 border-b-2 border-red-500 focus:outline-none focus:border-blue-500`}
                                        />
                                        {errors["companyName"]?.message && <p className='text-red-600 mt-2 text-md font-normal italic'>{errors["companyName"]?.message}</p>}

                                    </div>

                                    <div className='mb-8 space-y-6'>

                                        <input
                                            type="text"
                                            id='email'
                                            {...register("email", {
                                                pattern: {
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/,
                                                    message: 'Invalid email address',
                                                }, required: {
                                                    value: true,
                                                    message: 'Email is Required',
                                                }
                                            })}
                                            placeholder="Email"
                                            className={`w-full px-4 py-2 border-b-2 border-red-500 focus:outline-none focus:border-blue-500`}
                                        />
                                        {errors["email"]?.message && <p className='text-red-600 mt-2 text-md font-normal italic'>{errors["email"]?.message}</p>}

                                    </div>

                                    <div className='mb-8 space-y-6'>

                                        <input
                                            type="text"
                                            id='phoneNumber'
                                            {...register("phoneNumber", {
                                                pattern: {
                                                    value: /^\+?(1|91)?[-.\s]?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$|^\+?(91)?[-.\s]?[6-9]\d{9}$/,
                                                    message: 'Invalid Number',
                                                }, required: {
                                                    value: true,
                                                    message: "Phone Number is Required",
                                                }
                                            })}
                                            placeholder="Phone Number"
                                            className={`w-full px-4 py-2 border-b-2 border-red-500 focus:outline-none focus:border-blue-500`}
                                        />
                                        {errors["phoneNumber"]?.message && <p className='text-red-600 mt-2 text-md font-normal italic'>{errors["phoneNumber"]?.message}</p>}

                                    </div>


                                    <div className='flex justify-center items-center'>
                                        <input type="submit" className='cursor-pointer px-4 py-2 text-white font-bold font-syne leading-6 bg-blue-Purple rounded-full shadow-lg shadow-blue-Purple' value="Send Enquiry" />
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default HomePageModal