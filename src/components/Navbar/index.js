import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-neutral-950 w-full z-50 fixed">
      <div className="flex justify-between items-center p-4">
        <Link href="/" className="font-bold text-white md:text-2xl text-xl">
          AnimeList
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
