import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { asideBarList } from "../../utils";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { CategoriesAction } from "../../saga/actions/productAction";

import { FcManager } from "react-icons/fc"; //for man
import { FcBusinesswoman } from "react-icons/fc"; //for woman
import { FcElectronics } from "react-icons/fc"; //for electronic
import { GiJewelCrown } from "react-icons/gi"; //for jewelery

const CategoryAsidebar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CategoriesAction());
  }, []);
  const products = useSelector((state) => state?.categories?.categories);
  const categories = {
    "men's clothing": <FcManager className="w-6 h-6" />,
    "women's clothing": <FcBusinesswoman className="w-6 h-6" />,
    electronics: <FcElectronics className="w-6 h-6" />,
    jewelery: <GiJewelCrown className="w-6 h-6" />,
  };

  return (
    <div className="flex flex-col gap-5 pl-4 w-full scrollbarNone">
      {products?.map((link, index) => {
        return (
          <div key={index}>
            <Link
              to={link}
              className="text-stone-800 font-thin text-sm flex justify-between py-2 px-2 hover:bg-stone-300 rounded-sm gap-2"
            >
              {categories[link]}
              <span className="flex-grow">{link} </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryAsidebar;
