import Image from "/heroCardImage.jpg"

export function Hero() {
    return (
        <div className="w-full h-[60vh] bg-[#F4F0ED] flex flex-col lg:flex-row space-y-24 lg:justify-between px-8 text-black" id="about">
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center space-y-8">
                <h1 className="text-2xl lg:text-6xl font-semibold text-[#244035]">Proč zvolit právě nás?</h1>
                <ul className="list-disc text-xl lg:text-3xl font-light">
                    <li className="text-[#449315]"><p className="text-black">Rychlá domluva a spolehlivost</p></li>
                    <li className="text-[#449315]"><p className="text-black">Profesionální přístup a férové ceny</p></li>
                    <li className="text-[#449315]"><p className="text-black">Jeden kontakt = kompletní servis</p></li>
                </ul>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center">
                <img 
                    src={Image}
                    className="w-full h-full lg:w-3/4 lg:h-3/4"
                />
            </div>
        </div>
    )
}