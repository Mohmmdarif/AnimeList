import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      {api.data.map((anime) => {
        return (
          // <Link
          //   href={`/${anime.mal_id}`}
          //   className="cursor-pointer text-slate-300 hover:text-slate-200"
          // >
          //   <Image
          //     src={anime.images.webp.image_url}
          //     alt="..."
          //     width={350}
          //     height={450}
          //     className="w-full min-h-[300px] max-h-[450px] rounded-sm"
          //   />
          //   <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
          // </Link>
          <Link
            href={`/${anime.mal_id}`}
            className="cursor-pointer text-slate-300 hover:text-slate-200"
          >
            <div className="relative w-full min-h-[300px] max-h-[450px] rounded-sm overflow-hidden">
              <Image
                src={anime.images.webp.image_url}
                alt="Anime Teaser Image"
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
            </div>
            <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
