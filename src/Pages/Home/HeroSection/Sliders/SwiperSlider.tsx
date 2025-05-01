import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import "./style.css";

interface IProps {}

const slides = [
  {
    id: 1,
    title: "Welcome to Our Store",
    description:
      "Discover the best products at unbeatable prices. Shop now and enjoy top-quality service and fast delivery.",
    image: "img/hero/hero-1.jpg",
  },
  {
    id: 2,
    title: "Exclusive Deals",
    description:
      "Save big with our limited-time offers. Browse top categories now and grab what you love!",
    image: "img/hero/hero-2.jpg",
  },
  {
    id: 3,
    title: "Fresh & Organic Fruits",
    description:
      "Taste nature’s finest fruits. Sourced fresh, delivered fast!",
    image: "img/hero/hero-3.jpeg",
  },
  {
    id: 4,
    title: "Latest Sneakers",
    description:
      "Step into comfort and style with our newest sneaker collection.",
    image: "img/hero/hero-4.jpeg",
  },
  {
    id: 5,
    title: "Tech at Your Fingertips",
    description:
      "Discover the latest smartphones and laptops at amazing prices.",
    image: "img/hero/hero-5.jpeg",
  },
];

const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.6 },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SwiperSlider = ({}: IProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-[600px] relative overflow-hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        modules={[Autoplay, Pagination]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="mySwiper h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <img
                src={slide.image}
                alt="Slide"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="absolute inset-0 bg-black/40 z-10"></div>

              {/* Text Content */}
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.div
                    key={slide.id}
                    variants={textContainer}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center text-white px-4"
                  >
                    <motion.h1
                      variants={textItem}
                      className="text-4xl md:text-5xl font-extrabold leading-tight"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      variants={textItem}
                      className="mt-4 max-w-2xl text-lg text-gray-200"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.button
                      variants={textItem}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition"
                    >
                      SHOP NOW
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Down Button */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <button
          onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
          className="text-white text-sm opacity-70 hover:opacity-100 transition flex flex-col items-center"
        >
          <span className="mb-1">Scroll Down</span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SwiperSlider;
