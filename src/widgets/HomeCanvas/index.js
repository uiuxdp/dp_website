"use client";
import { Canvas } from "@react-three/fiber";
import Scene from "../Scene";
import { useGSAP } from "@gsap/react";
import { Expo, Power3, gsap, Elastic } from "gsap";
import { Suspense, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ContactPopup } from "@/components/ContactPopup";

export default function HomeCanvas({ parentRef }) {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);

  useGSAP(
    (context, contextSafe) => {
      gsap.set([".title1",".title2"],{autoAlpha: 0, yPercent: 100})
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          end: "600%",
          scrub: .5,
          pin: true,
        },
      });
      console.log(context,"contextcontext");

      tl1.to(".title1",{yPercent: 0, autoAlpha: 1})
      tl1.to(".title1",{yPercent: -100,autoAlpha: 0}, "+=0.5")
      tl1.to(".title2",{yPercent: 0, autoAlpha: 1}, "<")
      tl1.to(".title2",{yPercent: -100,autoAlpha: 0}, "+=0.5")

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

  return (
    <section className={`overflow-hidden relative`} id="HomeBanner" ref={main}>
      <div className="relative " id="scroll-container">
        <div className={` w-full h-screen`}>
          <Canvas
            // shadows
            dpr={[1, 1.5]}
            // dpr={dpr}
            // gl={{ antialias: true }}
            // gl={{
            //   antialias: true,
            //   powerPreference: "high-performance",
            // }}
            // frameloop="demand"
            // performance={{ min: 0.5 }}
            // camera={{ position: [0, 0, 10], fov: 60 }}
          >
            <Scene parentRef={main} />
          </Canvas>
        </div>
      </div>
      <div className="absolute bottom-[100px] left-0 w-full">
        <div className="container">
          <div className="grid grid-cols-3">
            <h2 className="text-5xl font-semibold text-white uppercase mb-4 title1">
              On the ground around the clock
            </h2>
          </div>
        </div>
      </div>
      <div className="absolute top-[200px] left-0 w-full">
        <div className="container">
          <div className="grid grid-cols-3">
            <h2 className="text-5xl font-semibold text-white uppercase mb-4 title2">
              On the ground around the clock
            </h2>
          </div>
        </div>
      </div>

      <ContactPopup />
    </section>
  );
}
