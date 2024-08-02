"use client"

import Link from "next/link";
import { useUserAuth } from "./_utils/auth_context";


export default function SignInPage(){

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();


    async function handleSignIn(){
        try {
            await gitHubSignIn();
        } catch (error) {
            
        }
    
      }
      
      async function handleSignOut(){
        try {
        await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    
      }
      console.dir(user)
    return(

        <main>
            <header><h1> Firebase Auth</h1></header>

            { user ? (
                <div>
                    <p>Welcome {user.displayName}</p>
                    <p> {user.email}</p>
                    <img className="w-8 h-8" src={user.photoURL}/>
                    <p>
                        <Link href="/week8/protected/">Protected Page</Link>
                    </p>
                    <button onClick={handleSignOut} className="text-lg m-2 hover:underline">Sign Out</button>
                </div>
            ) : (
                <div>
                <button onClick={handleSignIn} className="text-lg m-2 hover:underline">Sign In</button>
            </div>
            ) }
        </main>
    );
}