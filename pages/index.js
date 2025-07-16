import Navbar from "@/components/navbar";
import ProjectCard from "@/components/projectCard";
import Head from "next/head";
import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import projects from "@/data/projects";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import Link from "next/link";
import Footer from "@/components/footer";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Head>
        <title>Mahaveer Mandloi | Front-end Dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-purple-300 z-50 origin-[0%]"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="bg-neutral-50 dark:bg-neutral-900">
        <Navbar />
        <Hero />
        <ScrollButton />
        <Projects />
        <About />
        <Footer />
        <ScrollUpButton />
      </div>
    </>
  );
}

const Hero = () => {
  const [bubbles, setBubbles] = useState([]);

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    const numBubbles = 16;
    const newBubbles = Array(numBubbles)
      .fill(null)
      .map(() => {
        const size = getRandomNumber(40, 100);
        const x = getRandomNumber(0, window.innerWidth);
        const y = getRandomNumber(0, window.innerHeight);
        const delay = getRandomNumber(0, 2);
        return { size, x, y, delay };
      });
    setBubbles(newBubbles);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between py-12 px-6 sm:px-16 lg:px-120 sm:py-40 lg:py-28 2xl:py-48">
      <div className="md:mx-auto max-w-4xl">
        <div className="text-left md:text-center">
          <h1 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Hi, I&apos;m Mahaveer Mandloi.
          </h1>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-purple-900 dark:text-purple-300">
            Full Stack Developer • Analyst • Lifelong Learner
          </h2>
          <p className="font-body mt-6 text-sm md:text-lg leading-4 text-neutral-600 dark:text-neutral-100">
            Welcome to my space on the internet!
          </p>
          <p className="font-body mt-6 text-sm md:text-base leading-8 text-neutral-600 dark:text-neutral-100">
            I'm a passionate Developer and Analyst with a strong foundation in
            Computer Science. As a curious student and constant learner, I
            thrive on exploring new technologies and solving real-world
            problems. I enjoy blending logic with creativity to build
            responsive, user-friendly web applications. With a detail-oriented
            mindset and a love for clean, efficient code, I aim to grow through
            challenges and contribute to impactful tech solutions.
          </p>

          <div className="mt-10 flex md:justify-center items-center gap-3 sm:gap-6 font-body">
            <Link
              href="https://github.com/mahaveermandloi"
              target="_blank"
              className="block rounded-default px-3 py-2.5 text-lg md:text-xl text-neutral-50 dark:text-neutral-900 bg-purple-600 dark:bg-purple-200 hover:bg-purple-900 dark:hover:bg-purple-400"
            >
              <BsGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/mahaveer-mandloi/"
              target="_blank"
              className="block rounded-default px-3 py-2.5 text-lg md:text-xl text-neutral-50 dark:text-neutral-900 bg-purple-600 dark:bg-purple-200 hover:bg-purple-900 dark:hover:bg-purple-400"
            >
              <BsLinkedin />
            </Link>
            <Link
              href="mailto:mahaveermandloi9@gmail.com?subject=Mail from Mahaveer's Mandloi Platform Website"
              className="block rounded-default px-4 py-2.5 font-body text-center text-2xs md:text-xs font-semibold text-neutral-900 dark:text-neutral-50 uppercase border border-purple-500 dark:border-purple-300 hover:text-neutral-50 dark:hover:text-neutral-900 hover:bg-purple-600 dark:hover:bg-purple-200"
            >
              Get&nbsp;in&nbsp;touch
            </Link>
            <Link
              href="https://drive.google.com/file/u/1/d/1mOgKJuncRJkeHRy6MSccTSCOolwCwc73/view?usp=sharing"
              target="_blank"
              className="invisible sm:visible block rounded-default px-4 py-2.5 font-body text-center text-2xs md:text-xs font-semibold text-neutral-900 dark:text-neutral-50 uppercase border border-purple-500 dark:border-purple-300 hover:text-neutral-50 dark:hover:text-neutral-900 hover:bg-purple-600 dark:hover:bg-purple-200"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>

      <div className="fixed w-full">
        <div className="flex justify-between">
          {bubbles.map((bubble, index) => (
            <motion.div
              key={index}
              initial={{ y: bubble.y, opacity: 0 }}
              animate={{ y: "-100vh", opacity: 1 }}
              transition={{
                duration: getRandomNumber(8, 12),
                delay: bubble.delay,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                width: bubble.size,
                height: bubble.size,
                borderRadius: "50%",
                backgroundImage: `linear-gradient(to right, #b993d6, #8ca6db)`,
                backdropFilter: "blur(5px)",
                position: "absolute",
                left: bubble.x,
                boxShadow:
                  "0 0 10px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.2)",
                mixBlendMode: "screen",
                transform: `rotate(${getRandomNumber(-15, 15)}deg)`,
                zIndex: "-1",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="font-display text-3xl md:text-4xl font-bold pb-6 text-center text-neutral-900 dark:text-neutral-50">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center">
        {projects.map((project) => (
          <div key={project.title} className="mx-6 my-8">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-20 xl:gap-52 py-20 md:py-32 px-6 sm:px-16 lg:px-120"
    >
      <div className="max-w-xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-neutral-50">
          Hi there!
        </h2>

        <p className="font-body text-sm xl:text-lg mb-4 text-neutral-600 dark:text-neutral-300">
          I’m
          <span className="font-bold"> Mahaveer Mandloi</span>, a Computer
          Science graduate and passionate Full-Stack Developer based in India.
          Currently working as an Analyst Intern at
          <span className=" text-purple-500 font-bold"> KPMG</span>, I enjoy
          building clean, efficient, and user-friendly web applications. I
          thrive on solving real-world challenges and continuously expanding my
          skills.
          <br />
          <br />
          I’m skilled in React, Node.js, Express, MongoDB, and Tailwind CSS,
          with growing experience in Next.js. I take pride in writing clean
          code, learning new technologies, and contributing to projects that
          make an impact. Outside of work, I enjoy exploring tech trends,
          collaborating on new ideas, and staying curious every day.
        </p>

        <Link href="/about">
          <button className="flex items-center rounded-default font-body text-2xs md:text-xs font-semibold px-4 py-2.5 text-neutral-50 dark:text-neutral-900 uppercase bg-purple-500 dark:bg-purple-300 hover:text-neutral-50 dark:hover:text-neutral-900 hover:bg-purple-600 dark:hover:bg-purple-200">
            Read More
          </button>
        </Link>
      </div>
      <div className="-mt-6 ml-6 md:ml-0">
        <div className="relative">
          <div className="absolute z-0 -left-7 -bottom-7">
            <Image
              src="/images/image1.jpg"
              alt="My Picture"
              width={320}
              height={510}
              className="rounded-default"
            />
          </div>
          <div className="z-10 bottom-0 left-0 rounded-default bg-purple-400 w-[320px] h-[425px]"></div>
        </div>
      </div>
    </div>
  );
};

const ScrollButton = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleScrollDown}
        className="animate-bounce inline-flex items-center mb-28 px-4 text-neutral-400 transition duration-300 ease-in-out"
      >
        <span className="text-xs mr-2">Scroll</span>
        <FiArrowDown className="text-lg" />
      </button>
    </div>
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
