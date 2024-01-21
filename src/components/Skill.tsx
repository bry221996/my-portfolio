'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Skill as SkillType } from '@/types/Skill'

type Props = {
  skill: SkillType
  direction?: 'left' | 'right'
}

// w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 lg:w-18 lg:h-18
const Skill = ({ skill, direction = 'left' }: Props) => {
  return (
    <div className="group relative flex cursor-pointer flex-col items-center justify-center rounded-full w-12 h-12 sm:w-14 sm:h-14 md:h-20 md:w-20 lg:w-24 lg:h-24">
      {skill.component && skill.component()}

      <p className="text-[8px]">{skill.name}</p>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-12 h-12 sm:w-14 sm:h-14 md:h-20 md:w-20 lg:w-24 lg:h-24 rounded-full z-0">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="font-bold text-black opacity-100">
            {skill.proficiency}%
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill
