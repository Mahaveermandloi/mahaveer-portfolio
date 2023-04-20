import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { BsSunFill, BsMoonStarsFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import useColorMode from "@/hooks/useColorMode";
import dynamic from "next/dynamic";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "#about" },
  { name: "Resume", href: "/public/favicon.ico" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [colorMode, setColorMode] = useColorMode();

  return (
    <>
      <div className="bg-neutral-50 dark:bg-neutral-900">
        <header className="inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 px-8 lg:px-20"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <h3 className="font-body text-4xl font-bold dark:text-neutral-50">
                  ns<span className="text-purple-500">.</span>
                </h3>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-end rounded-default p-2.5 text-neutral-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <FiMenu className="h-6 w-6 text-neutral-800 dark:text-neutral-50" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-normal leading-6 text-neutral-900 dark:text-neutral-100 hover:text-purple-600 dark:hover:text-purple-200 hover:font-semibold hover:underline hover:underline-offset-4 active:text-purple-500 dark:active:text-purple-200 active:font-semibold active:underline active:underline-offset-4"
                >
                  {item.name}
                </a>
              ))}
              <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center text-neutral-900 dark:text-neutral-50">
                <button
                  onClick={() =>
                    setColorMode(colorMode === "light" ? "dark" : "light")
                  }
                >
                  {colorMode === "light" ? (
                    <BsMoonStarsFill className="text-lg" />
                  ) : (
                    <BsSunFill className="text-lg" />
                  )}
                </button>
              </div>
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-50 dark:bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10 dark:sm:ring-neutral-800">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <h3 className="font-body text-4xl font-bold text-neutral-900 dark:text-neutral-50">
                    ns<span className="text-purple-500">.</span>
                  </h3>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-default p-2.5 text-neutral-700 dark:text-neutral-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <FiX className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-neutral-500/10 dark:divide-neutral-700">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-default px-3 py-2 text-base font-normal leading-7 text-neutral-900 dark:text-neutral-50 hover:bg-purple-50 dark:hover:bg-neutral-700 active:bg-purple-50 dark:active:bg-neutral-700"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-row justify-start gap-10 py-6">
                    <button
                      className="-mx-3 block rounded-default px-3 py-2.5 text-lg text-neutral-900 dark:text-neutral-50 hover:bg-purple-200 dark:hover:bg-neutral-700"
                      onClick={() =>
                        setColorMode(colorMode === "light" ? "dark" : "light")
                      }
                    >
                      {colorMode === "light" ? (
                        <BsMoonStarsFill className="text-lg" />
                      ) : (
                        <BsSunFill className="text-lg" />
                      )}
                    </button>
                    <a
                      href="https://github.com/nsafarova"
                      target="_blank"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-lg hover:bg-purple-200 dark:hover:bg-neutral-700 dark:text-neutral-50"
                    >
                      <BsGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/nssafarova/"
                      target="_blank"
                      className="-mx-3 block rounded-default px-3 py-2.5 text-lg hover:bg-purple-200 dark:hover:bg-neutral-700 dark:text-neutral-50"
                    >
                      <BsLinkedin />
                    </a>
                  </div>
                </div>
                <p className="font-body text-2xs text-neutral-400 py-10">
                  &copy; Designed and coded by Nigar Safarova 💜
                </p>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      </div>
    </>
  );
}

export default dynamic (() => Promise.resolve(Navbar), {ssr: false})

