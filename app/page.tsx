"use client";
import React from "react";
import { Link } from "next-view-transitions";
import ModeToggle from "@/components/c/modeToggle";
import { InViewImagesGrid } from "@/components/gellery";
import {  Text } from "@/components/website-navigations";
import { Button } from "@/components/ui/button";
 

function AnimatedName() {
  return (
    <h1 className="font-medium pt-12 transition-element">
      <span className="sr-only">Hamza Essafar</span>
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
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <AnimatedName />
      <Text open={open} setOpen={setOpen}  />
      <div className="absolute top-0 right-0 p-4">
        <Button  
        size={"sm"}
        onClick={() => setOpen(true)}
        >
          text ?
        </Button>
      </div>
      <div className="space-y-4 leading-snug ">
        <p className=" text-cyan-600">
          I&apos;m a passionate 16-year-old fullstack developer on a journey of
          continuous learning. While I&apos;m still honing my design skills, I
          approach every challenge with optimism. My mission is to embrace
          hands-on learning, create impactful projects, and contribute to
          open-source projects.
        </p>
        <h4>I draw inspiration from several industry leaders:</h4>
        <ul className="list-disc pl-5 text-yellow-500">
          <li className="mb-2">
            <span className="text-blue-500 dark:text-blue-300">
            Lee Robinson {" "}
            </span>
            (whose design influence you might notice on this
            website)
          </li>
         
          <li className="mb-2">
            <span className="text-blue-500 dark:text-blue-300">
              ThePrimeagen   {" "}
            </span>
              (a legendary figure who inspired my journey into Go
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
        <p className="mt-4 text-orange-500">
          I&apos;m passionate about creating tools for developers espcially to help them build better products.
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
