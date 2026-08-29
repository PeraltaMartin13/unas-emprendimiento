import Image from "next/image"


export default function Nav(){
    return(
        <nav className="flex w-full items-center sticky top-0 px-10 justify-between bg-violet-400">
            <Image src="/media/logo-haka.png" alt="logo Haka"  width={90} height={60}></Image>
            <div className="flex gap-x-24 text-2xl font-bold">
                <a href="https://calendico.com/haka/Haka">Reservar Un Turno</a>
                <a href="#Services">Servicios</a>
                <a href="#Testimonios">Ustedes</a>
                <a href="#Ubicacion">Donde Estoy?</a>
                <a href="#SobreMi">Un Poco Sobre mi</a>
            </div>
        </nav>
    )
}