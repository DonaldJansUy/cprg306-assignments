"use client";

import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item"; // Corrected import
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [itemsList, setItemsList] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItemsList([...itemsList, newItem]);
  };

  return (
    <main className="min-h-screen">
      <div className="h-full">
        <h1 className="text-2xl font-bold text-white">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} /> {/* Integrated NewItem */}
        <ItemList items={itemsList} /> {/* Passed itemsList to ItemList */}
        <Link href="../" className="text-white">Back</Link>
      </div>
    </main>
  );
}
