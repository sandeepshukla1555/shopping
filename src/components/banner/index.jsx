import React from 'react'
import iphoneBanner from "../../../public/banner/iphone.png";
import iphoneIcon from "../../../public/banner/banner-icon/iphone-icon.png";
import { IoIosArrowRoundForward } from "react-icons/io";
const Banner = ({title, buttonText}) => {
  return (
    <div className="flex-grow w-full px-8 pt-8 h-full">
          <div className="bg-black flex justify-between items-center py-4">
            <div className="px-5">
              <img src={iphoneIcon} className="w-44 mb-8" />
              <div className="text-4xl text-white font-extrabold mb-5">
                {title}
              </div>
              <button className="text-white flex justify-center items-start gap-1">
                {buttonText}
                <IoIosArrowRoundForward className="w-8 h-8" />
              </button>
            </div>
            <img src={iphoneBanner} className="w-1/2 min-w-1/2" />
          </div>
        </div>
  )
}

export default Banner
