import React, { useState, useEffect } from "react";
import { get } from "../api/api";
import { useParams } from "react-router-dom";
import Category from "../components/Categories/Category";
import ArrowLeftIcon from "../components/Icons/ArrowLeftIcon";
import { Link } from "react-router-dom";

export default function SingleBlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const token = import.meta.env.VITE_API_TOKEN;

  const fetchData = async () => {
    try {
      const result = await get(`/blogs/${id}`, {}, token);
      setBlog(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const showBlog = () => {
    if (!blog) {
      return <p>Loading...</p>;
    } else {
      return (
        <>
          <Link to="/">
            <ArrowLeftIcon color="white" />
          </Link>
          <div className="card-wrapper ml-[240px] flex flex-col gap-[40px]">
            {/* image */}
            <div>
              <img
                src={blog.image}
                alt={blog.title}
                className="h-[328px] w-[720px] rounded-[12px] object-cover "
              />
            </div>
            {/* information */}
            <div className="w-[720px] flex flex-col gap-y-[40px]">
              <div className="flex flex-col gap-y-[24px]">
                <div className="flex flex-col gap-y-[8px]">
                  <span className="text-black text-[16px] not-italic leading-5 font-bold">
                    {blog.author}
                  </span>
                  <div className="flex flex-row items-center text-light-grey gap-[5px]">
                    <span>{blog.publish_date}</span>
                    <span>•</span>
                    <span>{blog.email}</span>
                  </div>
                </div>
                <span className="font-bold text-[32px] not-italic leading-10 text-black">
                  {blog.title}
                </span>

                <div className="flex gap-[16px] text-black">
                  {blog.categories.map((category) => (
                    <Category key={category.id} category={category} />
                  ))}
                </div>
              </div>
              <div>
                <span className="text-dark-grey text-[16px] leading-7 font-normal">
                  {blog.description}
                </span>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="container flex justify-start pt-[40px]">{showBlog()}</div>
  );
}
