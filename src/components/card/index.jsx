import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addCartAction } from "../../redux/actions/cartAction";

const Card = ({ cartItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-4 relative border border-stone-100/80 p-1 rounded-md">
      <button
        onClick={() => dispatch(addCartAction(cartItem))}
        className="p-1 bg-stone-800/20 rounded-full absolute top-1 right-1 w-11 h-11 flex justify-center items-center shadow-2xl"
      >
        <FaCartShopping className="text-red-500 hover:text-red-800 w-8 h-8 cursor-pointer" />
      </button>
      <div className="bg-stone-100 rounded-md p-8 flex justify-center items-center h-48 max-h-48">
        <img className="max-w-32 max-h-32 w-32" src={cartItem?.image} />
      </div>
      <div>
        <div className="line-clamp-1">{cartItem?.title}</div>
        <div className="flex items-center gap-2">
          <div className="text-sm font-normal text-red-400">
            <span className="text-stone-800 font-bold">Price: </span>
            {cartItem?.price}
          </div>
        </div>
        <div className="flex flex-col justify-between">
        <div className="text-sm font-normal text-stone-400 border-t border-t-stone-300 mt-3 pt-2">
            <span className="text-green-500 font-bold">Rating :</span>
            {cartItem?.rating?.count}
          </div>
          <div className="text-amber-400 flex gap-2">
            <FaStar className="w-5 h-5" />
            <FaStar className="w-5 h-5" />
            <FaStar className="w-5 h-5" />
            <FaStar className="w-5 h-5" />
            <FaStar className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
