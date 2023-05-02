import Image from "next/image";
import Link from "next/link";
export default function CardPokemon({ pokemon }: any) {
  return (
    <li
      className="bg-zinc-600 w-44 m-2 p-4 rounded-xl border-solid
    border-2 border-black flex flex-wrap flex-col items-center
  shadow-md shadow-black"
    >
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt="pokemon"
        width="150"
        height="150"
      />
      <p className="bg-red-400 text-white px-2 m-1 rounded">#{pokemon.id}</p>
      <h3 className="font-bold [text-shadow:_1px_1px_2px_rgb(0_0_0_/_60%)] text-white text-lg shado">
        {pokemon.name}
      </h3>
      <Link
        className="m-1 mt-6 p-1 px-3 rounded text-black bg-slate-100 hover:bg-red-400 hover:text-white transition"
        href={`/pokemon/${pokemon.id}`}
      >
        detalhes
      </Link>
    </li>
  );
}
