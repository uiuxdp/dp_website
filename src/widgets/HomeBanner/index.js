"use client";
import Image from "@/components/Image/image";
import ServiceCard from "@/components/ServiceCard";
import Slider from "@/components/Slider";
import useGetDeviceType from "@/hooks/useGetDeviceType";
import Link from "next/link";
import {
  Autoplay,
  EffectCreative,
  EffectFade,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { useHomeBanner } from "./useHomeBanner";
import { useRef, useState } from "react";
import "swiper/css/thumbs";
import ServiceCardSlider from "@/components/ServiceCardSlider";
import style from "./HomeBanner.module.scss";
import SliderProgressButton from "./SliderProgressButton";

// import {
//   EffectFade,
//   Navigation,
//   Pagination,
//   Autoplay,
//   FreeMode,
//   Thumbs,
// } from "swiper/modules";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// // import 'swiper/css/pagination';
// import "swiper/css/autoplay";

export default function HomeBanner({ data }) {
  const { width } = useGetDeviceType();
  const { main, sliderRef,contentRef } = useHomeBanner();
  const swiperRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isSwiper, setIsSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  const slideDuration = 5000;

  const customSettings = {
    slidesPerView: 1,
    onAutoplayTimeLeft: (swiper, timeLeftValue) => {
      setTimeLeft(Math.floor(timeLeftValue));
    },
    thumbs: { swiper: thumbsSwiper },
    autoplay: {
      delay: slideDuration,
    },
    speed: 1200,
    loop: true,
    onSwiper: (swiperInstance) => {
      if (!swiperInstance) return;
      swiperRef.current = swiperInstance;
      setIsSwiper(swiperInstance);
    },
    onSlideChange: (swiper) => {
      setCurrentIndex(swiper.activeIndex);
    },
    // effect:'fade',
    modules: [Autoplay, Navigation, Thumbs, EffectFade],
    navigation: {
      prevEl: `.swiper-button-prev1`,
      nextEl: `.swiper-button-next1`,
    },
  };
  const customSettings1 = {
    onSwiper: setThumbsSwiper,
    slidesPerView: 1,
    autoplay: false,
    effect: "fade",
    // loop: true,
    modules: [Navigation, Thumbs, EffectFade],
  };

  return (
    <section
      className={`overflow-hidden  bg-white min-h-screen flex items-end ${style.section}`}
      ref={main}
    >
      <SliderProgressButton
        className={" lg:hidden absolute top-[70px] right-6 z-10"}
        swiperRef={swiperRef}
        slideDuration={slideDuration}
        timeLeft={timeLeft}
      />
      <div className="absolute top-0 w-full left-0 h-full" ref={sliderRef} >
        <Slider
          className={"h-full swiper2"}
          customSettings={customSettings}
          ref={swiperRef}
        >
          {slides?.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="min-h-screen relative">
                  <Image
                    src={`${item?.img}`}
                    className="object-cover"
                    fill
                    priority={true}
                    alt={item?.title}
                  />

                  <video
                    id="DPvideo"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                  >
                    <source src="/images/banner1.mp4" type="video/mp4" />
                  </video>
                </div>
              </SwiperSlide>
            );
          })}
        </Slider>
      </div>
      {/* bg-gradient-to-b from-[#032e1d00] to-[#000000] */}
      <div className="z-10 w-full py-10 " ref={contentRef}>
        <div className="container">
          <div className="w-full max-w-[832px]  mx-auto ">
            <Slider className="mySwiper dp-fade-out" customSettings={customSettings1}>
              {slides?.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="text-center mb-8">
                      <h1 className="text-2xl lg:text-4xl text-white fade will-change-transform">
                        {item?.title}
                      </h1>
                      <p className="text-sm lg:text-2xl text-white fade will-change-transform">
                        {item?.content}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Slider>

            <div className=" px-[11px] py-[10px] bg-white rounded-full justify-start items-center gap-[11px] hidden lg:flex mb-8 fade dp-fade-out">
              <div className="text-[#006c44] text-2xl leading-none ">
                <i className="icon-seach block"></i>
              </div>
              <input
                className="text-[#999999] text-sm py-3 flex-grow"
                placeholder="Search Services.."
              />
            </div>

            <div className="fade dp-fade-out">
              <div className="text-center mb-5 ">
                <div className=" p-2 justify-center items-center inline-flex gap-4">
                  <button
                    className="text-white text-2xl swiper-button-prev1"
                    aria-label="previous slide button"
                  >
                    <i className="icon-arrow-l block"></i>
                  </button>

                  <SliderProgressButton
                    className={"hidden lg:block"}
                    swiperRef={swiperRef}
                    slideDuration={slideDuration}
                    timeLeft={timeLeft}
                  />

                  <div className="flex items-center gap-1 ">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        className={`p-2`}
                        onClick={() => isSwiper.slideTo(index)}
                        aria-label={`slide${index + 1} button`}
                      >
                        <span
                          className={`size-[6px] block rounded-full ease-out duration-300 will-change-transform  ${
                            currentIndex === index
                              ? "bg-white scale-125"
                              : "bg-white/50 scale-100"
                          }`}
                        ></span>
                        {/* {currentIndex}-{index} */}
                      </button>
                    ))}
                    {/* <div className="w-2 h-2  bg-white rounded-full" />
                  <div className="w-2 h-2  bg-white rounded-full" />
                  <div className="w-2 h-2  bg-white rounded-full" />
                  <div className="w-2 h-2  bg-white rounded-full" /> */}
                  </div>

                  <button
                    className="text-white text-2xl swiper-button-next1"
                    aria-label="next slide button"
                  >
                    <i className="icon-arrow-r block"></i>
                  </button>
                  {/* <div className="w-6 h-6 relative  overflow-hidden" /> */}
                </div>
              </div>

              <div className="w-[17px] h-6 relative  border-2 border-white/50 rounded-full mx-auto">
                <div className="size-[5px] left-1  top-[3px] absolute bg-white rounded-full animate-bounce2" />
              </div>
            </div>
          </div>

          {/* <div className="grid grid-cols-6 gap-4 fade">
            {cards?.map((item, i) => {
              return (
                <div key={i} className=" card will-change-transform">
                  <ServiceCard data={item} />
                </div>
              );
            })}
          </div> */}
        </div>
