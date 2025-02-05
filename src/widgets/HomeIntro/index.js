"use client"
import React from "react";
import useHomeIntro from "./useHomeIntro";
import Image from "@/components/Image/image";

const HomeIntro = () => {
  const { main, handleSmartClick } = useHomeIntro();

  return (
    <>
      <section className="min-h-screen section1 flex bg-white text-black flex-col justify-between pt-[120px]  pb-[120px] relative z-10 pointer-events-none" ref={main}>
        
        <div className="absolute top-0 left-0 w-full h-full bg-main-wrapper">
          <Image src="/images/bg.jpg" alt="bg-main" fill className="object-cover opacity-20"/>
        </div>
        <div className="container">
          <div className=" z-10 relative ">
          <button onClick={handleSmartClick}>Smart</button>
            {titles.map((title, index) => (
              <div key={index} className="overflow-hidden title-main">
                <h2 className="text-[60px] uppercase  font-bold leading-none ">
                 <span className="block">{title}</span>
                </h2>
              </div>
            ))}
          </div>

          <div className="absolute top-[30%] left-[30%] hidden  inset-0 bg-slate-500 w-[800px] h-[500px] bg-main-wrapper">
            <div className="w-full absolute top-0 left-0 h-full bg-red-500  bg-main"></div>
            <div className="w-full absolute top-0 left-0 h-full bg-green-500 bg-main  "></div>
            <div className="w-full absolute top-0 left-0 h-full bg-orange-500 bg-main"></div>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-2 content">
            <div></div>
            <div>
              <p className="text-[32px] font-light opacity-50">Dubai Police Force was established on June 01, 1956, and was based in &#34;Naif Fort,&#34; as its Headquarters, until the year 1973 when it was moved to the current location. &#34;Naif Fort&#34; was transformed, later, into one of Dubai Police Stations.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="">
            {titles.map((title, index) => (
              <div key={index} className="overflow-hidden">
                <h2 className="text-[72px] uppercase  font-bold leading-tight title-sec">
                  {title}
                </h2>
              </div>
            ))}
          </div>
        </div> */}
      
      </section>
    </>
  );
};

export default HomeIntro;
const titles = ["Smart", "Secure", "Together"];
