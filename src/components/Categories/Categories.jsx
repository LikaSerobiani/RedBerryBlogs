import React, { useState, useEffect } from "react";
import Category from "./Category";
import { get } from "../../api/api";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const token = import.meta.env.VITE_API_TOKEN;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await get("/categories", {}, token);
        setCategories(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="flex flex-wrap justify-center gap-[24px] my-[64px]">
        {categories.map((category) => (
          <div key={category.id}>
            <Category category={category} />
          </div>
        ))}
      </div>
    </div>
  );
}
