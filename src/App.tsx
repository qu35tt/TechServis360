import { Navbar } from "@/components/navbar";
import { Banner } from "@/components/banner";
import { Services } from "@/components/services";
import { Hero } from "@/components/hero"
import { Gallery } from "@/components/gallery"
import { Form } from "@/components/form"
import { Footer } from "@/components/footer"
import { Toaster } from "sonner";

export function App() { 
  return (
    <div className="w-screen h-screen bg-[#F4F0ED]">
      <Toaster position="top-center" richColors/>
      <Navbar />
      <Banner />
      <Services />
      <Hero />
      <Gallery />
      <Form />
      <Footer />
    </div>
  )
}
