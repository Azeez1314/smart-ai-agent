import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
 <section className="relative w-full h-[80vh] overflow-hidden bg-black">
  {/* Background image */}
  <div className="absolute inset-0 flex items-center justify-center">
  <Image
    src="/images/kabah.png"
    alt="Hero Banner"
    fill
    className="object-cover scale-110" // contain + scale keeps it centered & zoomed out
    style={{ transition: 'transform 0.5s ease-in-out' }}
  />
  </div>

  {/* Overlay (darken the image slightly) */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-9xl md:text-7xl font-extrabold text-white leading-tight">
          Educating & Empowering the Ummah
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl">
          Build, learn, and grow with our modern web solutions.
        </p>
  </div> 
 </section>
 <div className="grid grid-cols-3 gap-0">
 <div className="relative w-full h-60 overflow-hidden bg-red-800">
<div className="relative flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
        Our Mission
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl">
        Our Goal, Vision & Commitment
      </p>
</div>
 </div>
 <div className="relative w-full h-60 overflow-hidden bg-blue-500">
<div className="relative flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
        Our Events
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl">
        Register & Help Make Change
      </p>
</div>
 </div>
 <div className="relative w-full h-60 overflow-hidden bg-sky-700">
<div className="relative flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
        Get Involved
      </h1>
      <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-2xl">
        Volunteer, Participate, or Donate
      </p>
</div>
 </div>
 </div>
    </>
  )
}

export default Hero