"use client";

import Link from "next/link";
import Image from "next/image";
import { FaJava, FaAws, FaDatabase  , FaGithub} from "react-icons/fa";

import { Hero } from "@/components/hero/Hero";

import { ShantiImageGallery } from "@/components/gallery/ShantiImageGallery";
export default function ShantiinfosoftLLP() {
  return (
    <>
      <div className=" relative min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 p-6 md:p-10">
        {/* Header */}
        <Hero />

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">
            Shantiinfosoft LLP Internship Experience
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400">
            May 2024 - July 2024 • MERN Developer Intern
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/shantiinfosoftLLP.png"
            alt="KPMG Experience"
            className="rounded-lg shadow-md"
            width={500}
            height={300}
          />
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <p className="mb-6 text-base md:text-lg leading-relaxed">
            Internship Experience — <strong>INTSO Education Admin Portal</strong>
          </p>

          <ul className="list-disc list-inside mb-6 text-base md:text-lg leading-relaxed space-y-2">
            <li>
              <strong>Role:</strong> Full Stack Developer (MERN Stack +
              PHPMyAdmin)
            </li>
            <li>
              <strong>Project:</strong> Admin Portal for an Educational Olympiad
              Website
            </li>
            <li>
              <strong>Key Contributions:</strong>
              <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                <li>
                  Designed and developed complete frontend and backend using
                  MERN stack
                </li>
                <li>
                  Created GUI for uploading and managing images, PDFs, and
                  videos
                </li>
                <li>
                  Implemented authentication & authorization: login, forgot
                  password, reset via email
                </li>
                <li>
                  Managed student and admin data, verified and registered
                  students
                </li>
                <li>Modified/updating banners and news on the main website</li>
                <li>
                  Ensured responsive design across all devices using Tailwind
                  CSS
                </li>
                <li>Deployed backend using Putty SSH</li>
              </ul>
            </li>
            <li>
              <strong>Technical Stack:</strong>
              <ul className="list-disc list-inside ml-5 mt-1 space-y-1">
                <li>Frontend: React + Tailwind CSS</li>
                <li>Backend: Node.js + Express</li>
                <li>Database: PHPMyAdmin / MySQL</li>
                <li>Deployment: SSH via Putty</li>
              </ul>
            </li>
            <li className="text-purple-700 font-bold mt-2">
              Note: This project is no longer live on the client server, but the
              code is available on GitHub.
            </li>
          </ul>

      

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-8 flex-wrap">
            <Link
              href="https://shantiinfosoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-purple-500 hover:bg-purple-600 text-neutral-50 font-semibold rounded-md"
            >
              Visit Company
            </Link>

            <Link
              href="/images/InternshipCertificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="InternshipCertificate.pdf"
              className="px-6 py-2.5 border border-purple-500 text-purple-500 dark:text-purple-300 hover:bg-purple-600 hover:text-white font-semibold rounded-md"
            >
              View Certificate
            </Link>

            <Link
              href="https://github.com/Mahaveermandloi/INTSO-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white font-semibold rounded-md flex items-center gap-2"
            >
              <FaGithub /> View on GitHub
            </Link>
          </div>
        </div>
      </div>

      <div></div>

      {/* Gallery Section */}
      <ShantiImageGallery />
    </>
  );
}
