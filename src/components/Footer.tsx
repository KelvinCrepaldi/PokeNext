import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-zinc-900 h-40 p-3 text-white mt-10">
      <p className="text-xl text-center">
        Kelvin Crepaldi -{" "}
        <Link
          className="text-blue-400"
          href="https://github.com/KelvinCrepaldi/pokenext"
          target="_blank"
        >
          Github
        </Link>
      </p>

      <p className="text-xl text-center p-3">
        <span>PokeNext</span> &copy; 2021
      </p>
    </footer>
  );
}
