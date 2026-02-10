"use client";

import { FiTrendingUp, FiSearch } from "react-icons/fi";
import { RiInstagramLine } from "react-icons/ri";
import { HiOutlineCursorClick } from "react-icons/hi";
import { IoBarChartOutline } from "react-icons/io5";

const classIcon = "text-4xl md:text-6xl text-white absolute";

export default function HomeHeroIcons() {
  return (
    <div className="relative size-60 md:size-70 mx-auto">
      {/* <div className="animate-[bounce_2s_infinite] border border-white rounded-full flex items-center size-28 text-6xl justify-center p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> */}
      <div className="border border-white rounded-full flex items-center size-26 text-5xl md:text-6xl justify-center p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <HiOutlineCursorClick />
      </div>
      <div className={`${classIcon} left-0 top-0`}>
        <FiTrendingUp />
      </div>
      <div className={`${classIcon} right-0 top-0`}>
        <RiInstagramLine />
      </div>
      <div className={`${classIcon} right-0 bottom-0`}>
        <IoBarChartOutline />
      </div>
      <div className={`${classIcon} bottom-0 left-0`}>
        <FiSearch />
      </div>
    </div>
  );
}
