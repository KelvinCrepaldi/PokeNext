import Link from "next/link";
import Image from "next/image";
import PokebolaImg from "public/images/pokeball.png";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="bg-zinc-900 flex justify-between px-10 py-4 text-white">
      <div className="flex items-center space-x-2">
        <Image src={PokebolaImg} width="30" height="30" alt="Pokeball logo" />
        <h1 className="text-xl font-bold">PokeNext</h1>
      </div>

      <ul className="flex space-x-5 items-center text-xl justify-center">
        <button
          onClick={toggleTheme}
          className="flex justify-center scale-125 ml-4"
        >
          {theme === "light" ? (
            <FontAwesomeIcon icon={faSun} className="text-yellow-300" />
          ) : (
            <FontAwesomeIcon icon={faMoon} className="text-cyan-200" />
          )}
        </button>{" "}
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
