// HomePage.jsx
import React from "react";
import Blog from "../assets/images/Blog.png";
import BlogsListing from "../components/Blogs/BlogsListing";
import Categories from "../components/Categories/Categories";

export default function HomePage({ blogs, categories }) {
  return (
    <div className="container">
      <div className="flex justify-between items-center mt-[64px] mb-[64px]">
        <span className="text-[64px] leading-[72px] font-bold not-italic">
          ბლოგი
        </span>
        <img src={Blog} alt="Blog Icon" />
      </div>
      <Categories categories={categories} />
      <BlogsListing blogs={blogs} />
    </div>
  );
}
