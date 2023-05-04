import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const Project = ({
  title,
  description,
  imageUrl,
  githubUrl,
  liveDemoUrl,
  techStackIcons,
}) => {
  return (
    <div className="max-w-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 overflow-hidden rounded-sm z-0">
      <div className="relative">
        <Image src={imageUrl} alt={title} responsive width={510} height={300}  />
      </div>
      <div className="relative z-1 px-4 py-2 bg-neutral-50 dark:bg-neutral-900">
        <h3 className="font-display text-lg md:text-2xl text-neutral-900 dark:text-neutral-50 font-bold my-2">
          {title}
        </h3>
        <p className="font-body text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
          {description}
        </p>
        <div className="flex my-5">
          {techStackIcons.map((techStackIcon) => (
            <span
              key={techStackIcon.key}
              className="mr-3 text-xl text-neutral-900 dark:text-neutral-200"
            >
              {techStackIcon.icon}
            </span>
          ))}
        </div>
        <div className="flex py-2 font-body text-center text-2xs md:text-xs font-semibold">
          <Link href={githubUrl}>
            <button
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mr-4 rounded-default font-body px-4 py-2.5 text-neutral-50 dark:text-neutral-900 uppercase bg-purple-500 dark:bg-purple-300 hover:text-neutral-50 dark:hover:text-neutral-900 hover:bg-purple-600 dark:hover:bg-purple-200"
            >
              View Code
            </button>
          </Link>
          <Link href={liveDemoUrl}>
            <button
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-default font-body px-4 py-2.5 text-neutral-900 dark:text-neutral-50 uppercase border border-purple-500 dark:border-purple-300 hover:text-neutral-50 dark:hover:text-neutral-900 hover:bg-purple-600 dark:hover:bg-purple-200"
            >
              Live Demo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default dynamic (() => Promise.resolve(Project), {ssr: false})