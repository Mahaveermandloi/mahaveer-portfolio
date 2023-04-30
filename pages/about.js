import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Head from "next/head";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiFigma,
  SiStorybook,
  SiGit,
} from "react-icons/si";
// import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function About() {
  return (
    <>
    <Head>
        <title>Nigar Safarova | About Me</title>
        <meta name="description" content="Hi, I'm Nigar, Front-end Dev and this is my portfolio website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="bg-neutral-50 dark:bg-neutral-900">
        <Navbar />
        <Intro />
        <Skills />
        <Interests />
        <Footer />
      </div>
    </>
  );
}

const Intro = () => {
  return (
    <section className="py-6">
      <h2 className="font-display text-4xl text-center font-bold mb-16 dark:text-neutral-50">
        About Me
      </h2>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <div className="relative">
            <Image
              src="/images/nigar.jpg"
              alt="My photo"
              width={320}
              height={500}
            />
          </div>
        </div>
        <div className="md:w-2/3 md:pl-10">
          <h3 className="font-display text-2xl font-medium mb-2 dark:text-neutral-100">
            &quot;A quote that represents me&quot;
          </h3>
          <p className="font-body text-base text-neutral-700 dark:text-neutral-100 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique ante a velit auctor, ac suscipit nibh hendrerit. Sed eget
            dolor at lectus facilisis vehicula a a enim. Suspendisse ultrices
            vestibulum eros. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Duis a eros non augue
            sagittis iaculis. Proin quis ipsum ac augue consequat faucibus a vel
            ex. Integer id congue mi.
          </p>
          <p className="font-body text-base text-neutral-700 dark:text-neutral-100 mb-4">
            Nulla suscipit sollicitudin velit, nec pellentesque nisl dignissim
            et. Donec porta mauris felis, eu consectetur ex maximus eget. Duis
            sit amet risus eu ex dictum molestie eu et orci. Ut sollicitudin,
            lectus sed ullamcorper iaculis, libero quam blandit nunc, et
            scelerisque lorem quam vitae ipsum. Duis varius orci sit amet velit
            efficitur, eget pellentesque lorem dapibus. Aliquam aliquet velit ut
            augue tristique, a vestibulum sapien mattis. Vivamus consectetur
            elit ut molestie pellentesque.
          </p>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    {
      name: "Html",
      icon: <SiHtml5 size={48} />,
      color: "text-html",
    },
    {
      name: "CSS",
      icon: <SiCss3 size={48} />,
      color: "text-css",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={48} />,
      color: "text-javascript",
    },
    {
      name: "React.js",
      icon: <SiReact size={48} />,
      color: "text-react",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={48} />,
      color: "text-nextjs dark:text-neutral-50",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={48} />,
      color: "text-tailwind",
    },
    {
      name: "Git",
      icon: <SiGit size={48} />,
      color: "text-git",
    },
    {
      name: "Figma",
      icon: <SiFigma size={48} />,
      color: "text-figma",
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="font-display text-2xl font-medium mb-2 text-center dark:text-neutral-100">
            Skills
          </h2>
          <p className="font-body text-base text-neutral-700 dark:text-neutral-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique ante a velit auctor, ac suscipit nibh hendrerit. Sed eget
            dolor at lectus facilisis vehicula a a enim.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <div key={skill.name} className="p-4 text-center">
              <div
                className={`w-18 h-16 rounded-full flex items-center justify-center mb-2 ${skill.color}`}
              >
                {skill.icon}
              </div>
              <h3 className="font-body text-base mb-2 dark:text-neutral-200">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Interests = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="font-display text-2xl font-medium mb-2 text-center dark:text-neutral-100">
            Interests
          </h2>
          <p className="font-body text-base text-neutral-700 dark:text-neutral-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique ante a velit auctor, ac suscipit nibh hendrerit. Sed eget
            dolor at lectus facilisis vehicula a a enim.
          </p>
        </div>
      </div>
    </section>
  );
};
