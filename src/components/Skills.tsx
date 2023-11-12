"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "@/types/Skill";

const Skills = () => {
  const skills: SkillType[] = [
    {
      name: "HTML",
      proficiency: 100,
      logo: "/skill-icons/html.png",
    },
    {
      name: "CSS",
      proficiency: 100,
      logo: "/skill-icons/css.png",
    },
    {
      name: "JS",
      proficiency: 100,
      logo: "/skill-icons/js.png",
    },
    {
      name: "ReactJS",
      proficiency: 100,
      logo: "/skill-icons/react.png",
    },
    {
      name: "NextJS",
      proficiency: 100,
      logo: "/skill-icons/next.png",
    },
    {
      name: "VueJS",
      proficiency: 100,
      logo: "/skill-icons/vue.png",
    },
    {
      name: "NuxtJS",
      proficiency: 100,
      logo: "/skill-icons/nuxt.png",
    },
    {
      name: "ExpressJS",
      proficiency: 100,
      logo: "/skill-icons/express.png",
    },
    {
      name: "PHP",
      proficiency: 100,
      logo: "/skill-icons/php.png",
    },
    {
      name: "Laravel",
      proficiency: 100,
      logo: "/skill-icons/laravel.jpeg",
    },
    {
      name: "MYSQL",
      proficiency: 100,
      logo: "/skill-icons/mysql.png",
    },
    {
      name: "PostgreSQL",
      proficiency: 100,
      logo: "/skill-icons/postgre.png",
    },
    {
      name: "AWS",
      proficiency: 100,
      logo: "/skill-icons/aws.png",
    },
    {
      name: "Supabase",
      proficiency: 100,
      logo: "/skill-icons/supabase.png",
    },
    {
      name: "Git",
      proficiency: 100,
      logo: "/skill-icons/git.png",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Clients
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency proficiency
      </h3>

      <div className="absolute grid grid-cols-4 gap-5 top-48">
        {skills.map((skill, id) => (
          <Skill key={`skill-${id}`} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
