import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-neutral-900">
      <div className="flex justify-between items-center p-4">
        <Link href="/" className="font-bold text-white md:text-2xl text-xl">
          AnimeList
        </Link>
        <input
          type="text"
          placeholder="Search"
          className="bg-neutral-800 text-white p-2 md:w-[30%] w-[50%] rounded-md"
        />
      </div>
    </header>
  );
};

export default Navbar;
