import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { get } from "../api/api";

import Blog from "../assets/images/Blog.png";
import BlogsListing from "../components/Blogs/BlogsListing";
import Categories from "../components/Categories/Categories";

export default function HomePage() {
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const fetchCategories = async () => {
    try {
      const result = await get("/categories", {});
      setCategories(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const result = await get("/blogs", {});
      setBlogs(result.data);
      setBlogsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setBlogsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchBlogs();
  }, []);

  const handleSelectCategory = (category) => {
    const categoryTitle = category.title;
    setSelectedCategory(categoryTitle);
    setSearchParams({ category: categoryTitle });

    const filteredBlogs = blogs.filter((blog) =>
      blog.categories.some((cat) => cat.title === categoryTitle)
    );

    setFilteredBlogs(filteredBlogs);
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center mt-[64px] mb-[64px]">
        <span className="text-[64px] leading-[72px] font-bold not-italic">
          ბლოგი
        </span>
        <img src={Blog} alt="Blog Icon" />
      </div>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <BlogsListing blogs={blogs} filteredBlogs={filteredBlogs} />
    </div>
  );
}
