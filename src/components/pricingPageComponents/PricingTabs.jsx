const PricingTabs = ({plan, setPlan}) => {
    return (
        <div className="flex mx-auto border-2 border-indigo-500 rounded-full overflow-hidden mt-6">
            <button
                className={`py-1 px-4 ${plan === 'monthly' ? 'bg-indigo-500 text-white' : ''} focus:outline-none`}
                onClick={() => setPlan('monthly')}
            >
                Monthly
            </button>
            <button
                className={`py-1 md:px-4  ${plan === 'sixMonths' ? 'bg-indigo-500 text-white' : ''} focus:outline-none`}
                onClick={() => setPlan('sixMonths')}
            >
                6 Months (30% off)
            </button>
            <button
                className={`py-1 px-4 ${plan === 'twelveMonths' ? 'bg-indigo-500 text-white' : ''} focus:outline-none`}
                onClick={() => setPlan('twelveMonths')}
            >
                12 Months (42% off)
            </button>
        </div>
    )
}

export default PricingTabs