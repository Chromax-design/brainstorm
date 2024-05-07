import React from "react";
import Container from "../UI/Container";
import Link from "next/link";
import Image from "next/image";

const socials = [
  { link: "", icon: "facebook.svg", alt: "facebook icon" },
  { link: "", icon: "twitter.svg", alt: "twitter icon" },
  { link: "", icon: "whatsapp.svg", alt: "whatsapp icon" },
  { link: "", icon: "instagram.svg", alt: "instagram icon" },
];

const Links = [
  {
    title: "about",
    path: "/about",
  },
  {
    title: "contact us",
    path: "/contact",
  },
  {
    title: "terms of use",
    path: "/terms",
  },
  {
    title: "privacy policy",
    path: "/privacy",
  },
  {
    title: "articles",
    path: "/privacy",
  },
  {
    title: "news",
    path: "/privacy",
  },
  {
    title: "health conditions",
    path: "/privacy",
  },
  {
    title: "fitness",
    path: "/privacy",
  },
  {
    title: "relationship",
    path: "/privacy",
  },
  {
    title: "sexual health",
    path: "/privacy",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black pt-14 pb-10 text-gray-100 px-3">
      <Container>
        <div className="flex gap-7 max-lg:justify-center">
          {socials.map((social, i) => (
            <Link
              href={social.link}
              key={i}
              className=" hover:scale-110 transition w-6 h-6 sm:w-7 sm:h-7 relative"
            >
              <Image
                src={`/assets/icons/${social.icon}`}
                alt={social.alt}
                fill
                className="w-auto h-auto"
              />
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:justify-center mt-10 gap-10">
          <div className="space-y-4 max-lg:flex max-lg:items-center max-lg:flex-col">
            <h2 className="text-2xl capitalize font-bold">
              get our wellness newsletter
            </h2>
            <p className="max-sm:text-sm font-medium max-w-md max-lg:text-center">
              Filter out the noise and nurture your inbox with health and
              wellness advice that’s inclusive and rooted in medical expertise.
            </p>
            <form action="" className="flex max-w-sm">
              <input
                type="text"
                className="flex-1 placeholder:font-semibold placeholder:capitalize px-4 py-3 focus:border-none focus:outline-none text-black"
                placeholder="enter your email"
              />
              <button className="px-4 py-3 bg-dark text-white uppercase font-semibold">
                sign up
              </button>
            </form>
          </div>
          <div className="flex justify-center gap-14 lg:grid lg:grid-cols-[200px,1fr] max-lg:justify-center">
            <ul className="space-y-5">
              {Links.slice(0, 4).map((link) => (
                <li
                  key={link.path}
                  className=" font-medium capitalize text-xs tracking-wide"
                >
                  <Link href={`${link.path}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <div>
              <ul className="space-y-5">
                {Links.slice(4, 8).map((link, i) => (
                  <li
                    key={i}
                    className=" font-medium capitalize text-xs tracking-wide"
                  >
                    <Link href={`${link.path}`}>{link.title}</Link>
                  </li>
                ))}
              </ul>
              <p className="text-xs font-medium mt-4 hidden lg:block">
                © {new Date().getFullYear()} Brainstorm Med Tv. Our content does
                not constitute a medical consultation. See a certified medical
                professional for diagnosis. See additional information.
              </p>
            </div>
          </div>
          <p className="text-xs font-medium mt-4 lg:hidden text-center max-w-lg mx-auto">
            © {new Date().getFullYear()} Brainstorm Med Tv. Our content does not
            constitute a medical consultation. See a certified medical
            professional for diagnosis. See additional information.
          </p>
        </div>
      </Container>
    </footer>
  );
}