<div className="dp-fade-out">
        <div className="fade container " >
          <ServiceCardSlider />
        </div>
      </div>
      </div>
    </section>
  );
}

const slides = [
  {
    title: "Dubai Police Drone Box Quick1",
    content: "   Policing, Innovation & Leadership, Second Batch. Register Now",
    img: "/images/banner.jpg",
  },
  {
    title: "Dubai Police Drone Box Quick2",
    content: "   Policing, Innovation & Leadership, Second Batch. Register Now",
    img: "/images/banner.jpg",
  },
  {
    title: "Dubai Police Drone Box Quick3",
    content: "   Policing, Innovation & Leadership, Second Batch. Register Now",
    img: "/images/banner.jpg",
  },
];

const cards = [
  {
    icon: "/images/make-a-report.svg",
    title: "Reporting Services",
    content: "All smart reporting services under the same bundle.",
  },
  {
    icon: "/images/traffic-service.svg",
    title: "Traffic Services",
    content:
      "Everything related to traffic services, including fine inquiry and payment.",
  },
  {
    icon: "/images/get-a-permit.svg",
    title: "Permit Services",
    content: "Get any permit through the diverse permits bundle.",
  },
  {
    icon: "/images/get-a-certificate.svg",
    title: "Certificate Services",
    content:
      "Apply and obtain any certificate approved by Dubai Police easily.",
  },
  {
    icon: "/images/explore-civic-hub.svg",
    title: "Community Services",
    content: "Enjoy using a variety of smart and essential community services.",
  },
  {
    icon: "/images/explore-hemaya.svg",
    title: "Hemaya Services",
    content: "Explore Hemaya's services with our intuitive guide.",
  },
];
