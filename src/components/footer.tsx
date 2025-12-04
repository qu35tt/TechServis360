import { Phone, Mail } from "lucide-react"
import fullLogo from "/techServis360full.png"

export function Footer() {
    return(
        <div className="w-full h-auto bg-[#244035] flex flex-col lg:flex-row justify-center lg:justify-between items-center space-y-10 p-8">
            <div className="text-white flex flex-col justify-center items-center text-2xl space-y-8 lg:scale-110">
                <div className="flex flex-row space-x-4 items-center"><Phone/><h2> +420 607 825 837</h2></div>
                <div className="flex flex-row space-x-4 items-center"><Mail/><h2> info@techservis360.cz</h2></div>
            </div>
            <h2 className="text-white text-medium lg:text-2xl font-bold">Postaráme se o váš dům, zahradu<br/> i firmu – od základu až po střechu.</h2>
            <img
                src={fullLogo}
                className="w-80 h-full lg:w-80 lg:h-full"
            />
        </div>
    )
}