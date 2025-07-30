import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import axios from "axios";
import ProductCard from "./ProductCard";

const SpecialOffers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:3000/products?_start=20&_end=35`
      );
      setProducts(res.data);
    };
    fetchData();
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      speed={300}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 15,
        },
      }}
      loop={true}
      spaceBetween={15}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard {...product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SpecialOffers;
