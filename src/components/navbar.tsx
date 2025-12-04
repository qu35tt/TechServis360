import { useState } from "react"
import { Button } from "./ui/button"
import logo from "/techservis360.png"
import { Menu } from "lucide-react";

export function Navbar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    
    return(
        <>
        <div className="sticky w-full h-[10vh] bg-[#F4F0ED] flex flex-row justify-between items-center p-4">
            <img
                src={logo}
                className="w-[10vh] h-[10vh]"
            />
            <div className="hidden h-full lg:flex justify-center items-center space-x-24 text-xl font-semibold">
                <a href="#services"><h3 className="cursor-pointer hover:scale-120 hover:underline transition-all duration-400">Služby</h3></a>
                <a href="#about"><h3 className="cursor-pointer hover:scale-120 hover:underline transition-all duration-400">O nás</h3></a>
                <a href="#gallery"><h3 className="cursor-pointer hover:scale-120 hover:underline transition-all duration-400">Galerie</h3></a>
            </div>
            <div className="hidden h-full lg:flex justify-center items-center p-8">
                <a href="#form-Anchor"><Button className="w-40 h-15 bg-[#449315]">Kontaktujte nás!</Button></a>
            </div>
            <div className="lg:hidden h-full flex justify-center items-center">
                <Button className="w-12 h-12" onClick={() => setIsMobileOpen(!isMobileOpen)}><Menu /></Button>
            </div>
        </div>
        {isMobileOpen &&
            <div className="absolute w-full bg-[#F4F0ED] flex flex-col justify-center items-center">
                <div className="space-y-4 text-lg font-semibold "> 
                    <h3 onClick={() => setIsMobileOpen(false)}><a href="#services">Služby</a></h3>
                    <h3 onClick={() => setIsMobileOpen(false)}><a href="#about">O nás</a></h3>
                    <h3 onClick={() => setIsMobileOpen(false)}><a href="#gallery">Galerie</a></h3>
                </div>
                <div className="h-full flex justify-center items-center p-4">
                    <a href="#form-Anchor"><Button className="w-40 h-15 bg-[#449315]" >Kontaktujte nás!</Button></a>
                </div>
            </div>
        }
        </>
    )
}