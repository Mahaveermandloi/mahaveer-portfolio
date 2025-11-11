"use client";

import Link from "next/link";
import Image from "next/image";
import { FaJava, FaAws, FaDatabase, FaGithub } from "react-icons/fa";

import { Hero } from "@/components/hero/Hero";
import { KPMGImageGallery } from "@/components/gallery/KPMGImageGallery";

export default function KPMGExperience() {
  return (
    <>
      <div className="relative min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 p-6 md:p-10">
        {/* Header */}
        <Hero />

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">
            KPMG Internship Experience
          </h1>

          <p className="text-lg text-neutral-500 dark:text-neutral-400">
            January 2025 – Present • Analyst – Digital Trust
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/kpmgexp.png"
            alt="KPMG Experience"
            className="rounded-lg shadow-md"
            width={500}
            height={300}
          />
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <p className="mb-6 text-base md:text-lg leading-relaxed">
            Assisted in implementing privacy frameworks (DPDPA, GDPR) and
            governance models across multiple business units, ensuring
            regulatory compliance and reducing data risk exposure by 20%.
            Collaborated with cross-functional teams to analyse client data
            flows, identify compliance gaps, and deliver actionable insights —
            improving data governance efficiency by 25%, fostering agile
            execution, and enhancing overall team productivity and
            communication. Worked on enterprise-level backend systems using Java
            and Spring Boot, building REST APIs, integrating AWS services, and
            optimizing database queries for reporting tools.
          </p>

          {/* Additional Expertise & Initiatives */}
          <div className="mb-6 text-base md:text-lg leading-relaxed">
            <h2 className="font-semibold text-lg mb-2">
              Additional Expertise & Initiatives:
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Gained hands-on exposure to ISO 27001 ISMS, PIMS 27701, and
                Operational Technology compliance frameworks, applying best
                practices for information security management and privacy impact
                assessment across organizational processes.
              </li>
              <li>
                Developed proficiency in GDPR implementation, aligning data
                handling practices with international privacy standards to
                mitigate regulatory risks.
              </li>
              <li>
                Actively contributing to IT Audit initiatives within GITC
                (General IT Controls) and ITAC (IT Application Controls),
                performing risk assessments and controls testing to strengthen
                organizational compliance posture.
              </li>
              <li>
                Demonstrated ability to integrate security, privacy, and
                compliance frameworks into enterprise operations, enhancing
                governance, risk management, and overall operational resilience.
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-start gap-4 mt-8 flex-wrap">
            <Link
              href="https://kpmg.com/in/en.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-purple-500 hover:bg-purple-600 text-neutral-50 font-semibold rounded-md"
            >
              Visit Company
            </Link>

            <Link
              href="/images/KPMGInternshipLetter.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="KPMGInternshipLetter.pdf"
              className="px-6 py-2.5 border border-purple-500 text-purple-500 dark:text-purple-300 hover:bg-purple-600 hover:text-white font-semibold rounded-md"
            >
              View Certificate
            </Link>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <KPMGImageGallery />
    </>
  );
}
