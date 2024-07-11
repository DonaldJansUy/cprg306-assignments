"use client";

import Link from "next/link";
import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [itemsList, setItemsList] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItemsList([...itemsList, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.replace(/[^a-zA-Z ]/g, "").trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen">
      <div className="h-full flex">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-white">Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={itemsList} onItemSelect={handleItemSelect} />
          <Link href="../" className="text-white">Back</Link>
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
