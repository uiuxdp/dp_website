"use client";
import { useStickyBar } from "./useStickyBar";

const StickyBar = ({}) => {
  const { isScrollingDown, main } = useStickyBar();
  return (
    <div
      ref={main}
      className={`fixed bottom-0 left-0 z-[48] w-full duration-500 ease-in-out bg-gradient-to-b  pb-6 lg:pb-0`}
    >
      <div
        className={`sub-header duration-500 ease-in-out lg:bg-white `}
      >
        <div className="container flex justify-between">
          <div className="gap-2 lg:gap-0 flex items-center">
            <button
              className="text-2xl lg:text-[32px]  bg-white rounded-full lg:rounded-none p-3 lg:p-4 lg:border-0  lg:border-r  group hover:bg-slate-300 will-change-transform ease-in-out duration-500 text-primary inline-flex"
              aria-label="happiness"
            >
              <span className="">
                <i className="icon-happiness block will-change-transform ease-in-out duration-500 group-hover:scale-110"></i>
              </span>
            </button>
            <button
              className="text-2xl lg:text-[32px]  bg-white rounded-full lg:rounded-none p-3 lg:p-4 lg:border-0  lg:border-r  group hover:bg-slate-300 will-change-transform ease-in-out duration-500 text-primary inline-flex"
              aria-label="Voice of Customer"
            >
              <span className="">
                <i className="icon-o4 block will-change-transform ease-in-out duration-500 group-hover:scale-110"></i>
              </span>
            </button>
            <button
              className="text-2xl lg:text-[32px]  bg-white rounded-full lg:rounded-none p-3 lg:p-4 lg:border-0  lg:border-r  group hover:bg-slate-300 will-change-transform ease-in-out duration-500 text-primary inline-flex items-center"
              aria-label="Services"
            >
              <span className="">
                <i className="icon-apps block will-change-transform ease-in-out duration-500 group-hover:scale-110"></i>
              </span>
              <span className="text-[16px] ms-2 hidden lg:block ">
                Services
              </span>
            </button>
          </div>
          <div>
            <button
              className="text-2xl p-4  border-0 border-r group  hover:bg-slate-300 will-change-transform ease-in-out duration-500 "
              aria-label="Location"
            >
              <i className="icon-location block will-change-transform ease-in-out duration-500 group-hover:scale-110"></i>
            </button>

            <button
              className="text-2xl p-4  border-0 border-r group  hover:bg-slate-300 will-change-transform ease-in-out duration-500 "
              aria-label="Chat"
            >
              <i className="icon-chat block will-change-transform ease-in-out duration-500 group-hover:scale-110"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;
