"use client";
import { Canvas } from "@react-three/fiber";
import Scene from "../Scene";
import { useGSAP } from "@gsap/react";
import { Expo, Power3, gsap, Elastic } from "gsap";
import { Suspense, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ContactPopup } from "@/components/ContactPopup";
import { carRef } from "@/recoil/atoms";
import { useRecoilValue } from "recoil";
import { Loader } from "@react-three/drei";
export default function HomeCanvas({ parentRef }) {
  gsap.registerPlugin(ScrollTrigger);

  const main = useRef(null);
  const progressLine = useRef(null);
  useGSAP(
    (context, contextSafe) => {
      gsap.set([".title2",".title3",".title4"],{autoAlpha: 0, yPercent: 100})
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          start:"top top",
          end: "1600%",
          scrub: true,
        },
      });
      // tl1.to(car.position, { z: -60 });

      tl1.to(".title1",{yPercent: -100,autoAlpha: 0}, "+=0.5")
      tl1.to(".title2",{yPercent: 0, autoAlpha: 1}, "<")
      tl1.to(".title2",{yPercent: -100,autoAlpha: 0}, "+=0.5")
      tl1.to(".title3",{yPercent: 0, autoAlpha: 1}, "<")
      tl1.to(".title3",{yPercent: -100,autoAlpha: 0}, "+=0.5")
      tl1.to(".title4",{yPercent: 0, autoAlpha: 1}, "<")
      tl1.to(".title4",{yPercent: -100,autoAlpha: 0}, "+=0.5")

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
      <div className="absolute top-0 left-0 w-full h-1 bg-red " ref={progressLine}></div>
      <div className="relative " id="scroll-container">
        <div className={` w-full h-screen`}>
        <Suspense fallback={<div>im loading</div>}>
          <Canvas
            // shadows
            dpr={.9}
            // dpr={dpr}
            // gl={{ antialias: true }}
            gl={{
              antialias: true,
              powerPreference: "high-performance",
            }}
            // frameloop="demand"
            // performance={{ min: 0.5 }}
            // camera={{ position: [0, 0, 10], fov: 60 }}
          >
            <Scene parentRef={main} progressLine={progressLine} />
          </Canvas>
          </Suspense>
          <Loader />
        </div>
      </div>

      <div className="absolute top-[30%] left-0 w-full">
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="text-[100px] font-semibold text-white uppercase mb-4 title1">
              Securing Every Horizon
            </h2>
          </div>
        </div>
      </div>


      <div className="absolute bottom-[100px] left-0 w-full">
        <div className="container">
          <div className="max-w-[500px]">
            <h2 className="text-5xl font-semibold text-white uppercase mb-4 title2">
              Securing dubai from above
            </h2>
          </div>
        </div>
      </div>
      <div className="absolute top-[200px] left-0 w-full">
        <div className="container">
          <div className="max-w-[500px]">
            <h2 className="text-5xl font-semibold text-white uppercase mb-4 title3">
              On the ground around the clock
            </h2>
          </div>
        </div>
      </div>

      <div className="absolute top-[200px] left-0 w-full">
        <div className="container">
          <div className="max-w-[500px]">
            <h2 className="text-5xl font-semibold text-white uppercase mb-4 title4">
              Securing our shores
            </h2>
          </div>
        </div>
      </div>

      <ContactPopup />
    </section>
  );
}
