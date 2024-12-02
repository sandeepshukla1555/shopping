import React, { useEffect, useState } from "react";
import CategoryAsidebar from "../category-asidebar";
import Banner from "../banner";
import ContainerHeading from "../container-heading";
import Card from "../card";
import { useDispatch, useSelector } from "react-redux";
import { CategoriesAction, ProductAction } from "../../saga/actions/productAction";
import Category from "../category";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductAction());
    dispatch(CategoriesAction())
  }, []);
  const products = useSelector((state) => state);
  const allProducts = products?.products?.data;
  const categories=products?.categories?.categories;
  const cartItem=products?.cart
  console.log("=========", products)
  return (
    <main>
      <section className="flex justify-between max-h-[21.4rem] mb-36 px-9">
        <div className="border-r border-r-stone-300 py-8 pr-5 w-60 h-full overflow-scroll max-h-[21.4rem] scrollbarNone">
          <CategoryAsidebar />
        </div>
        <Banner title={"Up to 10% off Voucher"} buttonText={"Shop Now"} />
      </section>
      <section>
        <div className="px-9 mb-10">
          <ContainerHeading
            timeStatus={"Today`s"}
            title={"All Products"}
            button={"double"}
          />
        </div>
        <div className="flex items-center gap-4 overflow-scroll first:ml-5 scrollbarNone mb-14 pr-8">
          {allProducts?.map((item, index) => {
            return <div key={index} className="first:pl-8">
              <Card cartItem={item} />
            </div>
          })}
        </div>
        <div className="flex justify-center items-center mb-14">
          <button className="text-sm text-white bg-rose-500 py-3 px-8 rounded-sm mx-auto">
            View All Products
          </button>
        </div>
      </section>
      <section className="flex flex-col">
      <div className="px-9 mb-10">
          <ContainerHeading
            timeStatus={"Categories"}
            title={"All Categories"}
            button={"single"}
          />
        </div>
         <div className="flex justify-center sm:gap-5 md:gap-8 lg:gap-12 items-center mb-36 px-9">
         {categories?.map((catItem, index)=><div key={index}><Category cateItem={catItem}/></div>)}
         </div>
      </section>
      <section>
        <div className="px-9 mb-10">
          <ContainerHeading
            timeStatus={"Cart Item's"}
            title={"All Cart Products"}
            button={"double"}
          />
        </div>
        <div className="flex items-center gap-4 overflow-scroll first:ml-5 scrollbarNone mb-14 pr-8">
          {cartItem?.map((item, index) => {
            return <div key={index} className="first:pl-8">
              <Card cartItem={item} />
            </div>
          })}
        </div>
        <div className="flex justify-center items-center mb-14">
          <button className="text-sm text-white bg-rose-500 py-3 px-8 rounded-sm mx-auto">
            View All Products
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
