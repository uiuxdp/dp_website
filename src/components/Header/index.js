"use client";

import useGetDeviceType from "@/hooks/useGetDeviceType";
import { gsap } from "gsap";
import LogoBar from "../LogoBar";
import MenuBar from "../MenuBar";
import { useHeader } from "./useHeader";
import { useRecoilValue } from "recoil";
import { isMenuOpen } from "@/recoil/atoms";
import { useEffect, useRef } from "react";
const Header = ({}) => {
  const curtainRef=useRef(null)
  const { isScrollingDown, main, width } = useHeader();

  const menuOpen = useRecoilValue(isMenuOpen);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(curtainRef.current, {
        autoAlpha: 1,
        duration: 0.3,
        ease: "power1.out",
      });
    } else {
      gsap.to(curtainRef.current, {
        autoAlpha: 0,
        duration: 0.3,
        ease: "power1.in",
      });
    }
  }, [menuOpen]);



  return (
    <>
      <header
        ref={main}
        className={`fixed top-0 left-0 z-[48] w-full duration-500 ease-in-out  `}
      >
        {/* bg-gradient-to-b from-black via-black/50 to-black/0  */}
        {/* <i className="icon-user"></i> */}
        {/* from-black/80 via-black/40 to-transparent */}
        <div
          className={`main-header duration-500 ease-in-out relative z-20 ${
            isScrollingDown
              ? "bg-white from-black/0 via-black/0 to-transparent"
              : ""
          }`}
        >
          <LogoBar isScrolled={isScrollingDown} />
        </div>
        {width >= 600 && (
          <div
            className={`sub-header duration-500 ease-in-out ${
              isScrollingDown
                ? "bg-white from-black/0 via-black/0 to-transparent"
                : ""
            }`}
          >
            <MenuBar isScrolled={isScrollingDown} />
          </div>
        )}
      </header>
     <span ref={curtainRef} className="fixed top-0 w-full h-full left-0 block bg-black/50 z-[11] backdrop-blur-[10px] opacity-0"></span>
      {/* backdrop-blur-[10px] */}
    </>
  );
};

export default Header;
