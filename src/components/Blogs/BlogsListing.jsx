import React, { useEffect } from "react";
import BlogCard from "./BlogCard";

import { get } from "../../api/api";
import { useState } from "react";

export default function BlogsListing() {
  const [blogs, setBlogs] = useState([]);
  const token = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await get("/blogs", {}, token);
        setBlogs(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="flex flex-wrap justify-start gap-x-[32px] gap-y-[56px] mb-[66px]">
        {blogs.map((blog) => (
          <div key={blog.id}>
            <BlogCard
              image={blog.image}
              author={blog.author}
              publish_date={blog.publish_date}
              title={blog.title}
              description={blog.description}
              categories={blog.categories}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
