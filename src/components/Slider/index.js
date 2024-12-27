"use client";
import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Slider = ({ children, customSettings, className }) => {
  return <Swiper {...customSettings} pagination={true} className={`${className}`}>{children}</Swiper>;
};

export default Slider;
