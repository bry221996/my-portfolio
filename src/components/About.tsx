"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/hero.jpg"
        className="mt-36 -mb:20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-semibold">
          Here is a little background
        </h4>
        <div className="text-xs md:text-sm space-y-2 md:space-y-4">
          <p>
            Hello, I'm Bryan Mulingbayan, a passionate and dedicated software
            engineer based in the Philippines. I'm 27 years old and embarked on
            my journey in the world of technology after graduating with a
            Bachelor of Science degree in Computer Engineering in 2018.
          </p>

          <p>
            With over 5 years of professional experience under my belt, I've
            been fortunate to collaborate on a multitude of projects that have
            honed my technical skills and deepened my love for crafting digital
            solutions.
          </p>

          <p>
            My mission as a software engineer is clear: I aspire to make a
            positive impact by harnessing the power of technology. I believe
            that technology has the potential to transform businesses and enrich
            people's lives. By constantly learning and evolving, I'm committed
            to building innovative software solutions that address real-world
            challenges, streamline processes, and improve efficiency.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
