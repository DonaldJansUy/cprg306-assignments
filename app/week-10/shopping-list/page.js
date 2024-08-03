"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service"; // Import getItems and addItem
import { useAuth } from "../_utils/auth"; // Assuming you have a custom hook to get the current user

export default function Page() {
  const [itemsList, setItemsList] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useAuth(); // Get the current user

  // Function to load items
  const loadItems = async () => {
    try {
      const items = await getItems(user.uid);
      setItemsList(items);
    } catch (error) {
      console.error("Error loading items: ", error);
    }
  };

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]); // Dependencies: user

  // Function to handle adding an item
  const handleAddItem = async (newItem) => {
    try {
      const itemId = await addItem(user.uid, newItem);
      setItemsList([...itemsList, { id: itemId, ...newItem }]);
    } catch (error) {
      console.error("Error adding item: ", error);
    }
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
