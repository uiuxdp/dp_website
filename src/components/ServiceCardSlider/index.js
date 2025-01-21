"use client";
import Image from "@/components/Image/image";
import ServiceCard from "@/components/ServiceCard";
import Slider from "@/components/Slider";
import useGetDeviceType from "@/hooks/useGetDeviceType";
import Link from "next/link";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";

import { SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import "swiper/css/thumbs";

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

export default function ServiceCardSlider({ data }) {
  const swiperRef = useRef(null);

  const customSettings1 = {
    slidesPerView: 1.8,
    // pagination: pagination,
    spaceBetween:8,
    autoplay: true,
    loop: true,
    modules: [Autoplay, Navigation, Thumbs],
    breakpoints:{
        640: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 16,
        },
      }
  };

  return (
    <Slider className="serviceCardSlider !pt-9" customSettings={customSettings1}>
      {cards?.map((item, i) => {
        return (
          <SwiperSlide key={i}>
            <div className=" card will-change-transform">
              <ServiceCard data={item} />
            </div>
          </SwiperSlide>
        );
      })}
    </Slider>
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
