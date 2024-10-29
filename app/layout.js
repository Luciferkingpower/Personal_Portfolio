import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ayush - Portfolio",
  description: "Welcome to the portfolio of Ayush, an innovative IT student and budding web developer. Specializing in modern, responsive web design, I bring creative concepts to life through clean, interactive user experiences. Explore my projects, get inspired, and see how I blend technology and creativity to create high-performing websites and applications. Let’s collaborate on your next project!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <Navbar />
        <div className={inter.className}>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
