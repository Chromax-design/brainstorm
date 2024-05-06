import React from "react";

export default function Container({ children, className }) {
  return <div className={`${className} max-w-4xl lg:max-w-6xl mx-auto`}>{children}</div>;
}
