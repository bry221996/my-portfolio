"use client";
import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "@/types/Skill";

type Props = {
  skill: SkillType;
  direction?: "left" | "right";
};

const Skill = ({ skill, direction = "left" }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        // initial={{ x: direction === "left" ? -200 : 200, opacity: 0 }}
        // transition={{ duration: 1 }}
        // whileInView={{ opacity: 1, x: 0 }}
        src={skill.logo}
        className="rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100">
            {skill.name}
          </p>
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.proficiency}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
