"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Pricing
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            key={project}
          >
            <motion.img
              initial={{ opacity: 0, y: -300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src="https://dykynznipbar7.cloudfront.net/icon-touch-180x180.png"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                Case Study {project} of {projects.length}: UPS Clone
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
                ex odio. Fusce nec sodales arcu, sagittis tempor velit. Fusce
                congue, tellus sit amet posuere mollis, justo mauris laoreet
                leo, nec aliquam lorem nisl at risus. Aliquam posuere vehicula
                dolor pharetra placerat. Nulla quis sapien pulvinar, porttitor
                lacus ac, maximus sapien. Curabitur ac ornare nibh, quis
                tincidunt augue. Vestibulum a eros non velit vehicula
                pellentesque at eget eros. Nullam lacinia aliquet elementum.
                Donec auctor augue sed euismod volutpat. Donec vulputate velit
                urna, sed interdum turpis viverra eu.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 h-[500px] left-0 -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
