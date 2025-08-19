'use client';
import React, { useState } from 'react'

const page = () => {
  const [cat, setcat] = useState(["Furnitures", "Table", "Lamp", "Sofa", "Chair", "Balcony Garden", "Dining Room", "Living Room"])
  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 mb-10 overflow-hidden'>
      <div className="w-full md:h-[200px] h-[80px]  relative flex items-center justify-center">
        <h3 className='font-bold md:text-3xl text-xl z-10'>Shop</h3>
        <img src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/658d60ae326525fa7fa7c493_Section%20(1).webp" alt="bg-img" className='absolute top-0 left-0 w-full h-full' />
      </div>
      {/* content */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 container m-auto relative">

        <div className="shadow lg:flex flex-col items-start justify-start gap-5 flex-1 p-5 rounded-xl hidden bg-white">
          <h3 className='font-bold md:text-2xl text-lg border-b border-[#cda274]'>Categories</h3>
          <ul className='w-full flex flex-col items-center text-xl gap-4'>
            {
              cat?.map((item, index) => (
                <li key={index} className='flex items-center justify-between w-full py-3 text-[16px] font-[100] px-5 light_clr border-b border-[#ecebeb] hover:border-[#cda274] transition duration-300 ease-in-out cursor-pointer'>
                  {item}
                  <img src="/svg/arrow.svg" alt="arrow" className='w-[25px]' />
                </li>
              ))
            }
          </ul>
        </div>

        <div className="w-full flex flex-col items-center justify-center lg:hidden gap-5 relative">
          <h3 className="font-bold md:text-2xl text-lg text-center">Categories</h3>

          {/* Scrollable list */}
          <div className="relative w-full max-w-[90%] px-4">
            <ul className="flex items-center gap-4 overflow-x-auto scrollbar_hide">
              {cat?.map((item, index) => (
                <li
                  key={index}
                  className="flex-shrink-0 min-w-[100px] text-center py-2 px-6 text-[12px] text-[#515151] font-[400] rounded-md light_clr border border-[#b0b0b0] cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Left fade shadow */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent"></div>
            {/* Right fade shadow */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent"></div>
          </div>
        </div>



        <div className="flex-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full place-items-center">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-start justify-start gap-1 p-0 max-w-full md:w-[250px] md:h-[400px] h-[400px] w-[200px]"
              >
                {/* Card */}
                <div className="bg-[#fafafa] rounded-xl w-full h-full relative overflow-hidden group cart hover:shadow cursor-pointer flex items-center justify-center p-4">
                  <img
                    src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a0398/658ebbd3bddb427e12a5ff2e_pro-12-600x744.jpg.png"
                    alt="pro-1"
                    className="w-full h-full object-contain"
                  />
                  <div className="text-white bg-[#cda274] font-bold text-[11px] absolute top-3 left-3 py-1 px-2 rounded-xs">Sale</div>
                  {/* Add to cart button */}
                  <button className="hidden lg:block text-[#cda274] font-bold rounded-sm text-[14px] absolute bottom-0 border border-[#cda274] hover:bg-[#cda274] hover:text-white py-2 w-[80%] left-1/2 -translate-x-1/2 translate-y-full group-hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer">
                    Add To Cart
                  </button>
                  <button className="block lg:hidden font-bold text-[10px] absolute bottom-5 rounded-sm bg-[#cda274] text-white py-2 w-[80%] left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out cursor-pointer">
                    Add To Cart
                  </button>
                </div>

                {/* Info */}
                <p className="font-medium text-md light_clr">sofa</p>
                <h4 className="font-bold text-xl">Nook Occasional Chair</h4>
                <p className="font-light text-md light_clr">
                  Easy to use with bluetooth connection
                </p>
                <p className="font-bold text-md text-[#cda274]">$ 95.00 USD</p>
              </div>
            ))}
             {Array(5)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-start justify-start gap-1 p-0 max-w-full md:w-[250px] md:h-[400px] h-[400px] w-[200px]"
              >
                {/* Card */}
                <div className="bg-[#fafafa] rounded-xl w-full relative overflow-hidden group cart hover:shadow cursor-pointer flex items-center justify-center p-4">
                  <img
                    src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a0398/658eb68d3d98b9ecd515f407_526%201-6.png"
                    alt="pro-1"
                    className="w-full h-full object-contain"
                  />
                  <div className="text-white bg-[#cda274] font-bold text-[11px] absolute top-3 left-3 py-1 px-2 rounded-xs">Sale</div>
                  {/* Add to cart button */}
                  <button className="hidden lg:block text-[#cda274] font-bold rounded-sm text-[14px] absolute bottom-0 border border-[#cda274] hover:bg-[#cda274] hover:text-white py-2 w-[80%] left-1/2 -translate-x-1/2 translate-y-full group-hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer">
                    Add To Cart
                  </button>
                  <button className="block lg:hidden font-bold text-[10px] absolute bottom-5 rounded-sm bg-[#cda274] text-white py-2 w-[80%] left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out cursor-pointer">
                    Add To Cart
                  </button>
                </div>

                {/* Info */}
                <p className="font-medium text-md light_clr">sofa</p>
                <h4 className="font-bold text-xl">Nook Occasional Chair</h4>
                <p className="font-light text-md light_clr">
                  Easy to use with bluetooth connection
                </p>
                <p className="font-bold text-md text-[#cda274]">$ 95.00 USD</p>
              </div>
            ))}
        </div>

      </div>
    </div>
  )
}

export default page