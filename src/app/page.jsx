'use client'
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Elevate Your Home Elegance with Signature Designs",
    desc: "Immerse yourself in a world of refined aesthetics. Our curated selection of timeless pieces is crafted to add a touch of sophistication to your living spaces. Discover the perfect fusion of artistry and comfort.",
    img: "https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/658d5cf464467c5d8b7035d3_3816%201.webp",
  },
  {
    id: 2,
    title: "Transform Spaces with Modern Comfort",
    desc: "Find furniture that blends modern comfort with timeless charm. Designed to create harmony in every corner of your home.",
    img: "https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/658d5e594b73d75dd329af85_526%201.webp",
  },
  {
    id: 3,
    title: "Discover the Art of Living Beautifully",
    desc: "Our collection redefines elegance with handpicked designs that inspire warmth, beauty, and sophistication.",
    img: "https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/658bbb899f0ba90baf78cdb3_image-from-rawpixel-id-2384735-original%201.webp",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="hiro">
      <section className="bg-[#eff0f2] w-full p-10 min-h-[calc(100vh-124px)] flex items-center justify-center relative overflow-hidden">
        <div className="w-full  relative flex items-center justify-center py-10 md:py-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="w-full flex flex-col lg:flex-row items-center justify-between md:px-20 gap-10"
            >
              {/* Left Text */}
              <div className="flex-2 flex flex-col items-start justify-start md:gap-10 gap-5 order-2 lg:order-1">
                <h2 className="font-extrabold md:text-5xl text-2xl">
                  {slides[current].title}
                </h2>
                <p className="font-light md:text-xl text-md light_clr">
                  {slides[current].desc}
                </p>
                <button className="border py-2 md:py-3 px-10 md:px-15 rounded-md cursor-pointer font-bold md:text-md text-[14px] self-center md:self-start hover:bg-black hover:text-white transition">
                  Shop Now
                </button>
              </div>

              {/* Right Image */}
              <div className="flex-1 flex items-center justify-center md:p-10 order-1 lg:order-2">
                <img
                  src={slides[current].img}
                  alt="hero-img"
                  className="w-full max-h-[500px] object-contain"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-5 md:left-5 top-1/3 md:top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md md:p-2 p-1 hover:scale-110 transition"
          >
            <img src="/svg/arrow-left.svg" alt="prev" className="md:w-[25px] w-[20px]" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-5 md:right-5 top-1/3 md:top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-1 md:p-2 hover:scale-110 transition"
          >
            <img src="/svg/arrow-left.svg" alt="next" className="md:w-[25px] w-[20px] rotate-180" />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 flex items-center justify-center gap-3 w-full">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={` h-1 rounded-md transition ${current === index ? "bg-black scale-110 w-5" : "bg-gray-400 w-3"
                }`}
            ></button>
          ))}
        </div>
      </section>


      <section className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-8 gap-8">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start gap-4 order-2 lg:order-1">
          <p className="uppercase text-gray-500 tracking-wide">Materials</p>
          <h3 className="text-3xl lg:text-4xl font-bold leading-snug">
            Highly Durable Materials <br /> For Crafting Furniture
          </h3>
          <p className="text-gray-600 max-w-md">
            We were deeply committed to crafting furniture tailored for our surroundings,
            investing significantly in a prestigious and renowned capital,
            all while maintaining affordability.
          </p>
          <button className="flex items-center gap-2 text-[#cda274] font-bold hover:gap-3 transition-all cursor-pointer">
            More Info
            <span>→</span>
          </button>
        </div>

        {/* Right Images */}
        <div className="flex-1 grid grid-cols-4 gap-5 order-1 lg:order-2 md:p-10">
          <img
            src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/658c0da8bf5859f35996138a_Rectangle%201451.webp"
            alt="sofa small"
            className="w-full h-full object-cover rounded-xl"
          />
          <img
            src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/658c0da846482d06855b7aa1_Rectangle%201446.webp"
            alt="sofa large"
            className="w-full h-full object-cover rounded-xl row-span-2 col-span-3"
          />
          <img
            src="https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/658c0da743fa882a8ade1a90_Rectangle%201450.webp"
            alt="chair"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </section>


      {/* sup section */}
      <section
        className=" container mx-auto my-10 flex flex-col lg:flex-row items-center justify-between w-full h-[400px] relative rounded-none md:rounded-2xl overflow-hidden p-5 bg-cover bg-bottom-left"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/658aac48be82ffc7cc4a036c/658c1b459113ee53db8d198c_Frame%2011.webp')",
        }}
      >
        <div className="flex flex-col items-start justify-center gap-4 flex-1 z-10">
          <p className="font-[500] text-sm tracking-wide">JOIN OUR NEWSLETTER</p>
          <h3 className="font-bold text-3xl lg:max-w-1/2">
            Get Discount up to 50% off Today!
          </h3>
        </div>

        <form
          action=""
          className="flex flex-col items-center justify-center gap-5 flex-1 w-full z-10"
        >
          <input
            type="text"
            placeholder="Enter your email here"
            className="lg:w-1/2 w-full border-b outline-none py-3 bg-transparent font-bold text-xs md:text-md"
          />
          <button className="uppercase bg-black text-white font-light text-[12px] tracking-widest py-3 lg:w-1/2 w-full rounded-sm cursor-pointer">
            subscribe
          </button>
        </form>

      </section>

    </div>
  );
}
