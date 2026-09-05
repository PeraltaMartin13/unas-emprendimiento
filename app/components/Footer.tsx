import Image from "next/image";
import { BOOKING_URL } from "../lib/constants";
import { INSTAGRAM_URL } from "../lib/constants";
import { TIKTOK_URL } from "../lib/constants";
import { Smartphone, Camera, Clapperboard, MapPin } from "lucide-react"

export default function Footer() {

    return (
        <section className=" flex w-full items-center justify-between px-30 bg-zinc-950">
            <Image src="/media/logo-haka.png" alt="logo Haka" width={90} height={60}></Image>
            <div className="flex flex-col p-5  text-zinc-50 ">
                <div className="flex flex-col py-5 px-0.5">
                    <h4 className="font-bold text-2xl">REDES SOCIALES</h4>
                    <div className="flex gap-2 items-center">
                        <Camera />
                        <a href={INSTAGRAM_URL}>INSTAGRAM</a>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Clapperboard />
                        <a href={TIKTOK_URL}>TIKTOK</a>
                    </div>
                </div>
                <div className="flex flex-col py-5  px-0.5">
                    <h4 className="font-bold text-2xl">CONTACTO</h4>
                    <div className="flex gap-2 items-center">
                        <Smartphone />
                        <p>1137727295</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <MapPin />
                        <p>Uspallata 2120, Hurlingham</p>
                    </div>
                </div>
                <a href={BOOKING_URL} className="text-zinc-100 text-2xl px-3 py-0.5 bg-violet-400 rounded-full text-center ">RESERVA TU TURNO!</a>
            </div>



        </section>

    );
}