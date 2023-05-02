import Image from "next/image";
import SharizardImg from "public/images/charizard.png";
import Link from "next/link";
export default function About() {
  return (
    <div className="p-20 flex flex-col items-center">
      <h1 className="text-3xl text-center text-red-400 font-bold">
        Sobre o projeto
      </h1>
      <p className="p-5 text-blue-800">
        PokeNext é uma biblioteca de pokemons, criada com o objetivo de praticar
        conceitos de next.js, tailwind e requisições para API&apos;s. Os
        pokemons são requisitados de uma API de pokemons{" "}
        <Link className="text-red-400 font-bold" href="https://pokeapi.co">
          Pokeapi
        </Link>{" "}
        e renderizados em cards, sendo possivel buscar pokemons pelo nome e
        filtrar pokemons pelo tipo elemental.
      </p>
      <Image
        src={SharizardImg}
        alt="sharizard"
        width="300"
        height="300"
      ></Image>
    </div>
  );
}
