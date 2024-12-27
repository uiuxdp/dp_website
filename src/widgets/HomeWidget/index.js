"use client";
import HomeBanner from "@/widgets/HomeBanner";
import { useRef } from "react";

export default function HomeWidget({}) {
  const parentRef = useRef(null);
  return (
    <>
      <HomeBanner parentRef={parentRef} />
      {/* <section className="min-h-screen section1  flex items-end pb-[120px] relative z-10 pointer-events-none">
        <div className="container">
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-[72px] text-white font-bold leading-tight">
                Securing Dubai from Above
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen section2  flex items-end pb-[120px] relative z-10 pointer-events-none">
        <div className="container">
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-[72px] text-white font-bold leading-tight">
                Securing Dubai from Above
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen section3  flex items-end pb-[120px] relative z-10 ">
        <div className="container">
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-[72px] text-white font-bold leading-tight">
                Securing Dubai from Above
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen section4  flex items-end pb-[120px] relative z-10 pointer-events-none">
        <div className="container">
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-[72px] text-white font-bold leading-tight">
                Securing Dubai from Above
              </h1>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
