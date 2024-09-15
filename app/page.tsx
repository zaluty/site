import React from "react";
import { Link } from "next-view-transitions";
import ModeToggle from "@/components/c/modeToggle";

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
  return (
    <>
      <AnimatedName />
      <div className="space-y-4 leading-snug">
        <p>
          I&apos;m a 60% fullstack developer, i suck at design but i am
          learning, optimist. I work at no where i am only 16 years old. my main
          mission is to embrace the process of learning by doing, building great
          products and open-sourcing.
        </p>
        <h4>i am insipired by many people, like:</h4>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            Lee Robinson (you can judge by the design of this website)
          </li>
          <li className="mb-2">
            Teo from t3.gg (web stuff is like a sip of water to me)
          </li>
          <li className="mb-2">
            Primeagen (he is a legend, he is the reason i started learning go)
          </li>
        </ul>
        <span className="flex">
          here is my projects{" "}
          <Link
            href="/projects"
            className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-500 ml-2 relative after:content-['→'] after:ml-0.5 after:absolute after:transition-transform after:duration-300 after:left-full after:translate-x-0 hover:after:translate-x-full"
          >
            projects
          </Link>
          <span className="ml-9">and my blog</span>
          <Link
            href="/blog"
            className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-500 ml-2 relative after:content-['→'] after:ml-0.5 after:absolute after:transition-transform after:duration-300 after:left-full after:translate-x-0 hover:after:translate-x-full"
          >
            blog
          </Link>
        </span>
        <p>
          sometimes when i feel like it i create educational content for
          developers, teaching them about various technologies and tools. like:
          TypeScript, React, Next.js, and more. .
        </p>
        <p>
          i have some tools for developers, like:
          <span className="mx-2">
            <Link
              href="https://keyzilla.vercel.app"
              className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-500 after:content-['_↗']"
              target="_blank"
              rel="noopener noreferrer"
            >
              keyzilla
            </Link>
          </span>
          and for non-developers, like:
          <span className="mx-2">
            <Link
              href="https://ytbuddy.com"
              className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-500 after:content-['_↗']"
              aria-disabled={true}
            >
              ytbuddy
            </Link>
          </span>
        </p>
      </div>
    </>
  );
}
