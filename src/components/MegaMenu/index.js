import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useSetRecoilState } from "recoil";
import { isMenuOpen } from "@/recoil/atoms";

const MegaMenu = () => {
  const container = useRef(null);
  const menuRef = useRef(null);
  const menuBgRef = useRef(null);
  const setHeader = useSetRecoilState(isMenuOpen);

  useGSAP(
    (context, contextSafe) => {
      const fade = context.selector(`.fade`);
      gsap.set(menuBgRef.current, { transformOrigin: "top", willChange: "transform" ,autoAlpha: 0});
      gsap.set(fade, { y: -30, autoAlpha: 0, willChange: "transform" });

      const onMouseEnter = contextSafe(() => {
        setHeader(true)
        gsap.to(menuRef.current, {
          autoAlpha: 1,
          duration: 0.3,
          ease: "Expo.easeOut",
        });
        gsap.to(menuBgRef.current, {
          autoAlpha: 1,
          duration: .7,
          scaleY: 1,
          ease: "Expo.easeOut",
        });

        gsap.to(fade, {
          y: 0,
          autoRound: false,
          stagger: 0.03,
          autoAlpha: 1,
          ease: "Expo.easeOut",
          duration: 0.5,
        });
      });

      const onMouseLeave = contextSafe(() => {
        setHeader(false)
        gsap.to(menuRef.current, {
          autoAlpha: 0,
          duration: 0.3,
          ease: "Expo.easeOut",
        });

        gsap.to(menuBgRef.current, {
          autoAlpha: 0,
          scaleY: 0.5,
          duration: 0.7,
          ease: "Expo.easeOut",
        });

        gsap.to(fade, {
            y: -50,
            autoRound: false,
            autoAlpha: 0,
            ease: "Expo.easeOut",
            duration: 0.5,
          });
      });

      container.current.addEventListener("mouseenter", onMouseEnter);
      container.current.addEventListener("mouseleave", onMouseLeave);

      return () => {
        container.current.removeEventListener("mouseenter", onMouseEnter);
        container.current.removeEventListener("mouseleave", onMouseLeave);
      };
    },
    { scope: container }
  );

  return (
    <>
      <div
        className=" inline-block"
        // onMouseEnter={() => setIsHovered(true)}
        // onMouseLeave={() => setIsHovered(false)}
        ref={container}
      >
        <button className="py-5 px-4  overflow-hidden duration-500 ease-in-out inline-block relative before:bg-primary  before:content-[''] before:block before:absolute before:bottom-0 before:left-0 before:w-full before:h-1 before:rounded-t-full before:ease-in-out before:duration-300 before:will-change-transform  before:translate-y-full hover:before:translate-y-0   text-[#1a1a1a]">Menu</button>
        <div
          ref={menuRef}
          className="absolute top-full left-0 py-10  w-full will-change-transform opacity-0"
          // 
        >
          <div
            className="bg-white absolute top-0 left-0 w-full h-full"
            ref={menuBgRef}
          ></div>
          <div className="container z-10 relative">
            <div className="grid grid-cols-4">
              <ul className="py-2 ">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer fade">
                  Option 1
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer fade">
                  Option 2
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer fade">
                  Option 3
                </li>
              </ul>
              <ul className="py-2 ">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer fade">
                  Option 1
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer fade">
                  Option 2
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer fade">
                  Option 3
                </li>
              </ul>
              <ul className="py-2 ">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer fade">
                  Option 1
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer fade">
                  Option 2
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer fade">
                  Option 3
                </li>
              </ul>
              <ul className="py-2 ">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer fade">
                  Option 1
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer fade">
                  Option 2
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer fade">
                  Option 3
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
