import React, { useContext, useEffect, useState } from "react";
import Breadcrumb from "../Components/Breadcrumb";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineCompare } from "react-icons/md";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa";
import { FiThumbsUp } from "react-icons/fi";
import { FiThumbsDown } from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import ShoesImg from "../Components/ShoesImg";
import ProductColorBox from "../Components/ProductColorBox";
import ProductSizeBox from "../Components/ProductSizeBox";
import toPersianNumber from "../toPersianNumber";
import ProdDetailsBox from "../Components/ProdDetailsBox";
import SpecialOffers from "../Components/SpecialOffers";
import Comment from "../Components/Comment";
import ProductPhotosSlider from "../Components/ProductPhotosSlider";
import AddToCart from "../Components/AddToCart";
import Quantity from "../Components/Quantity";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { useAuth } from "../Contexts/AuthContext";

const ProductDetails = () => {
  const [likeTooltipIsShown, setLikeTooltipIsShown] = useState(false);
  const [compareTooltipIsShown, setCompareTooltipIsShown] = useState(false);
  const [shareTooltipIsShown, setShareTooltipIsShown] = useState(false);
  const [otherProductsAreShown, setOtherProductsAreShown] = useState(false);
  const [productMoreDesc, setProductMoreDesc] = useState(false);
  const [isCommentInputFocused, setisCommentInputFocused] = useState(false);
  const [isCommentTextareaFocused, setisCommentTextareaFocused] =
    useState(false);
  const [shoppingCartCounter, setShoppingCartCounter] = useState(1);
  const [isMoreCommentExists, setIsMoreCommentExists] = useState(false);
  const [productData, setProductData] = useState({});
  const navigate = useNavigate();
  const { productName } = useParams();
  const { user } = useAuth();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products?shortName=${productName}`)
      .then((res) => {
        setProductData(res.data[0]);
      });
  }, [productName]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/cart`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  const addToCart = async () => {
    const existingProduct = cart.find(
      (item) => item.title === productData.title
    );

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.title === productData.title
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...productData, quantity: 1 }]);
    }

    const response = await fetch(`http://localhost:3000/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...cart, productData }),
    });
    if (response.ok) {
      swal({
        title: "محصول با موفقیت به سبد خرید شما اضافه شد.",
        icon: "success",
        buttons: "بسیار عالی",
      }).then(() => {
        navigate("/shopping-cart");
      });
    }
  };

  return (
    <div className="px-8 sm:container text-slate-600 dark:text-slate-300 flex flex-col mb-16">
      <Breadcrumb />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-12">
        <div className="">
          <div className="flex relative items-center gap-8">
            <AiOutlineHeart
              className="cursor-pointer text-4xl transition-all duration-300 ease-in"
              onMouseEnter={() => setLikeTooltipIsShown(true)}
              onMouseLeave={() => setLikeTooltipIsShown(false)}
            />
            {likeTooltipIsShown && (
              <div className="absolute w-60 text-center -top-20 left-8  bg-zinc-700 text-slate-300 rounded-lg text-xl font-bold py-4 px-6 ">
                افزودن به علاقه‌مندی‌ها
              </div>
            )}
            <MdOutlineCompare
              className="cursor-pointer text-4xl"
              onMouseEnter={() => setCompareTooltipIsShown(true)}
              onMouseLeave={() => setCompareTooltipIsShown(false)}
            />
            {compareTooltipIsShown && (
              <div className="absolute w-64 text-center -top-20 -right-10 bg-zinc-700 text-slate-300 rounded-lg text-xl font-bold py-4 px-6 ">
                افزودن به لیست مقایسه
              </div>
            )}
            <AiOutlineShareAlt
              className="cursor-pointer text-4xl"
              onMouseEnter={() => setShareTooltipIsShown(true)}
              onMouseLeave={() => setShareTooltipIsShown(false)}
            />
            {shareTooltipIsShown && (
              <div className="absolute w-40 text-center -top-20 right-[45px] bg-zinc-700 text-slate-300 rounded-lg text-xl font-bold py-4 px-6 ">
                اشتراک گذاری
              </div>
            )}
          </div>

          <div className="p-8">
            <img src={productData.cover} className="rounded-xl" alt="" />
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <ShoesImg />
            <ShoesImg />
            <ShoesImg />
            <div
              className="relative border border-slate-600 rounded-xl p-2 cursor-pointer"
              onClick={() => setOtherProductsAreShown(true)}
            >
              <img src="/images/p1.png" className="blur-md" alt="" />
              <BsThreeDots className="text-4xl absolute hidden 2xl:block top-16 right-16" />
            </div>
          </div>
          {otherProductsAreShown && (
            <ProductPhotosSlider closeBtn={setOtherProductsAreShown} />
          )}
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4 text-2xl text-red-400">
            نایک
            <FaAngleLeft />
          </div>
          <h2 className="text-3xl font-bold dark:text-white">
            {productData.title}
          </h2>
          <div className="flex items-center gap-2">
            <p className="line-clamp-1 text-2xl dark:text-slate-400">
              New Balance Men's Walking Shoes Model Mdrftlm2
            </p>
            <span className="h-0.5 flex-grow bg-gray-200 dark:bg-white/10"></span>
          </div>
          <div className="text-red-400 flex items-center gap-4 text-2xl">
            <p className="border-l border-slate-600 pl-4">کد کالا 6457#</p>
            <p>20 دیدگاه</p>
          </div>
          <div className="flex items-center gap-4 text-2xl">
            <FiThumbsUp className="text-red-400" />
            <p className="dark:text-slate-400">
              80% از خریداران، خرید این کالا را پیشنهاد کرده‌اند
            </p>
          </div>
          <div className="flex flex-col gap-8   ">
            <h3>ویژگی‌های محصول</h3>
            <ul className="space-y-6">
              <li className="text-2xl flex items-center gap-4">
                {" "}
                <span className="font-bold dark:text-slate-400">جنس:</span>پارچه
              </li>
              <li className="text-2xl flex items-center gap-4">
                <span className="font-bold dark:text-slate-400">جنس زیره:</span>
                لاستیک
              </li>
              <li className="text-2xl flex items-center gap-4">
                <span className="font-bold dark:text-slate-400">
                  نحوه بستن کفش:
                </span>
                بند
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-32">
          <div className="flex flex-col gap-8 mt-32">
            <h3 className="text-2xl dark:text-white">انتخاب رنگ</h3>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-8">
              <ProductColorBox />
              <ProductColorBox />
              <ProductColorBox />
            </div>
            <h3 className="text-2xl dark:text-white">انتخاب سایز</h3>
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6">
              <ProductSizeBox />
              <ProductSizeBox />
              <ProductSizeBox />
              <ProductSizeBox />
              <ProductSizeBox />
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="bg-rose-800/10 rounded-xl dark:bg-rose-700/5 p-4 flex items-center gap-4 text-red-400">
              <BsShieldCheck className="text-4xl" />
              <p>تضمین سلامت فیزیکی و اصالت کالا</p>
            </div>
            <div className="flex flex-wrap gap-6 sm:gap-0 justify-center sm:justify-between items-center">
              <Quantity
                counter={shoppingCartCounter}
                setCounter={setShoppingCartCounter}
              />
              <div className="text-red-400">
                {productData.discount
                  ? toPersianNumber(
                      productData.price * shoppingCartCounter -
                        (productData.price * productData.discount) / 100
                    )
                  : toPersianNumber(productData.price * shoppingCartCounter)}
                <span className="mr-2">تومان</span>
              </div>
            </div>
            <div className="mb-6 hidden lg:block">
              <button
                className=" w-full bg-emerald-600 hover:bg-emerald-600/90 rounded-xl text-white py-4"
                onClick={() => addToCart(productData)}
              >
                افزودن به سبد خرید
              </button>
            </div>
            <AddToCart />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white shadow-lg dark:bg-zinc-900 mt-8 gap-8 p-8 rounded-xl">
        <ProdDetailsBox />
        <ProdDetailsBox />
        <ProdDetailsBox />
        <ProdDetailsBox />
      </div>
      <div className="mt-12">
        <h1 className="text-3xl font-bold mb-12">کالاهای مرتبط</h1>
        <SpecialOffers />
      </div>
      <div className="p-8 rounded-xl bg-white dark:bg-zinc-900 shadow-lg mt-8">
        <ul className="flex items-center gap-12 dark:text-white">
          <li className="cursor-pointer transition-all duration-300 ease-linear hover:text-slate-300">
            معرفی
          </li>
          <li className="cursor-pointer transition-all duration-300 ease-linear hover:text-slate-300">
            مشخصات
          </li>
          <li className="relative cursor-pointer transition-all duration-300 ease-linear hover:text-slate-300">
            دیدگاه‌ها
            <div className="absolute -top-8 -left-4 w-10 h-10 rounded-[50%] flex justify-center items-center bg-rose-700 text-lg font-bold">
              2
            </div>
          </li>
        </ul>
        <div className="mt-24">
          <h1 className="text-3xl font-bold border-b-4 rounded-lg pb-4 w-20 border-s-red-600 dark:text-white">
            معرفی
          </h1>
          <p className="mt-20 text-slate-600 dark:text-slate-300 text-2xl">
            چه در حال تمرین و چه در زندگی روزمره، این کفش‌های اورجبنال نیوبالانس
            طوری طراحی شده‌اند که در هر نوع حرکت با شما همراه باشند. جزئیات
            متمرکز بر عملکرد مانند زیره میانی DynaSoft و زیره لاستیکی بادوام به
            این کفش وزن سبک و واکنش پذیری بالایی می بخشد که performance ورزشی
            شما را افزایش می دهد. ترکیب رنگی این کفش جذابیت و شادابی دو چندانی
            را به استایل اسپورت شما می بخشد.
          </p>
          <p className="my-8 text-slate-600 dark:text-slate-300 text-2xl">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری
          </p>
          <img
            src={productData.cover}
            className="mx-auto w-[35rem] h-[35rem] p-8 rounded-xl"
            alt=""
          />
          {!productMoreDesc && (
            <button
              className="bg-transparent text-blue-400 flex items-center gap-4 hover:text-blue-400/90 mx-auto"
              onClick={() => setProductMoreDesc(true)}
            >
              مشاهده بیشتر
              <FaAngleLeft />
            </button>
          )}

          {productMoreDesc && (
            <div className="flex flex-col gap-8">
              <p className="text-slate-600 dark:text-slate-300 text-2xl">
                چه در حال تمرین و چه در زندگی روزمره، این کفش‌های اورجبنال
                نیوبالانس طوری طراحی شده‌اند که در هر نوع حرکت با شما همراه
                باشند. جزئیات متمرکز بر عملکرد مانند زیره میانی DynaSoft و زیره
                لاستیکی بادوام به این کفش وزن سبک و واکنش پذیری بالایی می بخشد
                که performance ورزشی شما را افزایش می دهد. ترکیب رنگی این کفش
                جذابیت و شادابی دو چندانی را به استایل اسپورت شما می بخشد.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-2xl">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-2xl">
                چه در حال تمرین و چه در زندگی روزمره، این کفش‌های اورجبنال
                نیوبالانس طوری طراحی شده‌اند که در هر نوع حرکت با شما همراه
                باشند. جزئیات متمرکز بر عملکرد مانند زیره میانی DynaSoft و زیره
                لاستیکی بادوام به این کفش وزن سبک و واکنش پذیری بالایی می بخشد
                که performance ورزشی شما را افزایش می دهد. ترکیب رنگی این کفش
                جذابیت و شادابی دو چندانی را به استایل اسپورت شما می بخشد.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-2xl">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری
              </p>
              <img
                src="/images/p2.png"
                alt=""
                className="mx-auto w-[35rem] h-[35rem]"
              />
              <p className="text-slate-600 dark:text-slate-300 text-2xl">
                چه در حال تمرین و چه در زندگی روزمره، این کفش‌های اورجبنال
                نیوبالانس طوری طراحی شده‌اند که در هر نوع حرکت با شما همراه
                باشند. جزئیات متمرکز بر عملکرد مانند زیره میانی DynaSoft و زیره
                لاستیکی بادوام به این کفش وزن سبک و واکنش پذیری بالایی می بخشد
                که performance ورزشی شما را افزایش می دهد. ترکیب رنگی این کفش
                جذابیت و شادابی دو چندانی را به استایل اسپورت شما می بخشد.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-2xl">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
                دشواری
              </p>
              <button
                className="bg-transparent text-blue-400 flex items-center gap-4 hover:text-blue-400/90 mx-auto"
                onClick={() => setProductMoreDesc(false)}
              >
                بستن
                <FaAngleLeft />
              </button>
            </div>
          )}
        </div>
        <div className="mt-32">
          <h1 className="text-3xl font-bold border-b-4 rounded-lg pb-4 w-32 border-s-red-600 dark:text-white">
            مشخصات
          </h1>
          <div className="flex gap-8 sm:gap-40 mt-20">
            <ul className="flex flex-col gap-8">
              <li className="text-xl sm:text-2xl">جنس</li>
              <li className="text-xl sm:text-2xl">جنس زیره</li>
              <li className="text-xl sm:text-2xl">نحوه بسته شدن کفش</li>
              <li className="text-xl sm:text-2xl">ویژگی‌های زیره</li>
            </ul>
            <ul className="flex flex-col gap-8">
              <li className="text-xl sm:text-2xl">پارچه</li>
              <li className="text-xl sm:text-2xl">لاستیک</li>
              <li className="text-xl sm:text-2xl">بندی</li>
              <li className="text-xl sm:text-2xl">
                <ul className="flex flex-col gap-2">
                  <li className="text-xl sm:text-2xl">انعطاف پذیر</li>
                  <li className="text-xl sm:text-2xl">دارای بالشتک هوا</li>
                  <li className="text-xl sm:text-2xl">قابلیت ارتجاعی</li>
                  <li className="text-xl sm:text-2xl">قابلیت گردش هوا</li>
                  <li className="text-xl sm:text-2xl">کاهش فشار وارده</li>
                  <li className="text-xl sm:text-2xl">مقاوم در برابر سایش</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-32">
          <h1 className="text-3xl font-bold border-b-4 rounded-lg pb-4 w-28 border-s-red-600 dark:text-white">
            دیدگاه‌ها
          </h1>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row gap-16 mt-20">
            <div className="flex-1 flex flex-col gap-8  sm:sticky top-40 h-[42rem]">
              <h2 className="text-3xl">ثبت دیدگاه</h2>
              <div className="relative mt-4">
                <input
                  type="text"
                  id="inputField"
                  className="w-full px-4 py-2 shadow-lg dark:bg-black rounded-xl focus:outline-none focus:border-indigo-500"
                  onFocus={() => setisCommentInputFocused(true)}
                  onBlur={(e) =>
                    setisCommentInputFocused(e.target.value !== "")
                  }
                />
                <label
                  htmlFor="inputField"
                  className={`absolute top-2 right-3 cursor-pointer text-2xl transition-all ${
                    isCommentInputFocused
                      ? "text-slate-600 dark:text-slate-300 text-lg -top-4"
                      : "text-slate-600 dark:text-slate-400"
                  }`}
                >
                  عنوان دیدگاه
                </label>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl">این محصول را به دیگران پیشنهاد</h3>
                <div className="flex items-center justify-between w-full gap-8 mt-8">
                  <div className="flex items-center w-full justify-center gap-4 text-3xl text-red-400 cursor-pointer py-4 px-8 shadow-lg rounded-xl">
                    <FiThumbsUp />
                    می‌کنم
                  </div>
                  <div className="flex items-center w-full justify-center gap-4 text-3xl text-red-500 cursor-pointer py-4 px-8 shadow-lg rounded-xl">
                    <FiThumbsDown />
                    نمی‌کنم
                  </div>
                </div>
              </div>
              <div className="relative mt-4">
                <textarea
                  type="text"
                  id="inputField"
                  className="w-full px-4 py-2 shadow-lg min-h-[10rem] dark:bg-black rounded-xl focus:outline-none focus:border-indigo-500"
                  onFocus={() => setisCommentTextareaFocused(true)}
                  onBlur={(e) =>
                    setisCommentTextareaFocused(e.target.value !== "")
                  }
                />
                <label
                  htmlFor="inputField"
                  className={`absolute top-2 right-3 cursor-pointer text-2xl transition-all ${
                    isCommentTextareaFocused
                      ? "text-slate-600 dark:text-slate-300 text-lg -top-4"
                      : "text-slate-600 dark:text-slate-400"
                  }`}
                >
                  متن دیدگاه
                </label>
              </div>
              <button className="bg-rose-800 text-white w-full rounded-xl p-4 cursor-pointer hover:bg-rose-800/80 flex justify-center">
                ارسال دیدگاه
              </button>
            </div>
            <div className="flex-[3] flex flex-col gap-12">
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              {!isMoreCommentExists && (
                <button
                  className="bg-transparent text-blue-400 flex items-center gap-4 mt-8 sm:mt-0 hover:text-blue-400/90 mx-auto"
                  onClick={() => setIsMoreCommentExists(true)}
                >
                  مشاهده بیشتر
                  <FaAngleLeft />
                </button>
              )}

              {isMoreCommentExists && (
                <button
                  className="bg-transparent text-blue-400 flex items-center gap-4 mt-8 sm:mt-0 hover:text-blue-400/90 mx-auto"
                  onClick={() => setIsMoreCommentExists(false)}
                >
                  بستن
                  <FaAngleLeft />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
