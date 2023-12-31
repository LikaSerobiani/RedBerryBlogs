import React, { useState, useEffect } from "react";
import { get } from "../api/api";
import { useParams, useSearchParams } from "react-router-dom";
import Category from "../components/Categories/Category";
import ArrowLeftIcon from "../components/Icons/ArrowLeftIcon";
import { Link } from "react-router-dom";
import CardsCarousel from "../components/Carousel/CardsCarousel";

export default function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogsData, setBlogsData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category");

  const fetchData = async () => {
    try {
      const result = await get(`/blogs/${id}`, {});
      setBlog(result);
      fetchBlogs(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchBlogs = async (blog) => {
    try {
      const result = await get("/blogs", {});

      const filteredBlogs = result.data.filter((obj) => {
        return obj.categories.some((category) =>
          blog.categories.some((blog) => blog.id === category.id)
        );
      });

      setBlogsData(filteredBlogs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
                    <Category
                      key={category.id}
                      category={category}
                      selectedCategory={selectedCategory}
                    />
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

  const BlogsSlider = () => {
    return (
      <div className="mx-[76px] mt-[100px]">
        <span className="text-[32px] text-[#1A1A1F] font-bold">
          მსგავსი სტატიები
        </span>
        {blogsData?.length ? <CardsCarousel blogs={blogsData} /> : null}
      </div>
    );
  };

  return (
    <>
      <div className="container flex justify-start pt-[40px]">{showBlog()}</div>
      {BlogsSlider()}
    </>
  );
}
