// Category.jsx
import React from "react";

export default function Category({ category }) {
  return (
    <span
      className="text-[12px] not-italic font-medium leading-4 px-[16px] py-[8px] rounded-[30px] cursor-pointer"
      style={{
        backgroundColor: category.background_color,
        color: category.text_color,
      }}
    >
      {category.title}
    </span>
  );
}
