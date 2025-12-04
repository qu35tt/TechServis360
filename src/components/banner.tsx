import heroBgImg from "/heroCardImage.jpg";
import { Button } from "@/components/ui/button";

export function Banner() {
    return(
        <div className="w-full h-[70vh] lg:h-[40vh] bg-cover" style={{  backgroundImage: `url(${heroBgImg})`}}>
            <div className="w-full h-full bg-black/42">
                <div className="w-full h-full text-white flex flex-col justify-center items-center space-y-6 text-center">
                    <h2 className="text-lg lg:text-3xl font-extrabold">Kompletní údržba domů, bytů, zahrad i firemních areálů</h2>
                    <p className="text-md lg:text-xl">Spolehlivý servis pro vaši domácnost i firmu v severních čechách</p>
                    <a href="#form-Anchor"><Button className="w-40 h-15 bg-[#449315]">Kontaktujte nás!</Button></a>
                </div>
            </div>
        </div>
    )
}