"use client";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { IoIosPause, IoIosPlay } from "react-icons/io";

export default function SliderProgressButton({
  swiperRef,
  slideDuration,
  timeLeft,
  className
}) {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className={cn("relative size-6 ", className)}>
      <svg
        className="size-full -rotate-90"
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-transparent"
          strokeWidth="3"
        ></circle>
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          className="stroke-current text-white"
          strokeWidth="3"
          strokeDasharray="100"
          strokeDashoffset={`${
            100 - ((slideDuration - timeLeft) / slideDuration) * 100
          }`}
          strokeLinecap="round"
        ></circle>
      </svg>

      <button
        aria-label="toggle button for play and pause"
        className="absolute p-1 top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center text-sm font-bold text-white inline-flex items-center justify-center"
        onClick={() => {
          if (isPlaying) {
            swiperRef.current?.autoplay.stop();
          } else {
            swiperRef.current?.autoplay.start();
          }
          setIsPlaying(!isPlaying);
        }}
      >
        {isPlaying ? <IoIosPause /> : <IoIosPlay />}
      </button>
    </div>
  );
}
