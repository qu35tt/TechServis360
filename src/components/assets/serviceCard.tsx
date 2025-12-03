import pik from "/piktogram.jpeg"

export function ServiceCard() {
    return(
        <div className="w-90 h-60 bg-[#FFFFFF] text-black flex justify-center items-center flex-col space-y-4 border-4 border-amber-200">
            <img
                src={pik}
                className="w-24 h-24 rounded-full"
            />
            <h2 className="text-2xl font-semibold">Drobné Opravy</h2>
            <p>Od drobných oprav po pravidelnou údržbu...</p>
        </div>
    )
}