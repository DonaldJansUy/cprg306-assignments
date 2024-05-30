import Link from "next/link";

export default function Home() {

  const styleLink = "underline text-green-800 hover:text-green-500";

  return (
    <main className="h-screen">
      <h1 className="text-xl">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li><Link className= {styleLink} href="./week-2">Week 2 Assignment</Link></li>
        <li><Link className= {styleLink} href="./week-3">Week 3 Assignment</Link></li>      
      </ul>
    </main>
  );
}
