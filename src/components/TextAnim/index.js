import React, { useRef, useEffect, Suspense, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Billboard, Html, Text } from "@react-three/drei";
import { useRecoilState } from "recoil";
import { dialogState } from "@/recoil/atoms";

const TextAnim = ({ parentRef }, props) => {
  gsap.registerPlugin(ScrollTrigger);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef();
  const text1 = useRef();
  const text2 = useRef();
  const [isDialogOpen, setIsDialogOpen] = useRecoilState(dialogState);
  useEffect(() => {
    setLoaded(true);
  }, []);
  useGSAP(
    (context, contextSafe) => {
      gsap.set(text1.current, { opacity: 0 });
      gsap.set(text2.current, { opacity: 0 });
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: parentRef.current,
          start: "top top",
          // markers: true,
          end: "600%",
          scrub: true,
        },
      });
      //   console.log(model,"modelmodel");
      tl1.to(text1.current, { opacity: 1, duration: .5 });
      tl1.to(text2.current, { opacity: 1, duration: .5 });
      // tl1.to(text1.current.position, { y: 0, delay:.01, duration: .1 },"<");

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
    { scope: ref, dependencies: [] }
  );

  return (
    <group {...props} ref={ref} dispose={null}>
      {/* <Billboard
   
        position={[-10, 5, -40]}
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false}
      >
    
        <Text ref={text1} maxWidth={14} fontSize={1.5} fontWeight={600}>
          SECURING DUBAI FROM ABOVE
        </Text>
      </Billboard> */}
      {loaded && (
        <Html
          transform
          zIndexRange={[0, -40]}
          position={[-10, 5, -40]}
          scale={0.7}
          className="max-w-[500px]"
          rotation={[0, Math.PI / 1.2, 0]}
          ref={text1}
        >
          <h1 className="text-5xl font-semibold text-white uppercase mb-4">
            {" "}
            SECURING DUBAI FROM ABOVE
          </h1>
          <p className="text-white mb-6">
            On the ground around the clock On the ground around the clockOn the
            ground around the clock
          </p>
          <button
            className="rounded-full text-white bg-slate-800 py-4 px-6 text-sm me-2"
            onClick={() => {
              setIsDialogOpen(true);
              console.log(dialogState, isDialogOpen);
            }}
          >
            Oyoon
          </button>
        </Html>
      )}

      {/* <Billboard
      onClick={()=>{setIsDialogOpen(true)
        console.log(dialogState,isDialogOpen);
      }}
      ref={text2}
        position={[-10, 3, -10]}
        rotation={[0, -Math.PI / 1.2, 0]}
        follow={false}
        lockX={false}
        lockY={false}
        lockZ={false}
      > */}
      {loaded && (
        <Html
          transform
          position={[-10, 6, -10]}
          scale={0.7}
          className="max-w-[500px]"
          rotation={[0, -Math.PI / 1.2, 0]}
          ref={text2}
        >
          <h1 className="text-5xl font-semibold text-white uppercase mb-4">
            {" "}
            On the ground around the clock
          </h1>
          <p className="text-white mb-6">
            On the ground around the clock On the ground around the clockOn the
            ground around the clock
          </p>
          <button
            className="rounded-full text-white bg-slate-800 py-4 px-6 text-sm me-2"
            onClick={() => {
              setIsDialogOpen(true);
              console.log(dialogState, isDialogOpen);
            }}
          >
            Home security
          </button>

          <button
            className="rounded-full text-white bg-slate-800 py-4 px-6 text-sm"
            onClick={() => {
              setIsDialogOpen(true);
              console.log(dialogState, isDialogOpen);
            }}
          >
            On the go
          </button>
        </Html>
      )}
      {/* <Text maxWidth={5} fontSize={0.6} fontWeight={600}>
          On the ground around the clock
        </Text>
        <Text position={[0, -1.3, 0]} maxWidth={5} fontSize={0.2} >
          On the ground around the clock On the ground around the clockOn the ground around the clock
        </Text> */}
      {/* </Billboard> */}
    </group>
  );
};

export default TextAnim;
