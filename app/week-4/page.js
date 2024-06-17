import Link from "next/link";
import NewItem from "./new-item";




export default function Page() {
    return (
      <main className="bg-black h-screen">
      <div className="h-full">
        <NewItem/>
        <Link href="../" className="text-white">Back</Link>
      </div>
    </main>
    );
  }