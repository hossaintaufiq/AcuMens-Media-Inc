const PricingTabs1 = ({plan, setPlan}) => {
    return (
        <div className="flex mx-auto border-2 border-black rounded-full p-1 font-kanit font-light">
            <button
                className={`py-1 px-4 ${plan === 'monthly' ? 'bg-blue-Purple text-white' : ''} focus:outline-none rounded-full`}
                onClick={() => setPlan('monthly')}
            >
                Monthly
            </button>
            <button
                className={`py-1 px-4  ${plan === 'sixMonths' ? 'bg-blue-Purple text-white' : ''} focus:outline-none rounded-full relative`}
                onClick={() => setPlan('sixMonths')}
            >

                6 Months

                {
                    plan === 'sixMonths' ? (
                        <span className="absolute w-fit -top-10 left-0 bg-blue-Purple text-white text-base px-3 py-1 rounded-full ">(30% off)</span>
                    )   :  null
                }
                {/* <span className="absolute w-fit -top-10 left-0 bg-blue-Purple text-white font-kanit font-light text-base px-4 py-1 rounded-full ">(30% off)</span> */}
            </button>
            <button
                className={`py-1 px-4 ${plan === 'twelveMonths' ? 'bg-blue-Purple text-white' : ''} focus:outline-none rounded-full relative`}
                onClick={() => setPlan('twelveMonths')}
            >
                12 Months

                {
                    plan === 'twelveMonths' ? (
                        <span className="absolute w-fit -top-10 left-2 bg-blue-Purple text-white text-base px-3 py-1 rounded-full ">(42% off)</span>
                    )   :  null
                }

            </button>
        </div>
    )
}

export default PricingTabs1