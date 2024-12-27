"use client";
import Image from "@/components/Image/image";
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
  FreeMode,
  Thumbs,
} from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
// import 'swiper/css/pagination';
import "swiper/css/autoplay";
import style from "./HomeBanner.module.scss";
import { Canvas } from "@react-three/fiber";
import Scene from "../Scene";
import { useGSAP } from "@gsap/react";
import { Expo, Power3, gsap, Elastic } from "gsap";
import { Suspense, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ContactPopup } from "@/components/ContactPopup";

export default function HomeBanner({ parentRef }) {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);

  useGSAP(
    (context, contextSafe) => {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          end: "600%",
          scrub: true,
          pin: true,
        },
      });

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
            {/* <color attach={"background"} args={["black"]} /> */}
            {/* <color attach="background" args={["#ececec"]} /> */}
            <Suspense fallback={null}>
              
            <Scene parentRef={main} />
            
            </Suspense>
          </Canvas>
        </div>
      </div>
      <ContactPopup/>
    </section>
  );
}
