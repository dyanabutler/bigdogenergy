import Navbar from "@/components/Navbar";
import Image from "next/image";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="">
       
       <Hero />
       
       <Reviews />
       <Gallery />
      </div>
    </main>
  );
}
