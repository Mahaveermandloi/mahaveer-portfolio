"use client";

import Link from "next/link";
import Image from "next/image";
import { FaJava, FaAws, FaDatabase } from "react-icons/fa";

export default function KPMGExperience() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 p-6 md:p-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">
          Shantiinfosoft LLP Internship Experience
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          May 2024 - Jul 2024 • MERN Developer Intern
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center mb-8">
        <Image
          src="./public/images/shantiinfosoft_exp.png"
          alt="Shantiinfosoft LLP Experience"
          className="rounded-lg shadow-md"
          width={500}
          height={300}
        />
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto text-center md:text-left">
        <p className="mb-6 text-base md:text-lg leading-relaxed">
          Completed a full-stack development internship at Shanti Infosoft LLP
          as a MERN Developer Intern. Built a production-grade admin panel using
          the MERN Stack with JWT authentication, secure file handling, and
          automated email recovery via Nodemailer — improving session
          reliability by 30% and reducing manual recovery time by 40%. Designed
          and deployed 20+ RESTful APIs and optimized MongoDB schemas to support
          student and school workflows, including subscription management for
          free and paid plans, resulting in a 25% increase in data retrieval
          speed and a 35% boost in system scalability.
        </p>

        {/* Tech Stack */}
        <div className="flex justify-center md:justify-start gap-4 text-3xl my-4">
          <FaJava title="Java" />
          <FaAws title="AWS" />
          <FaDatabase title="MySQL" />
        </div>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mt-8">
          <Link
            href="https://home.kpmg/in/en/home.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-purple-500 hover:bg-purple-600 text-neutral-50 font-semibold rounded-md"
          >
            Visit Company
          </Link>

          <Link
            href="https://example.com/kpmg-certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-purple-500 text-purple-500 dark:text-purple-300 hover:bg-purple-600 hover:text-white font-semibold rounded-md"
          >
            View Certificate
          </Link>
        </div>
      </div>
    </div>
  );
}
