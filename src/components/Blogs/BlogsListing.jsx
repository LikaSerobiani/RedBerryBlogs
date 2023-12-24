import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { get } from "../../api/api";

export default function BlogsListing() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const token = import.meta.env.VITE_API_TOKEN;

  const fetchData = async () => {
    try {
      const result = await get("/blogs", {}, token);
      setBlogs(result.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-wrap justify-start gap-x-[32px] gap-y-[56px] mb-[66px]">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <BlogCard
                id={blog.id}
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
      )}
    </div>
  );
}
