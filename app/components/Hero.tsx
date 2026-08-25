import { BOOKING_URL } from "../lib/constants";

export default function Hero(){
    return(
        <section>
        <h1>Haka Nails</h1>
        <p>Las uñas mas bellas</p>
        <a href={BOOKING_URL}>Reservar Turno</a>
        <div className="bg-pink-100 h-64"></div>
        </section>
    );
}