"use client";
import { Github, Linkedin, Mail, Smartphone } from "lucide-react";
import Link from "next/link";
import { Icon } from "@iconify-icon/react";
import { Navigation } from "../components/nav";
import { motion } from "framer-motion";
import Particles from "../components/particles";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const skillsData = [
  { elem: "HTML", icon: "logos:html-5" },
  { elem: "CSS", icon: "skill-icons:css" },
  { elem: "JavaScript", icon: "skill-icons:javascript" },
  { elem: "TypeScript", icon: "skill-icons:typescript" },
  { elem: "React", icon: "skill-icons:react-dark" },
  { elem: "Next.js", icon: "skill-icons:nextjs-dark" },
  { elem: "Node.js", icon: "skill-icons:nodejs-dark" },
  { elem: "Git", icon: "skill-icons:git" },
  { elem: "Firebase", icon: "devicon:firebase" },
  { elem: "Tailwind", icon: "skill-icons:tailwindcss-dark" },
  { elem: "MongoDB", icon: "skill-icons:mongodb" },
  { elem: "MySQL", icon: "devicon:mysql-wordmark" },
  { elem: "Vercel", icon: "skill-icons:vercel-dark" },
];

export default function Example() {
  return (
    <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900  pb-16">
      <Navigation />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={1000}
      />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Skills
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the skills I've learned or worked with.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto">
          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skillsData.map((skill, index) => (
              <motion.li
                className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                <div className="flex justify-center ">
                  <Icon
                    icon={skill.icon}
                    style={{ fontSize: "25px", marginRight: "6px" }}
                  />
                  {skill.elem}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
      </div>
    </div>
  );
}
