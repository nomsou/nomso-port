"use client";

import React from "react";
import Particles from "../components/particles";

export default function Resume() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-black">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={5000}
      />
      ;<h1 className="text-white text-3xl font-bold mb-4">My Resume</h1>
      <iframe
        src="/resume.pdf"
        className="w-[90%] h-[80vh] border-2 border-gray-700"
      />
    </div>
  );
}
