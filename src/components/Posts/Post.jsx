import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Post({title, author, img}) {
  return (
    <div className="shadow-sm rounded-xl overflow-hidden group">
      <div className=" aspect-video relative ">
        <Image  
          src={`/assets/posts/${img}`}
          fill
          className="object-cover object-center -z-10 group-hover:scale-105 transition"
          alt="post 1"
        />
      </div>
      <div className="space-y-3 p-5 bg-white h-full">
        <span className=" inline-block uppercase font-semibold tracking-widest text-sm">
          relationship
        </span>
        <Link href={""}>
          <h2 className=" font-semibold capitalize text-darkest hover:text-dark">
            {title}
          </h2>
        </Link>
        <p className="capitalize text-sm tracking-wide">by {author}</p>
      </div>
    </div>
  );
}
