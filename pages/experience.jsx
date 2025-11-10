"use client";

import React from "react";
import { FaReact, FaNode, FaDatabase, FaJava, FaAws } from "react-icons/fa";
import Link from "next/link";

// Step 1: Experience data array
const experienceData = [
  {
    company: "KPMG",
    role: "Analyst",
    duration: "Jan 2025 - Jul 2025",
    description:
      "Worked on enterprise-level backend systems using Java and Spring Boot. Built REST APIs, integrated AWS services, and optimized database queries for reporting tools.",
    techStackIcons: [
      { key: "java", icon: <FaJava /> },
      { key: "aws", icon: <FaAws /> },
      { key: "mysql", icon: <FaDatabase /> },
    ],
    image: "/images/kpmgexp.png",
    certificateUrl: "https://example.com/kpmg-certificate.pdf",
    companyWebsite: "https://home.kpmg/in/en/home.html",
  },

  {
    company: "Shanti Infosoft LLP",
    role: "Web Developer Intern",
    duration: "May 2024 - July 2024",
    description:
      "Developed the INTSO admin panel using React and Node.js. Implemented authentication with JWT, image upload, forgot password via Nodemailer, and deployed using PuTTY.",
    techStackIcons: [
      { key: "react", icon: <FaReact /> },
      { key: "node", icon: <FaNode /> },
      { key: "mysql", icon: <FaDatabase /> },
    ],
    image: "/images/shantiinfosoftLLP.png",
    certificateUrl: "https://example.com/shanti-certificate.pdf",
    companyWebsite: "https://shantiinfosoft.com",
  },
];

// Step 2: Experience component rendering the cards
const Experience = () => {
  return (
    <div id="experience" className="py-10 px-4 md:px-10">
      <h1 className="font-display text-3xl md:text-4xl font-bold pb-6 text-center text-neutral-900 dark:text-neutral-50">
        Experience
      </h1>

      {/* Layout similar to Projects section */}
      <div className="flex flex-wrap justify-center">
        {experienceData.map((experience) => (
          <div key={experience.company} className="mx-6 my-8">
            <ExperienceCard {...experience} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

// Step 3: ExperienceCard component
const ExperienceCard = ({
  company,
  role,
  duration,
  description,
  techStackIcons,
  image,
  certificateUrl,
  companyWebsite,
}) => {
  return (
    <>
      <div className="max-w-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 overflow-hidden  rounded-sm z-0 cursor-pointer hover:shadow-2xl">
        <div className="relative z-1   bg-neutral-50  dark:bg-neutral-900">
          {/* <img src={image} className="rounded-t-2xl" alt="" /> */}
          <img
            src={image}
            className="rounded-t-2xl"
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

          <div className="flex py-2 ml-4 font-body text-center text-2xs md:text-xs font-semibold">
            <Link href="www.kpmg.com">
              <button
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mr-4 rounded-default font-body px-4 py-2.5 text-neutral-50 dark:text-neutral-900 uppercase bg-purple-500 dark:bg-purple-300 hover:text-neutral-50 dark:hover:text-neutral-900 hover:bg-purple-600 dark:hover:bg-purple-200"
              >
                View Experience
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
