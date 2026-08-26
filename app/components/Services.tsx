import ServiceCard from "./ServiceCard";

const services = [
    {title: "Esmaltado Semi permanente", description:"Esmaltado Semi Permanente sobre tu uña natural." },
    {title: "Caping Acrigel(Diseño elaborado)", description:"Refuerzo con poligel sobre largo natural + diseño a tu gusto." },
    {title: "Esculpidas En Acrilico", description:"Alargá y dale tu forma favorita a tus uñas ." },
    {title: "Soft Gel", description:"Alarga tus uñas con los tips de gel, se adhieren a tu uña natural logrando una extensión más simple y un resultado duradero y delicado." },
    {title: "Retiro de Semi permanente", description:"Opcion unicamente para retiros de otros salones! o si desea retiro y no aplicarse un nuevo servicio." },
    {title: "Retiro de Acrilico/Acrigel", description:"Opcion unicamente para retiros de otros salones! o si desea retiro y no aplicarse un nuevo servicio." },
];

export default function Services(){
    return(
        <section>
            {services.map((service) => (
                <ServiceCard 
                key={service.title}
                title={service.title}
                description={service.description}
                />
            ))}
        </section>
    );

}

