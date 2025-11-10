import Link from "next/link";

const ExperienceCard = ({
  company,
  role,
  duration,
  description,
  techStackIcons,
  image,
  dest,
  companyWebsite,
}) => {
  return (
    <Link href={dest} className="block max-w-lg">
      <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 overflow-hidden rounded-sm z-0 cursor-pointer hover:shadow-2xl transition-all duration-300">
        <div className="relative z-1 bg-neutral-50 dark:bg-neutral-900">
          <img
            src={image}
            className="rounded-t-2xl w-full h-52 object-cover"
            alt={`${company} experience`}
          />

          <div className="p-4">
            <h3 className="font-display text-lg md:text-2xl text-neutral-900 dark:text-neutral-50 font-bold">
              {role}
            </h3>

            <p className="text-sm md:text-base text-purple-600 dark:text-purple-300 font-semibold mt-1">
              {company}
            </p>

            <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-4">
              {duration}
            </p>
            <p className="font-body text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
              {description}
            </p>

            {techStackIcons && (
              <div className="flex mt-4 mb-6">
                {techStackIcons.map((iconObj) => (
                  <span
                    key={iconObj.key}
                    className="mr-3 text-xl text-neutral-900 dark:text-neutral-200"
                  >
                    {iconObj.icon}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-between px-4 pb-4">
            <a
              href={companyWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-purple-600 hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              Company Site ↗
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;