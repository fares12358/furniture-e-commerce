'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import Cart from './Cart';

const Nav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    return (
        <nav className='w-full h-fit'>
            {/* top section */}
            <div className="top w-full shadow">
                <div className="container m-auto flex items-center justify-between md:px-5 px-1 py-3  uppercase font-[500]  md:font-extralight text-[6.5px] md:text-[10px] tracking-normal md:tracking-widest light_clr">
                    <div className="">UP TO 40% OFF BEST-SELLING FURNITURE. SHOP NOW</div>
                    <div className="">OPEN 9AM TO 9PM / (123) 456 - 7890</div>
                </div>
            </div>
            {/* nav section */}
            <div className="w-full shadow py-5 px-5 md:px-0">
                <div className="container m-auto flex items-center justify-between">
                    <div className="logo relative">
                        <img src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/658ba9fbca1479f5b8e1f6a3_Logo.webp" alt="logo" className=' w-[150px] md:w-[200px] object-contain' />
                    </div>
                    <div className="md:flex hidden font-extralight text-[14px] light_clr items-center justify-center gap-10 uppercase">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/pages/About'}>About</Link>
                        <Link href={'/pages/Products'}>Products</Link>
                        <Link href={'/pages/Contact'}>Contact</Link>
                    </div>
                    <div className="flex items-center justify-center gap-5 ">
                        <button><img src="/svg/search.svg" alt="search" className='w-[20px] cursor-pointer' /></button>
                        <button className='relative  cursor-pointer' onClick={(e) => { e.preventDefault(); setOpenCart(true); }}> <img src='/svg/cart.svg' alt='cart' className='w-[20px]' /> <span className='absolute -top-2 -right-3 flex items-center justify-center p-2 bg-red-600 text-white w-4 h-4 rounded-full text-[10px]'>10</span></button>
                        {
                            !openMenu ?
                                <button className="md:hidden block menu icon relative" role='button' onClick={() => { setOpenMenu(true) }}>
                                    <img src="/svg/menu.svg" alt="menu" className='w-[25px] h-[25px]' />
                                </button>
                                :
                                <button className="md:hidden block menu icon relative" role='button' onClick={() => { setOpenMenu(false) }}>
                                    <img src="/svg/close.svg" alt="menu" className='w-[25px] h-[25px]' />
                                </button>
                        }
                    </div>
                </div>
                <div className={` flex-col font-extralight text-[14px] light_clr items-center justify-center gap-5 uppercase py-5 overflow-hidden ${openMenu ? "flex h-fit " : "hidden h-[0px]"}`}>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/pages/About'}>About</Link>
                    <Link href={'/pages/Products'}>Products</Link>
                    <Link href={'/pages/Contact'}>Contact</Link>
                </div>
            </div>
            {
                openCart ?
                    <Cart set={setOpenCart} open={openCart} />
                    :
                    ''
            }
        </nav>
    )
}

export default Nav