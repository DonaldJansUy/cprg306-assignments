import Link from "next/link";
import ItemList from "./item-list";


export default function Page() {
    return (
      <main className="min-h-screen">
      <div className="h-full">
        <h1 className="text-2xl font-bold text-white">Shopping List</h1>
        <ItemList/>
        <Link href="../" className="text-white">Back</Link>
      </div>
    </main>
    );
  }