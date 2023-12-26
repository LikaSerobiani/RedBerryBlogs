import React from "react";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b border-solid border-gray-300 bg-white">
      <div className="container h-[80px] flex justify-between items-center shrink-0">
        <div>
          <Link to="/">
            <img src={Logo} />
          </Link>
        </div>
        <div>
          <button className="bg-primary py-[10px] px-[20px] rounded-[8px] text-white font-medium text-sm cursor-pointer">
            შესვლა
          </button>
        </div>
      </div>
    </header>
  );
}
