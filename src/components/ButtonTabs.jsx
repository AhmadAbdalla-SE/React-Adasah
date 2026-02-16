import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ButtonTabs() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function GetTab() {
      const { data } = await axios("posts.json");
      const allCategories = data.posts.map((post) => post.category);
      const uniqueCategories = [...new Set(allCategories)];
      setCategories(uniqueCategories);
    }
    GetTab();
  }, []);
  console.log(categories);
  return (
    <div className="flex flex-row">
      <button
        key={categories}
        className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white"
      >
        جميع المقالات
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white"
        >
          {category}
        </button>
      ))}
    </div>
  );
}
