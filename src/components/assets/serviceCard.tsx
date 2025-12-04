import pik from "/piktogram.jpeg"

export function ServiceCard() {
    return(
        <div className="w-90 h-60 bg-[#FFFFFF] text-black flex justify-center items-center flex-col space-y-4 hover:scale-115 transition-all duration-300">
            <img
                src={pik}
                className="w-24 h-24 rounded-full"
            />
            <h2 className="text-2xl font-semibold text-[#244035]">Drobné Opravy</h2>
            <p>Od drobných oprav po pravidelnou údržbu...</p>
        </div>
    )
}