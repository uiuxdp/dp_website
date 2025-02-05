import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useGetDeviceType from "@/hooks/useGetDeviceType";

gsap.config({ force3D: true });
export const useHomeBanner = () => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);
  const sliderRef = useRef(null);
  const contentRef = useRef(null);
  const { width } = useGetDeviceType();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const fade = self.selector(`.fade`);
      const fadeOut = self.selector(`.dp-fade-out`);
      const cards = self.selector(`.card`);

      gsap.set(fade, { y: 100, autoAlpha: 0, willChange:"transform" });
      gsap.set(main.current, { clipPath: "inset(0% 0% 0% 0%)" });
      gsap.set(contentRef.current, { willChange: "transform" });

      const tl = gsap.timeline({ repeat: 0, paused: true });
      tl.to(
        fade,
        {
          y: 0,
          autoRound: false,
          stagger: 0.1,
          autoAlpha: 1,
          ease: "Expo.easeOut",
          duration: 1.5,
        },
        0
      )
        .play(0);

        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: main.current,
            // markers: true,
            start: "top top",
            end: "300%",
            scrub: true,
          },
        });
        tl1.to(main.current, {
            clipPath: "inset(10% 10% round 30px)",
            ease: "Expo.easeOut",
          },
          0
        )
        tl1.to(cards, {
        //  yPercent: 100,
         stagger: .01,
          ease: "Expo.easeOut",
        }, "<")
        // tl1.to(contentRef.current, {
        //   scale: 0.7,
        //   yPercent: 50,
        //     ease: "Expo.easeOut",
        //   }, "<")
          tl1.to(fadeOut, {
            stagger: 0.005,
            scale: 0.7,
            autoAlpha: 0,
            filter: "blur(10px)",
              ease: "Expo.easeOut",
            }, "<")

      // tl2.to(app3, { xPercent: 0, yPercent: 0 }, "<")

      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {},

        "(min-width: 600px) and (max-width: 959px)": function () {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore.
        },

        // small
        "(max-width: 599px)": function () {
          // The ScrollTriggers created inside these functions are segregated and get
          // reverted/killed when the media query doesn't match anymore.
        },

        // all
        all: function () {},
      });
    }, main);

    return () => {
      ctx.revert();
    };
  }, [width]);

  return {
    main,
    width,
    sliderRef,
    contentRef
  };
};
