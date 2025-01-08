"use client";
import { useRef } from "react";
import HomeCanvas from "../HomeCanvas";
import dynamic from 'next/dynamic'
 
// const HomeCanvas = dynamic(() => import('../HomeCanvas'), {
//   loading: () => <p>Loading...</p>,
//   ssr: false
// })

export default function HomeWidget({}) {
  const parentRef = useRef(null);
  return (
    <>
    {/* <div className="absolute top-[0%] right-0 w-[200px] h-[2px] bg-[red] z-50"></div>
      <div className="absolute top-[10%] right-0 w-[200px] h-[2px] bg-[red] z-50"></div>
      <div className="absolute top-[100%] right-0 w-[200px] h-[2px] bg-[red] z-50"></div> */}
      <HomeCanvas parentRef={parentRef} />
    </>
   
  );
}
