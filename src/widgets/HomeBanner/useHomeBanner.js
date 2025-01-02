import { Expo, Power3, gsap, Elastic } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useGetDeviceType from "@/hooks/useGetDeviceType";

gsap.config({ force3D: true });
export const useHomeBanner = () => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);
  const { width } = useGetDeviceType();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const fade = self.selector(`.fade`);
      const cards = self.selector(`.card`);

      gsap.set(fade, { y: 100, autoAlpha: 0 });

      const tl = gsap.timeline({ repeat: 0, paused: true });
      tl.to(
        fade,
        {
          y: 0,
          autoRound: false,
          stagger: 0.1,
          autoAlpha: 1,
          ease: Expo.easeOut,
          duration: 1.5,
        },
        0
      )
        // tl.to([p1, p2], { scale: 1, autoAlpha: 1, ease: Expo.easeOut, duration: 1.5 }, 0.5)
        // tl.addLabel("anim", "<")
        .play(0);

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
  };
};
