// import React from 'react'


const Content = () => {
  return (
    <div className=''>
      <h1 className='font-extrabold text-black text-left'>CONTACT</h1>
      <br />
      <div>
        <p className='font-bold text-left text-black text-3xl md:text-6xl'>We’re here to help you grow</p>
      </div>
      <div>
        <p className='font-bold mt-5 md:mt-10 text-left text-black text-md md:text-lg'>Feel free to reach out to us through your preferred method of contact. We are eager to connect with you and explore how our digital marketing team can contribute to your success.</p>
      </div>
      <div>
        <div>
          <p className='font-bold mt-10 text-left text-slate-700 text-md'>
            Sales:
          </p>
          <p className='font-bold mt-3 text-left text-black text-lg'>
            800-969-4409
            <span className="ml-5 md:ml-10">
              <a href="mailto:sales@acumensinc.com" className="text-black inline-block relative group">
                sales@acumensinc.com
                <span className="underline-animation absolute left-0 bottom-0 w-full h-1 bg-purple-300"></span>
              </a>
            </span>
          </p>
        </div>
        <div>
          <p className='font-bold mt-10 text-left text-slate-700 text-md'>
            Support:
          </p>
          <p className='font-bold mt-3 text-left text-black text-lg'>
            888-491-5291
            <span className="ml-5 md:ml-10">
              <a href="mailto:support@acumensinc.com" className="text-black inline-block relative group">
                support@acumensinc.com
                <span className="underline-animation absolute left-0 bottom-0 w-full h-1 bg-purple-300"></span>
              </a>
            </span>
          </p>
        </div>
      </div>
      <p className='font-bold mt-10 md:mt-14 text-left text-black text-lg relative'>
        <i className=" fa-solid fa-map-location-dot mr-3 "></i>
        Acumens Media Inc. <br />
        440 N Barranca Ave.,<br />
        Covina, CA 91723.
        <span className="relative left-15 md:left-24 mt-2">
          <span className='font-bold text-sm text-black relative'>
            <a href="https://www.google.com/maps/place/440+N+Barranca+Ave/@34.0901483,-117.8812267,17z/data=!4m7!3m6!1s0x80c32859273c7a1b:0x11c9d90ae80b6ca!4b1!8m2!3d34.0901483!4d-117.8812267!16s%2Fg%2F11sshfp7sj?entry=ttu" className="text-black inline-block relative group">
              VIEW ON MAP
              <span className="underline-animation absolute left-0 bottom-0 w-full h-1 bg-purple-300"></span>
            </a>
          </span>
        </span>
      </p>
    </div>
  )
}

export default Content
