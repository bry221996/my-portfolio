"user client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://dykynznipbar7.cloudfront.net/icon-touch-180x180.png"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">PPC Reports</h4>
        <p className="font-bold text-2xl mt-1">PPC Management</p>
        <div className="flex space-x-2 my-2">
          <Image
            width={40}
            height={40}
            className="rounded-full"
            alt="Image"
            src={"https://dykynznipbar7.cloudfront.net/icon-touch-180x180.png"}
          />

          <Image
            width={40}
            height={40}
            className="rounded-full"
            alt="Image"
            src={"https://dykynznipbar7.cloudfront.net/icon-touch-180x180.png"}
          />

          <Image
            width={40}
            height={40}
            className="rounded-full"
            alt="Image"
            src={"https://dykynznipbar7.cloudfront.net/icon-touch-180x180.png"}
          />
        </div>

        <p className="uppercase py-5 text-gray-300">Start - End</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
