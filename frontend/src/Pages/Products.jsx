import React, { useEffect, useState } from "react";
import ProductsSidebar from "../Components/ProductsSidebar";
import ProductsNavigation from "../Components/ProductsNavigation";
import ProductCard from "../Components/ProductCard";
import { IoOptionsOutline } from "react-icons/io5";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import MobileSortingProducts from "../Components/MobileSortingProducts";
import MobileProductsFiltering from "../Components/MobileProductsFiltering";
import axios from "axios";

const Products = () => {
  const [isSortingBtnClicked, setIsSortingBtnClicked] = useState(false);
  const [isFilteringBtnClicked, setIsFilteringBtnClicked] = useState(false);
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`http://localhost:3000/products`);
      setProducts(res.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = products.filter((product) => {
    return (
      product.price / 10000 >= priceRange[0] &&
      product.price / 10000 <= priceRange[1]
    );
  });

  return (
    <div className="px-8 sm:container flex flex-wrap gap-8 mb-16">
      <div className="hidden md:block flex-1 mt-8 text-slate-600 dark:text-slate-300">
        <ProductsSidebar
          priceValue={priceRange}
          onValueChange={setPriceRange}
          searchValue={searchInput}
          onSearch={setSearchInput}
        />
      </div>
      <div className="md:hidden flex-grow flex items-center justify-between gap-4 mt-8 text-slate-600 dark:text-white">
        <div
          className="bg-white dark:bg-zinc-900 flex-grow flex items-center gap-4 p-6 rounded-xl shadow-lg cursor-pointer"
          onClick={() => setIsFilteringBtnClicked(!isFilteringBtnClicked)}
        >
          <IoOptionsOutline className="text-4xl" />
          فیلتر
        </div>
        {isFilteringBtnClicked && (
          <MobileProductsFiltering close={setIsFilteringBtnClicked} />
        )}
        <div
          className="bg-white dark:bg-zinc-900 flex-grow flex items-center gap-4 p-6 rounded-xl shadow-lg cursor-pointer"
          onClick={() => setIsSortingBtnClicked(!isSortingBtnClicked)}
        >
          <HiOutlineBarsArrowDown className="text-4xl" />
          مرتب‌سازی
        </div>
        {isSortingBtnClicked && (
          <MobileSortingProducts close={setIsSortingBtnClicked} />
        )}
      </div>
      <div className="md:flex-[3] mt-20 lg:mt-8 text-slate-600 dark:text-slate-300">
        <ProductsNavigation />
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 md:mt-8">
          <>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default Products;
