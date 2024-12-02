import React from 'react'
import { FcBusinesswoman, FcElectronics, FcManager } from 'react-icons/fc';
import { GiJewelCrown } from 'react-icons/gi';

const Category = ({cateItem}) => {
  
  const categories = {
    "men's clothing": <FcManager className="w-16 h-16" />,
    "women's clothing": <FcBusinesswoman className="w-16 h-16" />,
    "electronics": <FcElectronics className="w-16 h-16" />,
    "jewelery": <GiJewelCrown className="w-16 h-16" />,
  };
  const categoriesTitle = {
    "men's clothing": "Man",
    "women's clothing": "Woman",
    "electronics": "Electronics",
    "jewelery": "Jewelery",
  };
  return (
    <button className='border border-stone-800/10 p-4 w-32 h-32 rounded-md flex justify-center items-center hover:bg-rose-500 hover:text-white flex-col gap-2'>
        {categories[cateItem]}
        <span>{categoriesTitle[cateItem]}</span>
    </button>
  )
}

export default Category
