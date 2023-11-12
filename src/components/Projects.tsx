"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProjectType } from "@/types/ProjectType";

type Props = {};

const Projects = (props: Props) => {
  const projects: ProjectType[] = [
    {
      name: "BeApplying",
      logo: "",
      url: "string",
      description: [
        "Beapplying is a dynamic job listing website where companies can effortlessly post job openings with the assistance of AI-generated job descriptions. As the lead software engineer on this project, I was responsible for developing and maintaining the platform, ensuring a seamless user experience, and integrating cutting-edge AI technology to enhance job listing creation. Beapplying facilitates a streamlined job search process and empowers companies with innovative tools to attract top talent",
        "This project showcases my ability to create user-centric web applications, harness the power of AI for practical purposes, and contribute to the ever-evolving field of HR tech. Beapplying underscores my expertise in developing efficient, tech-driven solutions to real-world challenges, improving the hiring process for both job seekers and employers.",
      ],
      skills: [
        {
          name: "NextJS",
          proficiency: 100,
          logo: "/skill-icons/next.png",
        },
      ],
    },
    {
      name: "BetterSeller",
      logo: "",
      url: "string",
      description: [
        "In my role as a Technical Lead, I spearheaded the development of Better Seller, a robust in-house application tailored for agencies serving Amazon sellers. This project leverages various integrations, including Amazon SP API, Amazon Advertising API, and Gmail, to provide comprehensive analytics on clients' sales and profits. With a focus on enhancing their Amazon selling experience, Better Seller offers invaluable insights and data-driven solutions to optimize performance and increase profitability. As a software engineer, I led the team in designing and building this platform, demonstrating my expertise in integrating multiple APIs and creating a powerful tool to benefit our clients in the competitive world of e-commerce.",
      ],
      skills: [
        {
          name: "NextJS",
          proficiency: 100,
          logo: "/skill-icons/next.png",
        },
      ],
    },
    {
      name: "Afterlife",
      logo: "",
      url: "string",
      description: [
        "In my role as a Backend Developer for Afterlife, I played a pivotal part in crafting a subscription-based website with a unique and sensitive purpose. Afterlife allows users to securely store legal documents and cherished memories for their loved ones, ensuring their legacy lives on in case of an unfortunate event. I was responsible for designing and implementing the robust backend infrastructure, ensuring data security, reliability, and efficient retrieval. This project not only challenged my technical skills but also touched upon the importance of empathy and trust in handling sensitive user data, making it a deeply rewarding experience.",
      ],
      skills: [
        {
          name: "NextJS",
          proficiency: 100,
          logo: "/skill-icons/next.png",
        },
      ],
    },
    {
      name: "WomnKind",
      logo: "",
      url: "string",
      description: [
        "In my role as a Backend Developer, I contributed to the development of WomnKind, a subscription-based social media mobile application with a unique focus on fostering mentorship relationships between users, emphasizing women's mental health awareness. Through my technical expertise, I played a vital role in building the application's backend infrastructure, ensuring seamless user interactions, robust data management, and efficient server-side operations. WomnKind provides a safe and supportive environment for women to connect, share experiences, and receive valuable guidance, ultimately contributing to mental health empowerment. This project showcases my commitment to using technology to address important social issues and create meaningful digital solutions.",
      ],
      skills: [
        {
          name: "NextJS",
          proficiency: 100,
          logo: "/skill-icons/next.png",
        },
      ],
    },
    {
      name: "Seller Interactive",
      logo: "",
      url: "string",
      description: [
        "In my role as a Fullstack Developer at Sellerinteractive, I had the opportunity to contribute to the development of a dynamic agency web application. This platform was designed to streamline the complex process of managing multiple clients, their subscriptions, and various services, while also providing robust task management capabilities. I played a pivotal role in crafting the application, working on both the front-end and back-end aspects. This project allowed me to leverage my technical skills to create an efficient and user-friendly solution, enabling Sellerinteractive to enhance their client management and service delivery processes. It's a testament to my ability to design and implement solutions that meet the specific needs of clients in a dynamic business environment.",
      ],
      skills: [
        {
          name: "NextJS",
          proficiency: 100,
          logo: "/skill-icons/next.png",
        },
      ],
    },
    {
      name: "Stallion Express",
      logo: "",
      url: "string",
      description: [
        "In my role as a Fullstack Developer, I had the privilege of contributing to the creation of Stallion Express, an in-house application designed to efficiently manage deliveries. Stallion Express has become a trusted shipping service for thousands of online sellers in Canada, streamlining their logistics operations and ensuring prompt and reliable deliveries. My contributions to this project encompassed both front-end and back-end development, where I leveraged my technical expertise to enhance the user experience, optimize data management, and ensure the application's robust performance. Stallion Express represents not only a testament to my technical proficiency but also my dedication to delivering real-world solutions that impact businesses positively.",
      ],
      skills: [
        {
          name: "NextJS",
          proficiency: 100,
          logo: "/skill-icons/next.png",
        },
      ],
    },
    {
      name: "Rush",
      logo: "",
      url: "string",
      description: [
        "RUSH is a versatile white-label eCommerce software, offering a comprehensive solution for entrepreneurs looking to kickstart their online selling journey. As a dedicated Backend Developer, my role was pivotal in ensuring the platform's technical operations ran seamlessly. I specialized in bug fixing, investigating issues, and spearheading the research and development efforts to enhance the software's capabilities. Working on RUSH was an exciting opportunity to contribute to a dynamic eCommerce ecosystem and refine my expertise in crafting efficient, user-friendly solutions for online businesses. Explore this project to witness the impact of my technical skills and dedication in action.",
      ],
      skills: [
        {
          name: "NextJS",
          proficiency: 100,
          logo: "/skill-icons/next.png",
        },
      ],
    },
    {
      name: "Globe Rewards",
      logo: "",
      url: "string",
      description: [
        "In my role as a Backend Developer, I had the privilege of contributing in maintaining the Globe Rewards mobile application, developed by one of the leading telecommunication companies in the Philippines. This app offers users a seamless way to leverage their reward points for a variety of purposes, including converting them into mobile load promos, using them as payment with partner merchants, and staying updated with ongoing campaigns. One of the unique features  was enabling users to convert their reward points for charitable causes, fostering a sense of social responsibility. This project allowed me to enhance my backend development skills while contributing to a user-friendly application that provides real value to the customers of this prominent telecom company.",
      ],
      skills: [
        {
          name: "NextJS",
          proficiency: 100,
          logo: "/skill-icons/next.png",
        },
      ],
    },
    {
      name: "Lazatu",
      logo: "",
      url: "string",
      description: [
        "In my role as a full-stack developer, I had the privilege of contributing to the creation of Lazatu, a versatile web and mobile application designed to streamline the property management process. Lazatu offers property managers a user-friendly platform to post their properties, providing potential tenants with a comprehensive view of available listings. Additionally, the application facilitates the booking of appointments and allows users to specify location preferences, enhancing the overall property rental experience. As a key member of the development team, I played a pivotal role in designing, implementing, and maintaining the application, ensuring a seamless and efficient experience for property managers and tenants alike. Lazatu stands as a testament to my skills in full-stack development.",
      ],
      skills: [
        {
          name: "NextJS",
          proficiency: 100,
          logo: "/skill-icons/next.png",
        },
      ],
    },
    {
      name: "Vipeso",
      logo: "",
      url: "string",
      description: [
        "In my role as a full-stack developer, I had the opportunity to work on the exciting project, Vipeso. Vipeso is a dynamic mobile application designed for restaurants, aimed at rewarding users each time they place an order. These rewards are versatile, offering users the option to convert them into mobile load or vouchers to be used at partner merchants. One of the standout features of Vipeso is its Card membership, which allows users to make secure payments using NFC technology. This project allowed me to leverage my skills in both front-end and back-end development, contributing to the creation of a seamless, rewarding experience for restaurant-goers.",
      ],
      skills: [
        {
          name: "NextJS",
          proficiency: 100,
          logo: "/skill-icons/next.png",
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 h-screen"
            key={project.name}
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
                {project.name}
              </h4>

              <div className="text-sm lg:text-lg text-center md:text-left space-y-5">
                {project.description.map((item, idx) => (
                  <p key={`desccription-${idx}`}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 h-[500px] left-0 -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
