'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '@/types/Skill'
import { IoLogoHtml5 } from 'react-icons/io5'
import {
  FaCss3Alt,
  FaVuejs,
  FaLaravel,
  FaReact,
  FaAws,
  FaGitAlt,
  FaBootstrap,
  FaDocker,
} from 'react-icons/fa'
import { IoLogoJavascript, IoLogoPwa, IoLogoElectron } from 'react-icons/io5'
import {
  SiExpress,
  SiPhp,
  SiMysql,
  SiTailwindcss,
  SiPostman,
} from 'react-icons/si'
import { TbBrandNextjs, TbBrandNuxt } from 'react-icons/tb'
import { BiLogoPostgresql, BiLogoStripe } from 'react-icons/bi'
import { RiSupabaseFill } from 'react-icons/ri'
import { TbBrandTypescript } from 'react-icons/tb'
import { SiAmazondynamodb } from 'react-icons/si'

const Skills = () => {
  const skills: SkillType[] = [
    {
      name: 'HTML',
      proficiency: 90,
      logo: '/skill-icons/html.png',
      component: () => (
        <IoLogoHtml5
          color="#FC4909"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'CSS',
      proficiency: 90,
      logo: '/skill-icons/css.png',
      component: () => (
        <FaCss3Alt
          color="#2096F3"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'Tailwind',
      proficiency: 90,
      logo: '/skill-icons/css.png',
      component: () => (
        <SiTailwindcss
          color="#0BA5E9"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'Bootstrap',
      proficiency: 90,
      logo: '/skill-icons/css.png',
      component: () => (
        <FaBootstrap
          color="#7A1BF7"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'Javascript',
      proficiency: 90,
      logo: '/skill-icons/js.png',
      component: () => (
        <IoLogoJavascript
          color="#EFDB4F"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'Typescript',
      proficiency: 90,
      logo: '/skill-icons/js.png',
      component: () => (
        <TbBrandTypescript
          color="#2F73BF"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'ReactJS',
      proficiency: 80,
      logo: '/skill-icons/react.png',
      component: () => (
        <FaReact
          color="#139ECA"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'NextJS',
      proficiency: 80,
      logo: '/skill-icons/next.png',
      component: () => (
        <TbBrandNextjs
          color="white"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'VueJS',
      proficiency: 80,
      logo: '/skill-icons/vue.png',
      component: () => (
        <FaVuejs
          color="#41B883"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'NuxtJS',
      proficiency: 80,
      logo: '/skill-icons/nuxt.png',
      component: () => (
        <TbBrandNuxt
          color="#41B883"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'ExpressJS',
      proficiency: 85,
      logo: '/skill-icons/express.png',
      component: () => (
        <SiExpress className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18" />
      ),
    },
    {
      name: 'PHP',
      proficiency: 85,
      logo: '/skill-icons/php.png',
      component: () => (
        <SiPhp
          color="#7377AE"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'Laravel',
      proficiency: 85,
      logo: '/skill-icons/laravel.jpeg',
      component: () => (
        <FaLaravel
          color="#FF3528"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'MYSQL',
      proficiency: 85,
      logo: '/skill-icons/mysql.png',
      component: () => (
        <SiMysql
          color="#5B88A6"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'PostgreSQL',
      proficiency: 85,
      logo: '/skill-icons/postgre.png',
      component: () => (
        <BiLogoPostgresql
          color="#31648C"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'DynamoDB',
      proficiency: 70,
      logo: '/skill-icons/postgre.png',
      component: () => (
        <SiAmazondynamodb
          color="#216EB5"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'AWS',
      proficiency: 60,
      logo: '/skill-icons/aws.png',
      component: () => (
        <FaAws
          color="#F89A2A"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'Supabase',
      proficiency: 85,
      logo: '/skill-icons/supabase.png',
      component: () => (
        <RiSupabaseFill
          color="#3DCF8E"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'Git',
      proficiency: 95,
      logo: '/skill-icons/git.png',
      component: () => (
        <FaGitAlt
          color="#F0573A"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'Postman',
      proficiency: 95,
      logo: '/skill-icons/git.png',
      component: () => (
        <SiPostman
          color="#FF7040"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'Docker',
      proficiency: 85,
      logo: '/skill-icons/git.png',
      component: () => (
        <FaDocker
          color="#1A60E6"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'Stripe',
      proficiency: 80,
      logo: '/skill-icons/git.png',
      component: () => (
        <BiLogoStripe
          color="#685FFF"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'PWA',
      proficiency: 80,
      logo: '/skill-icons/git.png',
      component: () => (
        <IoLogoPwa
          color="#127CD7"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
    {
      name: 'Electron',
      proficiency: 80,
      logo: '/skill-icons/git.png',
      component: () => (
        <IoLogoElectron
          color="#D4EFF4"
          className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18"
        />
      ),
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-xs">
        Hover over a skill for currency proficiency
      </h3>

      <div className="absolute grid grid-cols-4 md:grid-cols-6 gap-x-2 gap-y-4 sm:gap-x-8 md:gap-x-10 md:gap-y-8 top-48">
        {skills.map((skill, id) => (
          <Skill key={`skill-${id}`} skill={skill} />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills
