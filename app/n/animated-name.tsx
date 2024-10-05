"use client";
import ModeToggle from "@/components/c/modeToggle";
import { useRouter } from "next/navigation";
export function AnimatedName() {
  const router = useRouter();
  return (
    <h1 className="font-medium pt-12 transition-element">
      <span className="sr-only">Hamza Essafar</span>
      <span aria-hidden="true" className="block overflow-hidden group relative">
        <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full">
          {"hamza essafar".split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block cursor-pointer"
              style={{ transitionDelay: `${index * 25}ms` }}
              onClick={() => {
                router.push(`/`);
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </span>

        <span className="inline-block absolute left-0 top-0 transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0">
          {"zaluty".split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block cursor-pointer"
              style={{ transitionDelay: `${index * 25}ms` }}
              onClick={() => {
                router.push(`/`);
              }}
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

export function Animatedname() {
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
      </span>
    </h1>
  );
}
