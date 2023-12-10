import Header from "@/components/AnimeList/Header";
import AnimeList from "@/components/AnimeList";

const Page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
  );
  const topAnime = await response.json();

  return (
    <>
      {/* Anime Populer */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Page;
