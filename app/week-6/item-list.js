"use client"

import { useState } from "react";
import Item from "./item";

export default function ItemList({items}) {

  let [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className=" flex justify-center space-x-4">
        <p>sortBy: </p>
        <button
          onClick={() => setSortBy("name")} className=" w-40 " style={{ backgroundColor: sortBy === "name" ? "blue" : "white" }}>Name</button>
        <button
          onClick={() => setSortBy("category")} className=" w-40"style={{ backgroundColor: sortBy === "category" ? "blue" : "white" }}>Category
        </button>
      </div>
      <div className="space-y-8">
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </div>
    </div>
  );
}