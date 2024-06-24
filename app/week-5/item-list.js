"use client"

import { useState } from "react";
import Item from "./item";
import ItemJs from './items.json';


export default function ItemList() {
  const items = [
    {
      name: "milk, 4 L 🥛",
      quantity: 1,
      category: "dairy",
    },
    {
      name: "bread 🍞",
      quantity: 2,
      category: "bakery",
    },
    {
      name: "eggs, dozen 🥚",
      quantity: 2,
      category: "dairy",
    },
    {
      name: "bananas 🍌",
      quantity: 6,
      category: "produce",
    },
    {
      name: "broccoli 🥦",
      quantity: 3,
      category: "produce",
    },
    {
      name: "chicken breasts, 1 kg 🍗",
      quantity: 1,
      category: "meat",
    },
    {
      name: "pasta sauce 🍝",
      quantity: 3,
      category: "canned goods",
    },
    {
      name: "spaghetti, 454 g 🍝",
      quantity: 2,
      category: "dry goods",
    },
    {
      name: "toilet paper, 12 pack 🧻",
      quantity: 1,
      category: "household",
    },
    {
      name: "paper towels, 6 pack",
      quantity: 1,
      category: "household",
    },
    {
      name: "dish soap 🍽️",
      quantity: 1,
      category: "household",
    },
    {
      name: "hand soap 🧼",
      quantity: 4,
      category: "household",
    },
  ];

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
      <div>
        <button
          onClick={() => setSortBy("name")}
          style={{ backgroundColor: sortBy === "name" ? "blue" : "white" }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          style={{ backgroundColor: sortBy === "category" ? "blue" : "white" }}
        >
          Sort by Category
        </button>
      </div>
      <div>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </div>
    </div>
  );
}