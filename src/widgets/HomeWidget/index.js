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
      <HomeCanvas parentRef={parentRef} />
  );
}
