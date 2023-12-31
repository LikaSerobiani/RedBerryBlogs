import React from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "../Icons/ArrowIcon";

export default function Card({
  id,
  title,
  image,
  author,
  publish_date,
  description,
  categories,
}) {
  return (
    <div className="flex gap-[24px] flex-col">
      {/* image */}
      <div>
        <img
          src={image}
          alt={title}
          className="w-[408px] h-[328px] rounded-[12px] max-w-full object-cover"
        />
      </div>
      {/* information */}
      <div className="flex flex-col gap-[16px] justify-start">
        <span className="text-black text-[16px] leading-5 font-bold">
          {author}
        </span>
        <span className="text-light-grey text-[12px] leading-4 not-italic">
          {publish_date}
        </span>
        <span className="text-black text-[20px] leading-7 font-bold w-[408px]">
          {title}
        </span>
        {/* categories */}
        <div className="flex gap-[11px]">
          {categories.map((category) => (
            <span
              key={category.id}
              className="text-xs font-medium not-italic py-[6px] px-[10px] rounded-[30px] cursor-pointer"
              style={{
                backgroundColor: category.background_color,
                color: category.text_color,
              }}
            >
              {category.title}
            </span>
          ))}
        </div>

        <span className="text-dark-grey text-base not-italic line-clamp-2 w-[408px] ">
          {description}
        </span>
        <Link to={`/blogs/${id}`}>
          <div className="flex flex-row items-center cursor-pointer">
            <button className="text-primary text-[14px] leading-5 not-italic font-medium">
              სრულად ნახვა
            </button>
            <ArrowIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}
