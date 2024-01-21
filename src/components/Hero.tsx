'use client'

import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgrounCircles from './BackgrounCircles'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: [
      "Hi, The name's Bryan Mulingbayan",
      'Who loves challenging opportunies',
      "Let's turn ideas into reality through the power of code and innovation!",
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-24">
      <BackgrounCircles />

      <Image
        width={128}
        height={128}
        className="relative rounded-full mx-auto object-cover flex-shrink-0 w-32 h-32"
        alt="Image"
        src="/profile.jpg"
      />

      {/* <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/hero.jpg"
        className="mt-36 -mb:20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      /> */}

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-10">
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
  )
}

export default Hero
