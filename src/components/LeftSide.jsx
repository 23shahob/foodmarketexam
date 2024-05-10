import React from "react";

import SiteLogo from "../../public/logo.svg";
import { GoHome } from "react-icons/go";
import { RiDiscountPercentLine } from "react-icons/ri";
import { PiChartPieSliceBold } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import Rectangle from "../../public/rectangle.svg";
import { TbLogout } from "react-icons/tb";

const LeftSide = () => {
  return (
    <div className="bg-opacity">
      <div className="relative w-[104px] h-[850px] rounded-2xl bg-[#1F1D2B] p-3">
        <div className="mb-3 p-4">
          <img className="h-14 w-14 cursor-pointer" src={SiteLogo} alt="" />
        </div>
        <img
          src={Rectangle}
          className="absolute right-[-1.5px] top-[100px]"
          alt=""
        />
        <ul className="mb-[58px] flex justify-center items-center flex-col gap-y-[22px]">
          <li className="flex h-20 w-[104px] mr-[-12px] pr-3 items-center justify-center rounded-l-lg  bg-[#252836]">
            <GoHome className="active h-14 w-14 rounded-lg bg-[#EA7C69] p-4 text-white" />
          </li>
          <img
            src={Rectangle}
            className="absolute right-[-1px] top-[191px] h-3 w-3 rotate-[270deg]"
            alt=""
          />
          <li className="flex h-20 w-[92px] items-center justify-center transition-all duration-300 ease-in-out">
            <RiDiscountPercentLine className="actives h-14 w-14 rounded-lg p-4 text-[#EA7C69] transition-all duration-300 ease-in-out hover:bg-[#EA7C69] hover:text-white" />
          </li>
          <li className="flex h-20 w-[92px] items-center justify-center transition-all duration-300 ease-in-out">
            <PiChartPieSliceBold className="actives h-14 w-14 rotate-90 rounded-lg p-4 text-[#EA7C69] transition-all duration-300 ease-in-out hover:bg-[#EA7C69] hover:text-white" />
          </li>

          <li className="flex h-20 w-[92px] items-center justify-center transition-all duration-300 ease-in-out">
            <IoMailOutline className="actives h-14 w-14 rounded-lg p-4 text-[#EA7C69] transition-all duration-300 ease-in-out hover:bg-[#EA7C69] hover:text-white" />
          </li>
          <li className="flex h-20 w-[92px] items-center justify-center transition-all duration-300 ease-in-out">
            <IoNotificationsOutline className="actives h-14 w-14 rounded-lg p-4 text-[#EA7C69] transition-all duration-300 ease-in-out hover:bg-[#EA7C69] hover:text-white" />
          </li>
          <li className="flex h-20 w-[92px] items-center justify-center transition-all duration-300 ease-in-out">
            <FiSettings className="actives h-14 w-14 rounded-lg p-4 text-[#EA7C69] transition-all duration-300 ease-in-out hover:bg-[#EA7C69] hover:text-white" />
          </li>
        </ul>
        <div className="flex h-20 w-[92px] cursor-pointer items-center justify-center p-4">
          <TbLogout className="h-6 w-6 text-[#EA7C69]" />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
