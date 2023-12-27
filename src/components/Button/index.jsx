import React from "react";

export default function Button({ onClick, title, width = "auto" }) {
  return (
    <button
      className="bg-primary py-[10px] active:bg-[#512BE7] px-[20px] rounded-[8px] text-white font-medium text-sm cursor-pointer"
      onClick={onClick}
      style={{ width: width }}
    >
      {title}
    </button>
  );
}
