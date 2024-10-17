"use client";
import React from "react";
import { Link } from "next-view-transitions";
import ModeToggle from "@/components/c/modeToggle";
import { InViewImagesGrid } from "@/components/gellery";
function AnimatedName() {
  return (
    <h1 className="font-medium pt-12 transition-element">
      <span className="sr-only">Lee Robinson</span>
      <span aria-hidden="true" className="block overflow-hidden group relative">
        <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full">
          {"hamza essafar".split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>

        <span className="inline-block absolute left-0 top-0 transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
          {"zaluty".split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>
        <div className="absolute right-0 top-0">
          <ModeToggle />
        </div>
      </span>
    </h1>
  );
}

export default function Home() {
  const env = process.env.NODE_ENV || "development";

  // Determine if it's production
  const isProduction = env === "production";
  const isPreview = process.env.VERCEL_ENV === "preview";

  console.log(`Current environment: ${env}`);
  console.log(`Is production: ${isProduction}`);
  console.log(`Is preview: ${isPreview}`);

  return (
    <>
      <AnimatedName />
      <div className="space-y-4 leading-snug">
        <p>
          I&apos;m a passionate 16-year-old fullstack developer on a journey of
          continuous learning. While I&apos;m still honing my design skills, I
          approach every challenge with optimism. My mission is to embrace
          hands-on learning, create impactful projects, and contribute to
          open-source projects.
        </p>
        <h4>I draw inspiration from several industry leaders:</h4>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            Lee Robinson (whose design influence you might notice on this
            website)
          </li>
          <li className="mb-2">
            Theo from t3.gg (who makes complex web concepts feel effortless)
          </li>
          <li className="mb-2">
            ThePrimeagen (a legendary figure who inspired my journey into Go
            programming)
          </li>
        </ul>
        <span className="flex">
          Explore my work:
          <Link
            href="/projects"
            className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-500 ml-2 relative after:content-['→'] after:ml-0.5 after:absolute after:transition-transform after:duration-300 after:left-full after:translate-x-0 hover:after:translate-x-full"
          >
            Projects
          </Link>
          <span className="ml-9">and</span>
          <Link
            href="/blog"
            className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-500 ml-2 relative after:content-['→'] after:ml-0.5 after:absolute after:transition-transform after:duration-300 after:left-full after:translate-x-0 hover:after:translate-x-full"
          >
            Blog
          </Link>
        </span>
        <p>
          I&apos;m passionate about creating educational content for developers,
          sharing insights on cutting-edge technologies and tools such as
          TypeScript, React, Next.js, and more.
        </p>
        <p>
          Check out my developer tools:
          <span className="mx-2">
            <Link
              href="https://keyzilla.vercel.app"
              className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-500 after:content-['_↗']"
              target="_blank"
              rel="noopener noreferrer"
            >
              Keyzilla
            </Link>
          </span>
          And for non-developers:
          <span className="mx-2">
            <Link
              href="https://ytbuddy.com"
              className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-500 after:content-['_↗']"
              aria-disabled={true}
            >
              YTBuddy
            </Link>
          </span>
        </p>
        <InViewImagesGrid />
      </div>
    </>
  );
}
