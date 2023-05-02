import Link from "next/link";
import Image from "next/image";
import PokebolaImg from "public/images/pokeball.png";
export default function Navbar() {
  return (
    <nav className="bg-zinc-900 flex justify-between px-10 py-5 text-white">
      <div className="flex items-center space-x-5">
        <Image src={PokebolaImg} width="50" height="50" alt="Pokeball logo" />
        <h1 className="text-3xl font-bold">PokeNext</h1>
      </div>
      <ul className="flex space-x-5 items-center text-xl justify-center">
        <li className="hover:text-red-200">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-red-200">
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}
