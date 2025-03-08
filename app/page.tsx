import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  // { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Skills", href: "/skills" },
  { name: "Resume", href: "/resume.pdf" },
  { name: "Youtube", href: "https://www.youtube.com/nomso" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-zinc-300 sm:text-zinc-500 text-lg duration-500 font-semibold hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={5000}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-2000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-7xl md:text-8xl whitespace-nowrap bg-clip-text ">
        NOMSO
      </h1>

      {/* Alternate text styling */}
      {/* <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        onare
      </h1>
      <h5 className="z-10 text-3xl text-transparent duration-1000 bg-zinc-900 cursor-default text-edge-outline animate-title font-display sm:text-6lg md:text-9lg whitespace-nowrap bg-clip-text ">
        development
      </h5> */}

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-zinc-300 sm:text-zinc-500 mx-6 font-semibold">
          I'm currently building{" "}
          <Link
            target="_blank"
            href="https://refreeg.com"
            className="underline duration-500 hover:text-zinc-300"
          >
            Refreeg
          </Link>{" "}
          to solve Problems in Africa for Africans.
        </h2>
      </div>
    </div>
  );
}
