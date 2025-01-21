"use client";
import Image from "../Image/image";
import SideBarMenu from "../SideBarMenu";

const LogoBar = ({ isScrolled }) => {
  return (
    <div className="logo-bar pt-2 sm:pt-6 pb-2">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="sm:hidden">
            <SideBarMenu isScrolled={isScrolled} />
          </div>
          <div className="aspect aspect-[180/72] h-[72px] relative hidden sm:block">
            <Image
              src="/images/logo-gov-dubai.svg"
              className="object-cover"
              fill
              alt="Logo of dubai government"
            />
            <Image
              src="/images/logo-color.svg"
              className={`object-cover duration-500 ease-in-out ${
                isScrolled ? "opacity-100" : "opacity-0"
              }`}
              fill
              alt="Logo of dubai government"
            />
          </div>
          <div className="aspect aspect-[156/54] h-9 sm:h-11   relative">
            <Image
              src="/images/logo-dubai-police.svg"
              className="object-cover"
              fill
              alt="Logo of Dubai Police"
            />
            <Image
              src="/images/dubai-police-logo-color.svg"
              className={`object-cover duration-500 ease-in-out ${
                isScrolled ? "opacity-100" : "opacity-0"
              }`}
              fill
              alt="Logo of dubai government"
            />
          </div>

          <div className="sm:hidden">
            S
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoBar;
