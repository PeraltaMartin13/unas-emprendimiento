import Image from "next/image";

type ServiceCardProps ={
    title: string;
    image: string;
    description: string;
};


export default function ServiceCard ({title, image, description}: ServiceCardProps){
    return(
        <div className="bg-zinc-50 p-6 rounded-2xl text-center border border-zinc-200">
            <h3 className="text-xl font-semibold text-zinc-950">{title}</h3>
            <Image className="mx-auto" src={image} alt={title} width={600} height={400}></Image>
            <p className="text-zinc-600 text-left py-2">{description}</p>
            
        </div>
    );
}