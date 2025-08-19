import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='w-full min-h-[calc(100%-124px)]'>
            <div className="bg-[#eff0f2] w-full h-[80px] ">
                <div className="w-full h-full flex items-center justify-start md:gap-4 gap-1 container m-auto px-5 md:px-0">
                    <Link className='uppercase font-light md:text-[15px] text-[12px] ' href={'/'}>Home</Link>
                    <img src="/svg/arrow-left-5.svg" alt="arrow" className='w-[20px]' />
                    <p className='font-light md:text-[15px] text-[12px] uppercase'>Nook Occasional Chair</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-center container m-auto p-5 md:p-10">
                <div className="flex-1 grid grid-cols-4 grid-rows-3 items-center justify-items-center gap-4 relative md:p-10">
                    <div className="w-full h-full flex items-center justify-center p-2 cursor-pointer rounded-lg bg-[#fafafa] relative">
                        <img src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a0398/658eab21e53b9847b5bf284f_526%201-p-500.png" alt="img" className=' w-full object-contain' />
                    </div>
                    <div className="w-full h-full flex items-center justify-center p-2 cursor-pointer  rounded-lg bg-[#fafafa] row-span-3 col-span-3">
                        <img src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a0398/658eb68d3d98b9ecd515f407_526%201-6.png" alt="img" className='w-full object-contain' />
                    </div>
                    <div className="w-full h-full flex items-center justify-center p-2 cursor-pointer  rounded-lg bg-[#fafafa]">
                        <img src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a0398/658eb68d3d98b9ecd515f407_526%201-6.png" alt="img" className='w-full object-contain' />
                    </div>
                    <div className="w-full h-full flex items-center justify-center p-2 cursor-pointer  rounded-lg bg-[#fafafa]">
                        <img src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a0398/658eb68d6094cbce8b84ca2d_sakarias-armchair-black-sporda-dark-gray__0729767_pe737131_s5_adobespark-1.png" alt="img" className='w-full object-contain' />
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-start justify-start h-full w-full gap-4 md:gap-2 py-10 md:p-10">
                    <div className=" h-full w-full flex flex-col gap-5">
                        <h2 className='text-3xl font-extrabold'>
                            Nook Occasional Chair
                        </h2>
                        <h3 className='font-bold text-2xl text-[#cda274]'>$ 95.00 USD</h3>
                        <p className='font-extralight light_clr text-[20px]'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended</p>
                    </div>
                    <hr className='border-[#b5b5b5a5] h-[1px] w-1/2 self-center my-5' />
                    <div className="grid grid-cols-3 grid-rows-3 w-[300px] items-start justify-items-start">
                        <h4 className='font-bold'>Weight</h4>
                        <span>:</span>
                        <p>14KG</p>
                        <h4 className='font-bold'>Dimensions</h4>
                        <span>:</span>
                        <p>26
                            cm
                            x
                            12
                            cm
                            x
                            60
                            cm</p>
                        <h4 className='font-bold'>Made In
                        </h4>
                        <span>:</span>
                        <p>Bulgaria</p>
                    </div>
                    <p className='flex gap-4'><span className='font-bold'>SKU</span>:SM1439722</p>
                    <p className='flex gap-4'><span className='font-bold'>Categories</span>Furnitures,Chair,</p>
                    <div className="flex flex-col lg:flex-row items-center justify-start gap-5 w-full">
                        <input type="number" value={0} className='border border-[#b5b5b5] rounded-md w-[60px] h-[30px] p-2 font-bold outline-none focus:outline-none' min={0} />
                        <button className='bg-black text-white text-md font-bold min-w-1/2 max-w-full py-3 rounded-md'>Add to Cart</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page