"use client";

import React, { useState } from "react";
import Container from "../UI/Container";
import Image from "next/image";
import Link from "next/link";

export const Links = [
  {
    title: "health & wellness",
    path: "",
  },
  {
    title: "articles",
    path: "",
  },
  {
    title: "news",
    path: "/news",
  },
  {
    title: "about us",
    path: "/about",
  },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-black py-2 px-3 fixed w-full h-auto top-0 left-0 z-20">
        <Container>
          <div className="flex justify-between items-center">
            <button className="flex items-center gap-3" onClick={handleClick}>
              <div className="w-7 h-7 relative">
                <Image
                  src={`/assets/icons/${isOpen ? 'close.svg': 'menu.svg'}`}
                  fill
                  alt="menu icon"
                  className="w-auto h-auto"
                />
              </div>
              <div className="w-5 h-5 relative">
                <Image
                  src={"/assets/icons/search.svg"}
                  fill
                  alt="search icon"
                  className="w-auto h-auto"
                />
              </div>
            </button>
            <Link href={"/"}>
              <Image
                src={"/assets/logo.png"}
                alt="brainstorm logo"
                width={120}
                height={50}
              />
            </Link>
            <button className="uppercase text-sm font-semibold text-white">
              subscribe
            </button>
          </div>
        </Container>
      </nav>

      <div className={`fixed p-5 w-[350px] bg-gray-200 top-0 left-0 h-[100vh] overflow-auto z-10  ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition`}>
        <div className="mt-20">
          <ul className="flex flex-col gap-10">
            {Links.map((link, i) => (
              <Link
                href={link.path}
                className=" capitalize text-lg font-semibold"
                key={i}
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
