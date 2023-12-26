import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Blogs/Card";

import "swiper/css";

export default function CardsCarousel({ blogs }) {
  return (
    <div className="mt-10 mb-[475px]">
      <Swiper spaceBetween={32} slidesPerView={3}>
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <Card
              id={blog.id}
              image={blog.image}
              author={blog.author}
              publish_date={blog.publish_date}
              title={blog.title}
              description={blog.description}
              categories={blog.categories}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
