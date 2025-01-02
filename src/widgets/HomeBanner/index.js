"use client";
import Image from "@/components/Image/image";
import ServiceCard from "@/components/ServiceCard";
import Slider from "@/components/Slider";
import useGetDeviceType from "@/hooks/useGetDeviceType";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import { useHomeBanner } from "./useHomeBanner";

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
  const {main}=useHomeBanner()
  const customSettings = {
    slidesPerView: 1,
    pagination: false,
    autoplay: true,
    loop: true,
    modules: [Autoplay],
    navigation: {
      prevEl: `.swiper-button-prev`,
      nextEl: `.swiper-button-next`,
    },
  };

  return (
    <section
      className={`overflow-hidden  bg-black min-h-screen flex items-end `}
      ref={main}
    >
      <div className="absolute top-0 w-full left-0 h-full">
        <Slider className={"h-full"} customSettings={customSettings}>
          <SwiperSlide>
            <div className="min-h-screen relative">
              <Image
                src="/images/banner.jpg"
                className="object-cover"
                fill
                priority={true}
                alt="BaNNE1"
              />
            </div>
          </SwiperSlide>
        </Slider>
      </div>
      <div className="z-10 w-full pb-10">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-red-300 md:text-emerald-500 lg:text-slate-300 xl:text-yellow-600 2xl:text-white fade will-change-transform">
              Dubai Police Drone Box Quick
            </h1>
            <p className="text-2xl text-white fade will-change-transform">
              Policing, Innovation & Leadership, Second Batch. Register Now
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4">
            {cards?.map((item, i) => {
              return (
                <div key={i} className="fade card will-change-transform">
                  <ServiceCard data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

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
