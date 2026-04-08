import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-bg flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 w-full">
      <div className=" w-full">
        <Hero />
      </div>
    </main>
  );
}
