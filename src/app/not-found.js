"use client";
import { SmileySad } from "@phosphor-icons/react";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="text-white flex justify-center items-center flex-col h-screen md:text-2xl text-xl gap-5">
      <SmileySad size={50} />
      <div className="flex gap-2">
        <h1>404 | </h1>
        <h2>Page Not Found!</h2>
      </div>
      <Link
        href="/"
        className="outline p-3 w-[150px] rounded-md cursor-pointer text-center hover:bg-white hover:text-black transition ease-in-out delay-150"
      >
        Kembali
      </Link>
    </div>
  );
};

export default PageNotFound;
