'use client';
import Link from 'next/link';
import React, { useState } from 'react'

const Cart = ({ open, set }) => {
    const [Cart, setCart] = useState([]);
    return (
        <div className='transition duration-300 ease-in-out w-full h-full fixed top-0 left-0 flex items-start justify-end gap-5 bg-[#3f3f3feb] z-30'>

            <div className="w-full md:w-[600px] h-full bg-white p-5 flex flex-col">
                <h2 className='font-bold text-xl flex items-center justify-between border-b py-5'>
                    Your Cart <img src="/svg/close-md.svg" alt="close" className='w-[25px] cursor-pointer' onClick={() => { set(false) }} />
                </h2>
                <div className="w-full h-full flex flex-col items-center justify-start overflow-auto">
                    {Array(10)
                        .fill(null)
                        .map((_, i) => (
                            <div key={i} className="grid grid-cols-4 items-center justify-center gap-5 py-5">
                                <Link onClick={()=>{set(false)}} href={'/pages/Checkout'} className="bg-[#fafafa] rounded-md w-[60px] md:w-[100px] h-[60px] md:h-[100px] md:p-4 p-1 cursor-pointer hover:shadow transition duration-300 ease-in-out">
                                    <img src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a0398/658eb68d3d98b9ecd515f407_526%201-6.png" alt="item-1" className='w-full' />
                                </Link>

                                <div className="col-span-2 flex items-start justify-start flex-col gap-2">
                                    <h4 className='font-bold text-[10px] md:text-lg'>Nook Occasional Chair</h4>
                                    <p className='font-bold text-[#cda274] text-[9px] md:text-lg'>$ 95.00 USD</p>
                                    <button className='flex items-center justify-center gap-2 cursor-pointer font-bold text-[9px] md:text-sm hover:text-red-600 transition duration-300 ease-in-out '>
                                        <img src="/svg/close-ellipse.svg" alt="close" className='w-[10px] md:w-[20px]' />Remove
                                    </button>
                                </div>
                                <input type="number" onChange={''} value={2} className='w-[40px] md:w-[50px] border border-[#b6b6b6]  text-sm md:text-md px-1 md:p-2 rounded-md outline-none font-bold' />
                            </div>
                        ))}

                </div>

                <div className="mt-auto mb-0 w-full border-t border-[#b6b6b6] p-4 flex flex-col items-center justify-start gap-4">
                    <div className="flex justify-between items-center w-full font-bold text-sm md:text-md">
                        Total
                        <span>$ 157.50 USD</span>
                    </div>
                    <button className='bg-black text-white font-bold text-[10px] md:text-sm  w-full py-3 rounded-md cursor-pointer'>Containue to Checkout</button>
                </div>

            </div>
        </div>
    )
}

export default Cart