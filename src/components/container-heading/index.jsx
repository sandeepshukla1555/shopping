import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";


const ContainerHeading = ({ timeStatus, title, button }) => {
  return (
    <div className="flex justify-between items-end">
      <div>
        <div className='text-rose-600 text-sm font-medium before:absolute before:rounded-sm before:w-2.5 before:h-6 before:content-[""] before:block before:bg-rose-600 relative pl-5 before:left-0 mb-6'>
          {timeStatus}
        </div>
        <div className="text-4xl font-medium text-stone-800">{title}</div>
      </div>
      <div>{button === 'double' ? <div className="flex justify-center items-center gap-2">
        <RiArrowLeftSLine className="text-stone-800 w-8 h-8 bg-stone-400/50 p-1 rounded-full cursor-pointer hover:bg-stone-500"/>
        <RiArrowRightSLine  className="text-stone-800 w-8 h-8 bg-stone-400/50 p-1 rounded-full cursor-pointer hover:bg-stone-500"/>
      </div> : <button className="text-sm text-white bg-rose-500 py-1.5 px-4 rounded-sm">
            View All
        </button>}</div>
    </div>
  );
};

export default ContainerHeading;
