"use client"
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

const useHomeIntro = () => {
  gsap.registerPlugin(ScrollTrigger);

  const main = useRef(null);
  let handleSmartClick;
  useGSAP(
    (context, contextSafe) => {

      const titleMain = context.selector(".title-main")
      const titleSec = context.selector(".title-sec")
      const bgMain = context.selector(".bg-main")
      const bgMainWrapper = context.selector(".bg-main-wrapper")


      const content = context.selector(".content")
      gsap.set(titleMain,{transformOrigin: "left", willChange: "transform"})
      gsap.set([bgMain[1],bgMain[2]],{clipPath:"inset(0% 100% 0% 0%)"})
      gsap.set(bgMainWrapper,{clipPath:"inset(11% 72% 85% 24%)"})
      // gsap.set([titleMain[1], titleMain[2]],{autoAlpha: 1, yPercent: 100, fontSize: "120px", transformOrigin: "left", willChange: "transform"})
      
      gsap.set(titleSec[0],{yPercent: -100})

      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          start:"top top",
          end: "500%",
          pin: true,
          scrub: true,
        },
      });

      tl1.to(titleMain[0],{scale: 3, ease: "power1.inOut"})
      tl1.to(main.current,{backgroundColor: "#000",color: "#fff", ease: "power1.inOut"},"<")
      tl1.to(bgMainWrapper,{clipPath: "inset(0% 0% 0% 0%)", ease: "power1.inOut"},"<")
      tl1.to(bgMainWrapper,{clipPath: "inset(0% 0% 0% 0%)", ease: "power1.inOut"},"<")
      tl1.to(content,{yPercent: -10,autoAlpha: 0, ease: "power1.inOut"},"<")
      tl1.to([titleMain[1], titleMain[2]],{yPercent: 1200, scale: .5, ease: "power1.inOut"}, "<")
      tl1.to(titleMain[0],{scale: 1,yPercent: -100, ease: "power1.inOut"})
      tl1.to([titleMain[1]],{yPercent: 0, scale: 3, ease: "power1.inOut"}, "<")
      tl1.to([bgMain[1]],{clipPath: "inset(0% 0% 0% 0%)", ease: "power1.inOut"}, "<")

      tl1.to(titleMain[1],{scale: 1,yPercent: -100, ease: "power1.inOut"})
      tl1.to([titleMain[2]],{yPercent: 0, scale: 3, ease: "power1.inOut"}, "<")
      tl1.to([bgMain[2]],{clipPath: "inset(0% 0% 0% 0%)", ease: "power1.inOut"}, "<")
      tl1.to([titleMain[2]],{yPercent: -100, scale: 1, ease: "power1.inOut"})


      handleSmartClick = () => {
        console.log("clicked",tl1);
        
        if (tl1) {
          tl1.seek(2);
        }
      };


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

      // gsap.to(pinner[0], {
      //   scrollTrigger: {
      //     trigger: pinner[0],
      //     end: "1700%",
      //     scrub: 1.5,
      //     pin: true,
      //     pinSpacer: true,
      //     pinSpacing: true,
      //     parent: main.current,
      //   },
      // });
    },
    { scope: main, dependencies: [] }
  );

  // Add click handler function


  return {
    main,
    handleSmartClick, // Export the click handler
  };
};

export default useHomeIntro; 