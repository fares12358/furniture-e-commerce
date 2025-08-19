import React from 'react'

const page = () => {
  return (
    <div className='container min-h-[50vh] m-auto py-10 flex md:flex-row flex-col items-center justify-center px-10 md:gap-5 gap-10 md:px-30'>

      <div className="flex-1 flex flex-col gap-10">
        <h2 className='text-3xl font-bold uppercase'>get in touch</h2>
        <p className='font-medium text-md uppercase'>customer support</p>
        <ul className='flex flex-col gap-5 light_clr'>
          <li className='flex items-center justify-start gap-2'><img src="/svg/location.svg" alt="" className='w-[25px] object-contain' />55 East Birchwood Ave. Brooklyn,
            New York 11201</li>
          <li className='flex items-center justify-start gap-2'><img src="/svg/email.svg" alt="" className='w-[25px] object-contain' />(603) 555-0123</li>
          <li className='flex items-center justify-start gap-2'><img src="/svg/phone.svg" alt="" className='w-[25px] object-contain' />example@gmail.com</li>
        </ul>
      </div>

      <form action="" className='flex-1 flex items-center justify-start gap-5 flex-col max-w-full w-[400px]'>
        <div className="name flex flex-col items-center w-full">
          <label className='self-start light_clr' htmlFor="name">name</label>
          <input type="text" name='name' className='border light_clr py-3 px-5 max-w-full w-full rounded-md' placeholder='Enter your name' />
        </div>
        <div className="email flex flex-col items-center w-full">
          <label className='self-start light_clr' htmlFor="email">email address</label>
          <input type="email" name='email' className='border light_clr py-3 px-5 max-w-full w-full  rounded-md' placeholder='Enter your email' />
        </div>
        <div className=" flex flex-col items-center w-full">
          <label className='self-start light_clr' htmlFor="phone-no">phone no</label>
          <textarea type="text" cols={20} rows={5} name='phone-no' className='border light_clr py-3 px-5 max-w-full w-full  rounded-md' placeholder='Enter your message' />
        </div>
        <button className='bg-black text-white text-sm py-3 w-full rounded-md font-bold cursor-pointer'>Send Message</button>
      </form>
    </div>
  )
}

export default page