"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearchInput = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      const searchValue = searchRef.current.value;
      router.push(`/search/${searchValue}`);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="bg-neutral-800 text-white p-2 md:w-[30%] w-[50%] rounded-md"
        ref={searchRef}
        onKeyDown={handleSearchInput}
      />
      <button className="absolute text-white end-7" onClick={handleSearchInput}>
        <MagnifyingGlass size={20} />
      </button>
    </>
  );
};

export default InputSearch;
