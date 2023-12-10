import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";

const Page = async ({ params }) => {
  const { searchValue } = params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${searchValue}`
  );
  const searchAnime = await response.json();

  return (
    <>
      {/* Anime Populer */}
      <section>
        <Header title={`Hasil Pencarian: ${searchValue}...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
