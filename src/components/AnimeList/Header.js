import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <header className="pt-[4.5rem]">
      <div className="p-4 flex justify-between items-center text-slate-200">
        <h1 className="text-2xl font-bold">{title}</h1>
        {linkHref && linkTitle ? (
          <Link
            href={linkHref}
            className="md:text-sm text-xs italic underline underline-offset-[5px] transition ease-in-out delay-150 text-black-300 hover:-translate-y-1 hover:scale-[102%] hover:text-black-900 duration-300"
          >
            {linkTitle} &rarr;
          </Link>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
