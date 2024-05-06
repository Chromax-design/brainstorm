import Link from "next/link";
import React from "react";

export default function Headline({ headline, title }) {
  return (
    <div className="space-y-1">
      <Link href={''}>
        <h3 className="capitalize text-xl font-semibold leading-7 text-darkest hover:text-dark">
          {headline}
        </h3>
      </Link>
      <p className="text-sm capitalize">by {title} | 4 hours ago</p>
    </div>
  );
}
