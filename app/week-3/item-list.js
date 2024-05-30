import Item from "./item";

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

  const itemElements = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const itemName = (
      <div className="text-red-300 bg-slate-800 border border-cyan-100 mx-2 my-2 p-2 w-60">
        <div>{item.name}</div>
        <div>Buy {item.quantity} in {item.category}</div>
      </div>
    );
    itemElements.push(
      <div key={i}>
        <Item name={itemName} />
      </div>
    );
  }


  return <div>{itemElements}</div>;
}
