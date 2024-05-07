import Headline from "@/components/Posts/Headline";
import Post from "@/components/Posts/Post";
import Container from "@/components/UI/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Ranga } from "next/font/google";

const ranga = Ranga({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const headlines = [
  {
    title:
      "New Cancer 'Missile' Drugs May Be More Effective Than Traditional Chemotherapy",
    author: "miles morales",
  },
  {
    title: "Here's Why You Don't Need IV Vitamin Therapy",
    author: "stephen brown",
  },
  {
    title: "Can Your Job Protect You From Dementia?",
    author: "stephen brown",
  },
  {
    title: "How Drinking Tea May Inactivate COVID",
    author: "laura henol",
  },
  {
    title: "Distanced Dating: 8 People Share Tales from Pandemic Dating Life",
    author: "laura henol",
  },
];

const posts = [
  {
    title:
      "New Cancer 'Missile' Drugs May Be More Effective Than Traditional Chemotherapy",
    author: "miles morales",
    img: "course_1.jpg",
  },
  {
    title: "Here's Why You Don't Need IV Vitamin Therapy",
    author: "stephen brown",
    img: "course_2.jpg",
  },
  {
    title: "Can Your Job Protect You From Dementia?",
    author: "stephen brown",
    img: "course_3.jpg",
  },
  {
    title: "How Drinking Tea May Inactivate COVID",
    author: "laura henol",
    img: "course_4.jpg",
  },
];

export default function Home() {
  return (
    <main className=" pt-[100px] pb-20 px-3 space-y-20" id="body">
      <section>
        <Container className={"space-y-5"}>
          <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
            <div className="shadow-sm rounded-lg overflow-hidden group">
              <div className=" aspect-video relative ">
                <Image
                  src={"/assets/posts/course_1.jpg"}
                  fill
                  className="object-cover object-center -z-10 group-hover:scale-105 transition w-auto h-auto"
                  alt="post 1"
                />
              </div>
              <div className="space-y-3 p-5 bg-white h-full">
                <span className=" inline-block uppercase font-semibold tracking-widest">
                  relationship
                </span>
                <Link href={""}>
                  <h2 className=" font-semibold text-xl sm:text-3xl capitalize text-darkest hover:text-dark">
                    How to Bust Down Your Emotional Walls and Get More Intimate
                  </h2>
                </Link>
                <p className="capitalize text-sm tracking-wide">
                  by brainstorm
                </p>
              </div>
            </div>

            <div className="space-y-2 shadow-sm bg-white rounded-md overflow-hidden">
              <h2 className="capitalize bg-[#00716e] text-white p-3 font-semibold tracking-wide">
                news and trending
              </h2>
              <div className="p-4 space-y-5">
                {headlines.map((item, i) => {
                  return (
                    <Headline
                      headline={item.title}
                      title={item.author}
                      key={i}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <h2
            className={`${ranga.className} text-4xl capitalize border-b-2 border-black pb-5`}
          >
            Relationship matters
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
            {posts.map((post, i) => {
              return (
                <Post
                  title={post.title}
                  author={post.author}
                  img={post.img}
                  key={i}
                />
              );
            })}
          </div>
        </Container>
      </section>

      <section>
        <Container className={"space-y-"}>
          <h2
            className={`${ranga.className} text-4xl capitalize border-b-2 border-black pb-5`}
          >
            sexual health
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
            {posts.map((post, i) => {
              return (
                <Post
                  title={post.title}
                  author={post.author}
                  img={post.img}
                  key={i}
                />
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
