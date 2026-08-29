import Image from "next/image";

export default function Hero(){
    return(
        <section className="bg-black py-10 w-full flex flex-col items-center text-center gap-6">
        <h1 className="text-zinc-50 text-4xl md:text-6xl font-bold">Haka Nails</h1>
        <Image className="mx-auto" src="/media/logo-haka.png" alt="logo Haka" width={500} height={400}></Image>
        </section>
    );
}