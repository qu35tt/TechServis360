import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";

export function App() { 
  return (
    <div className="w-screen h-screen bg-gray-950">
      <Navbar />
      <Hero />
      <Services />
    </div>
  )
}
