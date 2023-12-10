import Navbar from "@/components/Navbar";
import "../app/globals.css";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({
  subsets: ["latin"],
});

export const metadata = {
  title: "AnimeList",
  description: "Website Anime Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-neutral-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
