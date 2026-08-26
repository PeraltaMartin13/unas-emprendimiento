import { BOOKING_URL } from "../lib/constants";

export default function Hero(){
    return(
        <section className="bg-zinc-950 py-32 flex flex-col items-center text-center gap-6">
        <h1 className="text-zinc-50 text-4xl md:text-6xl font-bold">Haka Nails</h1>
        <p className="text-zinc-50 text-lg">Las uñas mas bellas</p>
        <a className="bg-violet-400 text-zinc-950 px-6 py-3 rounded-full font-semibold" href={BOOKING_URL}>Reservar Turno</a>
        <div className="bg-zinc-800 h-64 w-full max-w-2xl rounded-2xl"></div>
        </section>
    );
}