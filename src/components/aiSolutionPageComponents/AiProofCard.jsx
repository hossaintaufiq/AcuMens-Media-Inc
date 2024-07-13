

const AiProofCard = ({ proofs }) => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-3 gap-6 px-8 lg:px-0">
      {proofs?.map((card, index) => (
        <div key={index} className='space-y-6 border border-slate-200 rounded-[40px] px-10 py-8'>
          <div className="flex justify-between items-center">
            <div className="w-[80%]">
              <h1 className='text-left text-3xl lg:text-5xl font-bold font-syne lg:w-[63%] text-black'>{card.percentage}</h1>
            </div>
            <div className="w-[20%]">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex justify-center items-center">
              <img className=" w-8 h-8" src="growth.png" loading= "lazy"/>
              </div>
            </div>
          </div>
          <div className="text-left">
          <p className="text-base font-semibold font-kanit leading-6 tracking-normal">{card.subHeading}</p>
            <p className="text-base font-light font-kanit leading-6 tracking-normal">{card.context}</p>
          </div>

        </div>

      ))}

    </div>

  )
}

export default AiProofCard