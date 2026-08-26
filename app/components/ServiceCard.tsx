type ServiceCardProps ={
    title: string;
    description: string;
};

export default function ServiceCard ({title, description}: ServiceCardProps){
    return(
        <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200">
            <h3 className="text-xl font-semibold text-zinc-950">{title}</h3>
            <p className="text-zinc-600">{description}</p>
            
        </div>
    );
}