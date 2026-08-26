type ServiceCardProps ={
    title: string;
    description: string;
};

export default function ServiceCard ({title, description}: ServiceCardProps){
    return(
        <div className="bg-white p-6 rounded-2xl">
            <h3>{title}</h3>
            <p>{description}</p>
            
        </div>
    );
}