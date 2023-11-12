"use client";
import Image from "next/image";
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
        src="https://dykynznipbar7.cloudfront.net/icon-touch-180x180.png"
        className="-mb:20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold ">Here is a little background</h4>
        <p className="text-sm">
          Mauris dolor mi, varius id eros id, placerat rutrum justo. Maecenas
          placerat, velit et eleifend tincidunt, metus arcu finibus urna, non
          molestie libero augue vel erat. Aliquam a ex rutrum, vestibulum purus
          a, volutpat tellus. Aliquam pellentesque tellus vel nibh congue, sed
          dictum libero euismod. Sed imperdiet sem at semper maximus. Curabitur
          venenatis orci mi. Nullam vel justo dignissim ipsum molestie venenatis
          ut quis orci. Donec ut tortor vel magna mollis lacinia sed nec sapien.
          Proin mattis risus quis leo imperdiet viverra. Curabitur tempor
          ullamcorper leo. Donec lorem orci, dictum eget fermentum at, ultricies
          vitae sapien. Etiam volutpat interdum diam et tempor. Morbi gravida
          ipsum et purus mattis, eget tempus mi commodo. Morbi nec enim
          dignissim dui efficitur maximus. Nulla facilisi. Pellentesque
          fringilla lorem vestibulum diam scelerisque, vitae faucibus orci
          pellentesque.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
