"use client";
import Link from "next/link";
import Image from "../Image/image";
import SideBarMenu from "../SideBarMenu";

const MenuBar = ({isScrolled}) => {
  return (
    <div className="menu-bar ">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <ul>
              <li className="inline-block">
                <SideBarMenu />
              </li>
              {menu?.map((item, i) => {
                return (
                  <li className="px-4 inline-block" key={i}>
                    <Link href="/" className={`py-5 duration-500 ease-in-out inline-block ${isScrolled?"text-[#1a1a1a]":"  text-white"}`}>
                      {item?.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex items-end">
            <button className="min-w-10 h-10 px-4 py-2 bg-black/5 rounded-full text-white text-sm font-medium leading-tight">
              العربية
            </button>
            <button className="min-w-10 h-10 pl-2 pr-4 py-2 bg-black/5 rounded-full  items-center gap-2 inline-flex text-white text-sm font-normal leading-tight">
              <div className="w-6 h-6 p-0.5 justify-center items-center flex" />
              <div className="">Login</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;

const menu = [
  {
    title: "Home",
  },
  {
    title: "About Us",
  },
  {
    title: "Open Data",
  },
  {
    title: "Application Status",
  },
  {
    title: "Information",
  },
  {
    title: "Media",
  },
];
