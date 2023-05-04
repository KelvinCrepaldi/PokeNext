import { Inter } from "next/font/google";
import pokeballImage from "public/images/pokeball.png";
import Image from "next/image";
import CardPokemon from "@/components/CardPokemon";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  //add pokemon id
  data.results.forEach((item: any, index: number) => {
    item.id = index + 1;
  });

  return { props: { pokemons: data.results } };
}

export default function Home({ pokemons }: any) {
  return (
    <>
      <div className="flex w-100 justify-center m-10 items-center ">
        <h1 className="font-bold text-5xl mr-5">
          <span className="text-red-500 ">Poke</span>
          <span className="text-zinc-900 dark:text-white">Next</span>
        </h1>
        <Image
          src={pokeballImage}
          alt="pokeball"
          width="50"
          height="50"
        ></Image>
      </div>
      <ul className="flex flex-wrap align-center max-w-7xl px-5 mx-auto justify-center">
        {pokemons.map((pokemon: any) => (
          <CardPokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    </>
  );
}
