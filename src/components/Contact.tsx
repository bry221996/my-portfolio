"use client";
import React from "react";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { Field, Form, Formik } from "formik";

type Props = {};

const Contact = (props: Props) => {
  const onSubmit = (values: {
    subject: string;
    name: string;
    email: string;
    message: string;
  }) => {
    window.location.href = `mailto:bryan.mulingbayan96@gmail.com?subject=${values.subject}&body=Hi, my name is ${values.name}. ${values.message} (${values.email})`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got what you need.{" "}
          <span className="decoration-[#F7Ab0A]/50 underline">Lets Talk.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+639051396541</p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">bryan.mulingbayan96@gmail.com</p>
          </div>

          <Formik
            initialValues={{
              name: "",
              email: "",
              subject: "",
              message: "",
            }}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <Field
                    name="name"
                    placeholder="Name"
                    className="contactInput"
                    required
                  />
                  <Field
                    name="email"
                    placeholder="Email"
                    className="contactInput"
                    type="email"
                    required
                  />
                </div>

                <div>
                  <Field
                    name="subject"
                    placeholder="Subject"
                    className="contactInput"
                    required
                  />
                </div>

                <div>
                  <Field
                    name="message"
                    as="textarea"
                    placeholder="Message"
                    className="contactInput"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg w-full"
                >
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
