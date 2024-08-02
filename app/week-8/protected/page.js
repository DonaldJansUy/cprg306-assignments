"use client"

import Link from "next/link";
import { useUserAuth } from "../utils/auth-context";



export default function ProtectedPage(){
    const { user } = useUserAuth();


    return(
        <main>
            <header>
                <h1 className="text-3xl "> Protected Page</h1>
            </header>

            {user ? (
                <div>
                    <p>Your user id is  {user.uid}</p>
                </div>
            ) : (
                <div>
                    <p>
                        You must be logged in to view this Page
                    </p>
                    <Link href="/week8/">Click here to return</Link>
                </div>
            )}
        </main>
    );
}
