import React from "react";
import Container from "../UI/Container";
import Image from "next/image";
import Link from "next/link";
import { Links } from "./Links";

export default function Navbar() {
  return (
    <header>
      <nav className="bg-black text-white fixed top-0 w-full">
        <Container className={"flex items-center justify-between"}>
          <div className="flex items-center gap-7">
            <Link href={'/'}>
              <Image
                src={"/assets/logo.png"}
                width={150}
                height={50}
                alt="brainstorm logo"
                className="p-1"
              />
            </Link>
            <div className="flex gap-7">
              {Links.map((link, i) => (
                <ul className="" key={i}>
                  <li className="flex justify-center items-center">
                    <Link
                      href={link.path}
                      key={link.title}
                      className="capitalize font-semibold py-5 px-3"
                    >
                      {link.title}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <button type="button" className="uppercase font-semibold">
              subscribe
            </button>
            <Image
              src={"/assets/icons/search.svg"}
              width={20}
              height={20}
              alt="search icon"
            />
          </div>
        </Container>
      </nav>
    </header>
  );
}
