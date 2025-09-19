import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Me4 from "@/public/image/me3.jpeg";
import Me5 from "@/public/image/me.jpg";
import Me6 from "@/public/image/me1.jpg";

function Wrapper({ children }) {
  return (
    <div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
      <motion.div
        className="flex justify-center items-start flex-col mb-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Education() {
  return (
    <Wrapper>
      <section className="grid gap-8 md:gap-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Education
          </h1>
          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Get to know more about my educational background.
          </p>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="px-5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="font-medium text-lg mb-4">2025 - 2028</div>
          <div>
            <h2 className="font-semibold text-xl">
              Dev Bhoomi Uttarakhand University
            </h2>
            <h3 className="text-md font-normal mb-3">
              BBA | Digital Marketing
            </h3>

            {/* Images */}
            <div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
              {[Me5, Me4, Me6].map((img, i) => (
                <div
                  key={i}
                  className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group"
                >
                  <Image
                    src={img}
                    width={400}
                    height={225}
                    alt={`Education image ${i + 1}`}
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                  />
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="flex items-center gap-2">
              <p className="text-gray-600 text-justify title text-lg">
                I'm currently pursuing a{" "}
                <span className="text-black font-medium">
                  Bachelor of Business Administration (BBA) with a specialization
                  in Digital Marketing
                </span>{" "}
                at{" "}
                <span className="text-black font-medium">
                  Dev Bhoomi Uttarakhand University
                </span>
                . Along with core business and marketing concepts, my studies
                emphasize digital strategies, analytics, and the integration of
                AI-driven tools in marketing.
                <br />
                <br />
                <span className="text-black font-medium">
                  This program is helping me build a strong foundation in
                  business management while exploring how artificial
                  intelligence is reshaping digital marketing. My goal is to
                  combine business knowledge, digital expertise, and AI
                  applications to grow as a professional digital marketer.
                </span>
              </p>
            </div>

            {/* Extra Info */}
            <div className="flex flex-wrap gap-2 mt-4 text-sm">
              <div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
                GPA: 3.9 out of 4
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </Wrapper>
  );
}