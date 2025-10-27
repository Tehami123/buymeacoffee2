'use client'
import Link from "next/link";
import { SignIn, SignInButton,SignUpButton,UserButton,useUser, SignOutButton } from "@clerk/nextjs";
import React from "react";
import { redirect } from "next/navigation";
// import { useSession, signIn, signOut } from "next-auth/react"

const Navbar = () => {    
 const user = useUser();
  
  
  return (
    <div>
      <nav className="bg-slate-950/60 text-white p-4 flex justify-between items-center h-20">
        <div className="logo">GetMeaCoffee</div>
        <ul className="space-x-4  flex justify-between ml-20 gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <div>
          

          <div className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-tl from-green-400 to-blue-600 group-hover:from-blue-400 group-hover:to-green-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black text-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
             {user.isSignedIn ? <UserButton className="text-white mb-20 flex justify-center items-center" /> : <SignUpButton />}  
            </span>

          </div>
          

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
