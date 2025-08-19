'use client'
import React, { useState } from 'react'

const page = () => {
  const [data, setdata] = useState([
    [
      "https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/65928405384e262a4e3ba44a_Rectangle%2023.webp", "Jesse Depp", "Founder & CEO"
    ],
    [
      "https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/65928405d854e03b8865d60b_Rectangle%2023-2.webp", "Margareth Carter", "COO"
    ],
    [
      "https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/659284059b7d35320bed5b8d_Rectangle%2023-4.webp", "Andrew Taggart", "Marketing Head"
    ],
    [
      "https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/65928405cd940a3b002bf42e_Rectangle%2023-1.webp", "Grace Marie", "Manager"
    ],
    [
      "https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/659284053a320cb81c512d51_Rectangle%2023-5.webp", "Jesse Depp", "Senior Designer"
    ],
    [
      "https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/6592840418147d2fdfd14ec7_Rectangle%2023-3.webp", "Mark Andrew", "Marketer"
    ],
  ])
  return (
    <div className='w-full h-fit container m-auto md:py-20 py-10 flex flex-col gap-20'>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="img-holder flex-1 grid grid-cols-3 items-center justify-center relative p-10 ">
          <img src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/65927b539be5f073ae1b5dfd_Rectangle%2064.webp" className='w-[200px] rounded-tl-[100px] scale_anim shadow-xl ' alt="img1" />
          <img src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/65927b52b33626629eda2fee_Rectangle%2067.webp" className='w-[150px] rounded-[20px] anime shadow-xl' alt="img1" />
          <img src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/65927b52e661d2a04310f9c0_Rectangle%2069.webp" className='w-[180px] rounded-tr-[100px] anime  shadow-xl' alt="img1" style={{animationDelay:"1s"}} />

          <img src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/65927b52bb045ff2084a0cdd_Rectangle%2066.webp" className=' w-[120px] rounded-bl-[50px] shadow-xl side_anim' alt="img1"  style={{animationDelay:"1.5s"}}/>
          <img src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/65927b53139e1daa3730a959_Rectangle%2065.webp" className=' w-[160px] rounded-tr-[100px] shadow-xl scale_rot' alt="img1" />
          <img src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/65927b5203a2c3dd49128e9e_Rectangle%2071.webp" className='row-span-2 w-[200px] rounded-br-[100px] shadow-xl anime' alt="img1" />

          <img src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/65927b52384e262a4e371f01_Rectangle%2070.webp" className=' w-[150px] rounded-bl-[100px] shadow-xl side_anim' alt="img1" />
          <img src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/65927b52fa4728dd2e0c31c6_Rectangle%2068.webp" className=' w-[120px] rounded-br-[50px] shadow-xl side_anim' alt="img1" style={{animationDelay:"1s"}} />
        </div>
        <div className="text-holder flex-1 flex flex-col gap-10 items-center md:items-start text-center md:text-start ">
          <h3 className='font-bold md:text-6xl text-3xl'>About FurniFlow</h3>
          <p className='text-2xl light_clr md:text-[20px] text-[15px] md:font-[100] font-[200]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          <button className='border md:py-3 py-2 px-20 font-bold text-xs md:text-md rounded-md w-fit max-w-full cursor-pointer'>Contact Us</button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="flex flex-1 flex-col md:items-start items-center justify-start h-full md:px-10 p-5 gap-10  order-2 md:order-1">
          <h3 className='md:text-5xl text-2xl font-bold text-center md:text-start'>
            Our team dedicated to help find  smart home product.
          </h3>
          <ul className=' flex-1 flex items-start justify-start gap-10 flex-col'>
            <li className='flex gap-5'>
              <img src="/svg/phone-plus.svg" alt="phone" className='w-[30px]' />
              <div className="flex flex-col items-start gap-5 justify-start">
                <h4 className='font-bold md:text-xl text-lg'>24/7 Supports</h4>
                <p className='md:text-md text-sm'>24/7 support means a support service that is provided 24 hours a day and 7 days a week.</p>
              </div>
            </li>
            <li className='flex gap-5'>
              <img src="/svg/message.svg" alt="message" className='w-[30px]' />
              <div className="flex flex-col items-start gap-5 justify-start">
                <h4 className='font-bold text-xl'>
                  Free Consultation</h4>
                <p>A free consultation is a one-on-one interaction or conversation given freely to share one's thoughts and discuss possible</p>
              </div>
            </li>
            <li className='flex gap-5'>
              <img src="/svg/medal-star.svg" alt="star" className='w-[30px]' />
              <div className="flex flex-col items-start gap-5 justify-start">
                <h4 className='font-bold text-xl'>Overall Guarantee</h4>
                <p>24/7 support means a support service that is provided 24 hours a day and 7 days a week.The comprehensive guarantee is required for import, warehousing, transit, processing and specific use.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex items-center justify-center order-1 md:order-2">
          <img src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/659284059e5521d3a7e5edde_Photo-p-800.webp" alt="image" className='max-w-full w-[500px] object-contain rounded-tr-[100px] rounded-bl-[100px] ' />
        </div>

      </div>

      <div className="flex flex-col items-center justify-center gap-10">
        <h3 className='font-bold md:text-5xl text-2xl text-center'>Our Team</h3>
        <p className='font-[100] light_clr text-center md:text-md text-[12px] max-w-full w-[600px]'>Introducing our dynamic and resilient team—innovators, collaborators, and leaders dedicated to shaping success at every turn.</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {
            data?.map((item, index) => (
              <div key={index} className="flex items-start justify-start flex-col gap-1 px-10">
                <img src={item[0]} alt="pr-1" className='max-w-full rounded-xl' />
                <h4 className='font-bold md:text-xl text-md'>{item[1]}</h4>
                <p className='font-extralight md:text-md text-xs'>{item[2]}</p>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default page