import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-bg flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 w-full">
      <FloatingNav navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]} />
      <div className=" w-full">
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
