import React from "react";
import Blog from "../assets/images/Blog.png";
export default function HomePage() {
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <span className="text-[64px] leading-[72px] font-bold not-italic">
          ბლოგი
        </span>
        <img src={Blog} />
      </div>
    </div>
  );
}
