import Image from "next/image";
import Header from "./(constants)/header";
import Hero from "./pages/hero";

export default function Home() {
  return (
    <>
    <Header />
    <main className="mt-[72px]">
      <Hero />
    </main>
    </>
  );
}
