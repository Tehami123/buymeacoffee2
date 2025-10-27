import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Buy Me A Coffee",
  description: "A simple Buy Me A Coffee clone built with Next.js",
};

export default function RootLayout({ children }) {
  console.log(require('crypto').randomBytes(32).toString('base64'));
  
  return (
    <ClerkProvider>
    <html lang="en">
      
      
      <body
        className={` min-h-[90vh] [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_120%)] ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
       
        <div className="absolute inset-0 -z-10 min-h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      

        <Navbar/>
        <div className="min-h-[90vh] [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_120%)]">
        {children}
        </div>
        <Footer/>
      
      </body>
    </html>
    </ClerkProvider>
    
  );
}
