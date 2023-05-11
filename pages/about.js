import React from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiFigma,
  SiGit,
} from "react-icons/si";
import { FiArrowUp } from "react-icons/fi";
import { motion, useScroll } from "framer-motion";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function About() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Head>
        <title>Nigar Safarova | About Me</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-purple-300 z-50 origin-[0%]"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="bg-neutral-50 dark:bg-neutral-900">
        <Navbar />
        <Intro />
        <Skills />
        <Interests />
        <Footer />
        <ScrollUpButton />
      </div>
    </>
  );
}

const Intro = () => {
  return (
    <section className="py-6 mx-auto">
      <h2 className="font-display text-4xl text-center font-bold mb-5 md:mb-16 dark:text-neutral-50">
        About Me
      </h2>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <div className="flex justify-center sm:justify-start">
            <Image
              src="/images/nigar.jpg"
              alt="My photo"
              width={320}
              height={500}
              responsive
              className="mx-auto sm:ml-0"
            />
          </div>
        </div>
        <div className="md:w-2/3 md:pl-10">
          <p className="font-body text-sm md:text-base text-neutral-700 dark:text-neutral-100 mb-2">
            Nice to meet you! My name is Nigar, I am an IT graduate and
            Front-end Developer based in Baku, Azerbaijan. I am very passionate
            about technology and everything that surrounds it. From gadgets to
            software, I am always up-to-date on the latest trends and
            advancements in the tech industry. Coding is my absolute favorite
            thing to do! It is a way for me to express my creativity while at
            the same time - solving problems. I am always looking for new
            challenges to test my skills and develop myself in finding solutions
            for different coding problems.
          </p>
          <p className="font-body text-sm md:text-base text-neutral-700 dark:text-neutral-100 mb-4">
            I am a solution-oriented person. I always look for ways to improve
            processes and create more efficient solutions. Whether it&apos;s a
            minor coding issue or a larger project, I am enthusiastic about
            tackling challenges head-on and finding the best possible solution.
            Researching new technologies and discovering new ideas is something
            that I enjoy doing in my daily life. I love exploring new
            possibilities and figuring out how to apply new concepts to my work.
            My keen eye for details comes in handy while I am trying to
            understand complex ideas or working on perfecting my code.
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
          <h2 className="font-display text-2xl font-semibold mb-2 text-center dark:text-neutral-100">
            Skills
          </h2>
          <p className="font-body text-sm md:text-base text-neutral-700 dark:text-neutral-100">
            As a self-taught Front-end Developer, I love learning new skills
            every day. I discovered my passion for web development at university
            and enjoy using the latest technologies to create user-friendly
            websites. I started with React, then learnt Tailwind CSS during an
            internship and started explore Next.js while building my portfolio.
            I am experienced in developing projects from wireframes to
            deployment and have gained confidence through each new challenge.
            Recently, I received a{" "}
            <a
              class="text-purple-600 after:content-['_↗'] ..."
              href="https://www.coursera.org/account/accomplishments/specialization/certificate/LRLRZTZR5TPU"
              target="_blank"
            >
              Meta Front-end Developer
            </a>{" "}
            certificate from Coursera, which solidified my skills. I am
            confident and excited to continue developing my skills.
          </p>
        </div>
        <div className="flex flex-wrap justify-evenly gap-4">
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
          <h2 className="font-display text-2xl font-semibold mb-2 text-center dark:text-neutral-100">
            Interests
          </h2>
          <p className="font-body text-sm md:text-base text-neutral-700 dark:text-neutral-100">
            When I&apos;m not coding, I love to engage in activities that help
            me relax and recharge my batteries. I have created a daily habit of
            reading, which I absolutely love. It is a great way to unwind and
            escape into a world of imagination.
            <br />
            <br />
            To maintain focus and relieve stress, I also enjoy meditating. It is
            a powerful tool that helps me clear my mind and feel more centered.
            I practice yoga to relax my body, especially my back, which tends to
            get sore from sitting at a desk for extended periods of time.
            <br />
            <br />
            As entertaining activities, I listen to music or play arcade games.
            One of my favorite desktop games is The Sims 4, which allows me to
            indulge my creative side while having some fun. Occasionally, I get
            lost in the world of YouTube or Netflix series, which is a great way
            to unwind and relax.
            <br />
            <br />
            Aside from screen time, I love spending time with cats, as they
            always bring me joy and comfort. I also enjoy drawing, which is a
            great way to express my creativity. But nothing beats spending time
            with my family and friends, whether going out for a meal, watching a
            movie, or simply enjoying each others company.
          </p>
        </div>
      </div>
    </section>
  );
};

const ScrollUpButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowButton(!isBottom && window.pageYOffset > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`fixed animate-bounce bottom-4 right-4 bg-purple-400 dark:bg-purple-300 p-3 rounded-default text-neutral-50 dark:text-neutral-900 text-xl font-bold ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClick}
    >
      <FiArrowUp />
    </button>
  );
};
