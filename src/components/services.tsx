import { ServiceCard } from "@/components/assets/serviceCard" 

export function Services(){
    return(
        <>
        
        <div className="w-full bg-[#F4F0ED]">
            <h1 className="text-center text-3xl font-extrabold py-8">Naše Služby</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 place-items-center gap-6 px-8 pb-8">
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
            </div>
        </div> 
       </>
    )
}