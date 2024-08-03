"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import ItemList from "./shopping-list/item-list";
import NewItem from "./shopping-list/new-item";
import MealIdeas from "./shopping-list/meal-ideas";
import { addItem, getItems } from "./_services/shopping-list-service";
import { useUserAuth } from "./_utils/auth_context";

export default function ShoppingListPage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [itemsList, setItemsList] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Error signing in: ", error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    }

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
        <main className="container mx-auto p-4">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Shopping List</h1>
                {user ? (
                    <div className="text-right">
                        <p className="text-sm">Welcome {user.displayName}</p>
                        <p className="text-sm">{user.email}</p>
                        <button onClick={handleSignOut} className="text-lg m-2 hover:underline">Sign Out</button>
                    </div>
                ) : (
                    <button onClick={handleSignIn} className="text-lg m-2 hover:underline">Sign In</button>
                )}
            </header>

            {user && (
                <div className="flex">
                    <div className="w-1/2 p-4">
                        <NewItem onAddItem={handleAddItem} />
                        <ItemList items={itemsList} onItemSelect={handleItemSelect} />
                    </div>
                    <div className="w-1/2 p-4">
                        <MealIdeas ingredient={selectedItemName} />
                    </div>
                </div>
            )}
        </main>
    );
}