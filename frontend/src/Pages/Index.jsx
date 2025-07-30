import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Discounts from "../Components/Discounts";
import SectionHeader from "../Components/SectionHeader";
import SpecialOffers from "../Components/SpecialOffers";
import NewProducts from "../Components/NewProducts";
import Categories from "../Components/Categories";
import BestSellerProducts from "../Components/BestSellerProducts";
import Articles from "../Components/Articles";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-4 sm:container py-16">
      <Discounts />
      <SectionHeader title="پیشنهادات ویژه" btn="allproducts" />
      <SpecialOffers />
      <SectionHeader title="جدیدترین محصولات" btn="allproducts" />
      <NewProducts />
      <Categories />
      <SectionHeader title="پرفروش‌ترین محصولات" btn="allproducts" />
      <BestSellerProducts />
      <SectionHeader title="مطالب خواندنی" btn="allarticles" />
      <Articles />
    </div>
  );
};

export default Index;
