"use client";

import useGetDeviceType from "@/hooks/useGetDeviceType";
import LogoBar from "../LogoBar";
import MenuBar from "../MenuBar";
import { useHeader } from "./useHeader";

const Header = ({}) => {
  const { isScrollingDown, main, width } = useHeader();

  return (
    <header
      ref={main}
      className={`fixed top-0 left-0 z-[48] w-full duration-500 ease-in-out  bg-gradient-to-b from-black via-black/50 to-black/0 `}
    >
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
      {width>=600&&
      <div
        className={`sub-header duration-500 ease-in-out ${
          isScrollingDown
            ? "bg-white from-black/0 via-black/0 to-transparent"
            : ""
        }`}
      >
        <MenuBar isScrolled={isScrollingDown} />
      </div>}
    </header>
  );
};

export default Header;
