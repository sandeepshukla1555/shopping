import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';


const Header = () => {
  const cart=useSelector(state=>state?.cart)
  return (
    <header className='flex justify-between items-center gap-3 py-4 sticky top-0 bg-white px-4 border-b border-b-stone-200 z-10'>
         <Link to='/' className='text-2xl font-extrabold text-stone-800'>Sandeep Shukla</Link>
         <div className='flex-grow flex justify-center items-center gap-12'>
             <Link to='/' className={`text-base font-normal underline hover:text-black active:text-blact`}>Home</Link>
             <Link to='/about' className={`text-base text-black/60 hover:text-black font-normal underline`}>About</Link>
             <Link to='/contact' className={`text-base text-black/60 hover:text-black font-normal underline`}>Contact</Link>
             <Link to='/signup' className={`text-base text-black/60 hover:text-black font-normal underline`}>Sign-Up</Link>
         </div>
         <div className='flex gap-6 items-center'>
            <div className='relative'>
               <input type="text" placeholder='What are you looking for?' className='placeholder:text-stone-500 bg-stone-100 rounded-lg py-2 pl-5 pr-12 text-stone-800 relative text-sm'/>
               <IoIosSearch className='text-stone-500 w-6 h-6 absolute right-1 top-1/2 transform -translate-y-1/2'/>
            </div>
            <FaRegHeart className='text-stone-800 w-6 h-6 cursor-pointer'/>
            <div className='relative'>
              <MdOutlineShoppingCart className='text-stone-800 w-6 h-6 cursor-pointer relative'/>
              <div className='w-5 h-5 bg-stone-800/45 rounded-full p-1 absolute -top-2.5 -right-2.5 text-xs flex justify-center items-center text-stone-100'>{cart?.length}</div>
            </div>
         </div>
    </header>
  )
}

export default Header
