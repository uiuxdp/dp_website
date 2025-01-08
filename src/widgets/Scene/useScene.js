"use client";
import { Expo, Power3, gsap, Elastic } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useGetDeviceType from "@/hooks/useGetDeviceType";
import { useGSAP } from "@gsap/react";
import { Html, useProgress } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

gsap.config({ force3D: true });
export const useScene = ({parentRef}) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);
//   const model = useRef(null);
  const [model, setModel] = useState()
  const modelWrap =useRef()
  const cameraRef=useRef()
  const { width } = useGetDeviceType();
  const isLoaded = true;
   
  function Loader() {
    const { active, progress, errors, item, loaded, total } = useProgress();
    // if (!isLoaded) {
    //   gsap.context((self) => {
    //     const grill1 = self.selector(".shield-1");
    //     const grill2 = self.selector(".shield-2");
    //     grill2[0].style.transform = `rotate(${
    //       -90 - (progress / 100) * (-90 - -135)
    //     }deg)`;
    //     grill1[0].style.transform = `rotate(${
    //       0 - (progress / 100) * (0 - 45)
    //     }deg)`;
    //     if (progress === 100) {
    //       gsap.to(loadingRef.current, {
    //         opacity: 0,
    //         duration: 1,
    //         delay: 0.6,
    //         ease: "expo.inOut",
    //       });
    //       gsap.to(loadingRef.current, {
    //         scale: 1,
    //         duration: 0.5,
    //         delay: 0.6,
    //         ease: "expo.inOut",
    //       });

    //       setLoaded(true);
    //     }
    //   }, loadingRef);
    // }

    // return <></>;
    return <Html center>{Math.floor(progress)}%</Html>;
  }




  useGSAP(
    (context, contextSafe) => {
        const trigger1 = context.selector('.trigger-1')
      if (isLoaded) {
        if (model) {
        //   gsap.set(model.position, { x: 0, z:6, y: -1 });
        //   gsap.set(model.rotation, { x: 1,  });

          const tl1 = gsap.timeline({
            scrollTrigger: {
              trigger: main.current,
              end: "100%",
              scrub: true,
            },
          }); 
        //   console.log(model,"modelmodel");
          // tl1.to(cameraRef.current?.rotation, { y: Math.PI/2 });
          // tl1.to(cameraRef.current?.position, { y: 3},"<");
        //   tl1.to(model.position, { x: 3 });
        //   tl1.to(model.position, { x: 2 });
        //   tl1.to(model.position, { x: 0 });
        //   tl.to(model.position, { y: 3 });
         
        //   tl.to(model.rotation, { x: 1 },"<"); 
        //   tl.to(model.position, { x: 3 });
        //   tl.to(model.position, { x: -3 });

            // const tl = gsap.timeline({ repeat: 0, paused: true });
            // tl.fromTo(modelWrap.current?.rotation,{ x: 1, z:0, y: 0, ease: Expo.easeOut, duration: 3 },{ x: 0, z:0, y: 0 , ease: Expo.easeOut, duration: 3 },0);
            // tl.fromTo(modelWrap.current?.position,{ x: 0, z:6, y: -2, ease: Expo.easeOut, duration: 3 },{ x: 2, z:0, y: 1, ease: Expo.easeOut, duration: 3 },0);
            // tl.play(0);
        }

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
      }
    },
    { scope: parentRef, dependencies: [isLoaded, width ,model] }
  );

  return {
    main,
    model,
    Loader,
    setModel,
    modelWrap,
    cameraRef,
    width,
  };
};
