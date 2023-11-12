"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgrounCircles from "./BackgrounCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: [
      "Hi, The name's Bryan Mulingbayan",
      "Who loves challenging opportunies",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-20">
      <BackgrounCircles />

      <Image
        width={128}
        height={128}
        className="relative rounded-full mx-auto object-cover"
        alt="Image"
        src={"https://dykynznipbar7.cloudfront.net/icon-touch-180x180.png"}
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
