"use client"

import { useState } from "react";

export default function NewItem({onAddItem}) {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const handleSubmit = (event) => {
        console.log(event);
        //console.log("Hello World");
        event.preventDefault();

        let item ={
            name: name,
            quantity: quantity,
            category: category
        };

        onAddItem(item);

        // console.log(item);
        // alert(`This is the name ${item.name} \n This is the quantity: ${item.quantity} \n This is their category ${item.category}`);

        setName("");
        setQuantity("");
        setCategory("");
    }
    const handleSetName = (event) => setName(event.target.value);
    const handleSetQuantity = (event) => setQuantity(event.target.value);
    const handleSetCategory = (event) => setCategory(event.target.value);

    
    return(
        <main className="flex justify-center py-5 m-4 bg-gray-900 max-w-md mx-auto rounded">
            <form onSubmit={handleSubmit} className="w-9/12">
                <h2 className="text-xl text-white pb-5">Add New Item</h2>
                <div >
                    <input type="text" value={name} onChange={handleSetName} required placeholder="Item Name" className="rounded text-black mb-3 w-full" />
                </div>
                <div className="mb-3 flex justify-between ">
                    <input type="number" value={quantity} onChange={handleSetQuantity} min="1" max="99" required className="rounded w-36"/>
                    <label></label>
                    <select className="text-black rounded" 
                        id="category" value={category} onChange={handleSetCategory} required>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen">Frozen Foods</option>
                        <option value="canned">Canned Goods</option>
                        <option value="dry">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className = "text-white bg-blue-800 hover:bg-blue-400 text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">
                    <button type="submit"> Add to Cart</button>
                </div>
            </form>
        </main>

    );
}





