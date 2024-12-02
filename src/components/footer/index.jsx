import React from 'react'
import { IoSendSharp } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { AiTwotoneCopyright } from "react-icons/ai";




const Footer = () => {
  return (
    <div className='bg-black pt-20 pb-6'>
      <div className='flex justify-between gap-4 px-32 pb-16'>
      <div className='w-1/5'>
         <h3 className='text-white text-2xl font-semibold mb-6 text-left'>Sandeep shukla</h3>
         <h4 className='text-white text-xl font-normal mb-6 text-left'>Subscribe</h4>
         <div className='text-white text-base font-thin mb-4 text-left'>Get 10% off your first order</div>
         <div className='relative'>
            <input type="text" placeholder='Enter your email' className='placeholder:text-stone-500 bg-stone-300 text-stone-300 border border-white rounded-lg py-2 pl-4 pr-3 relative w-full'/>
            <IoSendSharp className='text-stone-800 w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-1'/>
         </div>
      </div>
      <div className='w-1/5'>
         <div className='text-xl font-medium text-white mb-6'>Support</div>
         <div className='text-base font-thin text-white mb-4'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</div>
         <div className='text-base font-thin text-white mb-4'>exclusive@gmail.com</div>
         <div className='text-base font-thin text-white mb-4'>+88015-88888-9999</div>
      </div>
      <div className='w-1/5'>
      <div className='text-xl font-medium text-white mb-6'>Account</div>
         <div className='text-base font-thin text-white mb-4'>My Account</div>
         <div className='text-base font-thin text-white mb-4'>Login / Register</div>
         <div className='text-base font-thin text-white mb-4'>Cart</div>
         <div className='text-base font-thin text-white mb-4'>Wishlist</div>
         <div className='text-base font-thin text-white mb-4'>Shop</div>
      </div>
      <div className='w-1/5'>
      <div className='text-xl font-medium text-white mb-6'>Quick Link</div>
         <div className='text-base font-thin text-white mb-4'>Privacy Policy</div>
         <div className='text-base font-thin text-white mb-4'>Terms Of Use</div>
         <div className='text-base font-thin text-white mb-4'>FAQ</div>
         <div className='text-base font-thin text-white mb-4'>Contact</div>
      </div>
      <div className='w-1/5'>
      <div className='text-xl font-medium text-white mb-6'>Download App</div>
         <div className='text-sm font-thin text-white/80 mb-4'>Save $3 with App New User Only</div>
         <div className='text-base font-thin text-white mb-4 flex gap-5'>
              <button className='text-base font-thin text-white mb-4 hover:text-stone-500'><CiFacebook className='w-5 h-5'/></button>
              <button className='text-base font-thin text-white mb-4 hover:text-stone-500'><CiTwitter className='w-5 h-5'/></button>
              <button className='text-base font-thin text-white mb-4 hover:text-stone-500'><CiLinkedin className='w-5 h-5'/></button>
              <button className='text-base font-thin text-white mb-4 hover:text-stone-500'><CiInstagram className='w-5 h-5'/></button>
         </div>
      </div>
      </div>

      <div className='w-full pt-4 border-t border-t-stone-800 text-sm font-thin text-stone-500 flex justify-center items-center gap-2'><AiTwotoneCopyright className='w-5 h-5'/>Copyright of Sandeep Shukla 2024 All right reserved</div>
    </div>
  )
}

export default Footer
