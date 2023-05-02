import Image from "next/image";
import Link from "next/link";
export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  // params
  const paths = data.results.map((pokemon: any, index: number) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.pokemonId;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }: any) {
  const colorVariants: any = {
    normal: "bg-gray-300",
    fire: "bg-red-500",
    water: "bg-blue-500",
    electric: "bg-yellow-400",
    grass: "bg-green-500",
    ice: "bg-blue-200",
    fighting: "bg-red-700",
    poison: "bg-purple-500",
    ground: "bg-yellow-700",
    flying: "bg-indigo-500",
    psychic: "bg-pink-500",
    bug: "bg-green-700",
    rock: "bg-yellow-600",
    ghost: "bg-purple-700",
    dragon: "bg-indigo-700",
    dark: "bg-gray-800",
    steel: "bg-gray-400",
    fairy: "bg-pink-300",
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center w-96 border mx-auto mt-20">
        <h1 className="w-full bg-zinc-900 p-3 text-center text-3xl text-white font-bold">
          {pokemon.name}
        </h1>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt="pokemon"
          width="200"
          height="200"
        />
        <div>
          <h3 className="text-xl font-bold">Número</h3>
          <p className="text-center">#{pokemon.id}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-center">Tipo:</h3>
          <div className="flex">
            {pokemon.types.map((item: any, index: number) => (
              <span
                className={`flex text-center text-white ${
                  colorVariants[item.type.name]
                } px-4 py-1 m-1 rounded-xl`}
                key={index}
              >
                {item.type.name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex ">
          <div className="my-4 px-4 border-r">
            <h4 className="text-lg font-bold">Altura:</h4>
            <p>{pokemon.height * 10} cm</p>
          </div>
          <div className="my-4 px-4">
            <h4 className="text-lg font-bold">Peso:</h4>
            <p>{pokemon.weight / 10}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center m-10">
        <Link
          className="w-auto p-2 rounded-xl border bg-zinc-900 hover:bg-red-400 text-white transition"
          href="/"
        >
          Voltar
        </Link>
      </div>
    </>
  );
}
