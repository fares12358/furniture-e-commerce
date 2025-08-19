import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-fit mt-auto mb-0 overflow-hidden'>
      <div className="w-full shadow">
        <div className="w-full grid md:grid-cols-4 grid-cols-1 text-center md:text-start gap-8 p-5 container m-auto">
          <div className="flex flex-col gap-5 items-center md:items-start">
            <img src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/65a922d3fb7f1e18d82256f4_Logo.webp" alt="logo" className='w-[200px] object-contain ' />
            <p className='font-[100] text-sm light_clr2'>Discover the art of furnishing with FurniFlow – where style meets substance.</p>
            <ul className='flex items-center justify-center gap-8 cursor-pointer'>
              <li><img src="/svg/facebook.svg" alt="facebook" className='w-[15px] object-contain' /></li>
              <li><img src="/svg/twitter.svg" alt="facebook" className='w-[15px] object-contain' /></li>
              <li><img src="/svg/linkedin.svg" alt="facebook" className='w-[15px] object-contain' /></li>
              <li><img src="/svg/youtube.svg" alt="facebook" className='w-[15px] object-contain' /></li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className='font-bold'>Pages</h3>
            <ul className='font-light light_clr2 text-sm flex flex-col gap-2'>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Products</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className='font-bold'>Services</h3>
            <ul className='font-light light_clr2 text-sm flex flex-col gap-2'>
              <li>Style-Guide</li>
              <li>Change-Log</li>
              <li>License</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5 ">
            <h3 className='font-bold'>contacts</h3>
            <ul className='font-light light_clr2 text-sm flex flex-col gap-2'>
              <li>55 East Birchwood Ave. Brooklyn, New York 11201</li>
              <li>contact@furniflowtnc.com</li>
              <li>(123) 456 - 7890</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center font-[200] md:font-[100] md:text-sm text-[10px] light_clr2 md:py-8 py-5 px-5  container m-auto">
        Copyright ©
        2025
        . All Rights Reserved |
        Designed by ThemeNcode LLC
        |
        Powered by Webflow
      </div>
    </footer>
  )
}

export default Footer