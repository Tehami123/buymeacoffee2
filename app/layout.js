import GradientBlinds from '../components/GradientBlinds';
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
      <body>

        {/* Root page container: relative so we can place the gradient absolutely behind content */}
        <div className="relative min-h-screen">
          {/* Gradient background placed behind everything */}
          <GradientBlinds
            className="absolute inset-0 -z-10 w-full h-full"
            gradientColors={["#FF9FFC", "#5227FF"]}
            angle={45}
            noise={0.3}
            blindCount={12}
            blindMinWidth={50}
            spotlightRadius={0.5}
            spotlightSoftness={1}
            spotlightOpacity={1}
            mouseDampening={0.15}
            distortAmount={0}
            shineDirection="left"
          />

          {/* Navbar above the background */}
          <div className="relative z-20">
            <Navbar />
          </div>

          {/* Page content - keep it above the background */}
          <main className="relative z-10">
            {children}
          </main>

          <div className="relative z-10">
            <Footer />
          </div>
        </div>

      
      </body>
    </html>
    </ClerkProvider>
    
  );
}
