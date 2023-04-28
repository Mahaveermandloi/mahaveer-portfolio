import Link from "next/link";
import { FiMail, FiArrowUp } from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center text-center lg:text-start">
        <div>
          <h3 className="mb-4 lg:mb-8 font-display font-bold text-lg md:text-xl text-neutral-900 dark:text-neutral-50">
            Let&apos;s connect
          </h3>
          <p className="font-body text-xs md:text-md text-neutral-700 dark:text-neutral-300 mt-3">
            Shoot me email to chat about my work or just like to say hey 👋
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center space-x-4 pt-5">
            <Link href="mailto:nigarsafarova@hotmail.com?subject=Mail from Nigar's Website">
              <button className="block rounded-default px-3 py-2.5 text-lg lg:text-xl text-neutral-50 dark:text-neutral-900 bg-neutral-900 dark:bg-neutral-50">
                <FiMail />
              </button>
            </Link>
            <Link href="https://github.com/nsafarova">
              <button
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-default px-3 py-2.5 text-lg lg:text-xl text-neutral-50 dark:text-neutral-900 bg-neutral-900 dark:bg-neutral-50"
              >
                <BsGithub />
              </button>
            </Link>
            <Link href="https://www.linkedin.com/in/nssafarova/">
              <button
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-default px-3 py-2.5 text-lg lg:text-xl text-neutral-50 dark:text-neutral-900 bg-neutral-900 dark:bg-neutral-50"
              >
                <BsLinkedin />
              </button>
            </Link>
          </div>
          <button
            className="animate-pulse flex items-center gap-2 text-neutral-900 dark:text-neutral-50 px-4 py-2 rounded-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top <FiArrowUp className="text-lg" />
          </button>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto text-center mt-6 lg:mt-10 text-neutral-600 dark:text-neutral-300">
        <p className="text-2xs lg:text-xs">
          &copy; {new Date().getFullYear()} Designed and coded by Nigar Safarova
          💜
        </p>
      </div>
    </footer>
  );
};

export default Footer;
