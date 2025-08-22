"use client";
import { motion } from "framer-motion";
import { FbIcon, IgIcon, InIcon, TwIcon } from "./svgs";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="mx-auto px-[38px] pt-[100px] md:px-[26px] lg:pt-[120px] lg:pl-[80px] lg:pr-[40px]">
        <div className="flex flex-col items-start flex-1 md:flex md:flex-row md:gap-10 md:items-center lg:flex lg:flex-row lg:items-center lg:gap-x-12 lg:justify-between">
          <div>
            <div className="gradientText">
              <h1>
                Hey, I&apos;m Josiah Davis<span>.</span>
              </h1>
            </div>
            <div className="gradientText">
              <h1>
                Software engineer<span>.</span>
              </h1>
            </div>
            <p className="gradientText font-medium font-pop text-[15px] text-[#FFFFFF99] max-w-[353px] mt-[45px] md:mt-8 lg:mt-1 md:max-w-[639px] md:text-[18px] leading-md:[27px]">
              Building performant and secured softwares.
            </p>
            <div
              id="intro"
              className="text-[#F0FEFF] font-pop flex-shrink-0 text-[.9em] leading-[1.5] font-medium mt-[40px] flex flex-col gap-8 md:flex md:flex-col md:gap-[20px] md:mt-[45px] lg:flex lg:flex-row lg:items-start lg:gap-[12px]"
            >
              <p className="max-w-[310px]">
                I&#39;m Josiah Davis, — a software engineer & cybersecurity
                enthusiast with{" "}
                {new Date().getFullYear() -
                  new Date("2022-08-30").getFullYear()}
                + Years of experience. Started coding in 2022, because of my
                curiosity on how things like the web and software works.
              </p>
              <p className="max-w-[319px]">
                I build performant, secure, and reliable software — and test
                their security too. <br />
                (I LOVE TO WRITE AND EXPLORE PHP / Laravel)
              </p>
            </div>
            <div className="mt-[35px] md:mt-[65px] flex justify-start items-center  gap-[26px] md:gap-[40px]">
              <motion.a
                href="https://www.facebook.com/davistheweb.dev"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className="h-auto w-auto"
              >
                <FbIcon
                  fill="#27ddee"
                  className={`w-[30px] h-[30px] rounded-full border-[#27ddee] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-white`}
                />
              </motion.a>
              <motion.a
                href="https://x.com/davistheweb"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <TwIcon
                  fill={`#27ddee`}
                  className={`w-[30px] h-[30px] rounded-full border-[#27ddee] border-solid border-[2px] p-1  transition-all duration-500 hover:bg-white`}
                />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/davistheweb.dev"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <IgIcon
                  fill={`#27ddee`}
                  className={`w-[30px] h-[30px] rounded-full border-[#27ddee] border-solid border-[2px] p-0.5  transition-all duration-500 hover:bg-white`}
                />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/josiah-davis-53797b25b/"
                target="_blank"
                rel="noreferrer"
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.99 }}
                className={`h-auto w-auto`}
              >
                <InIcon
                  fill={`#27ddee`}
                  className={`w-[30px] h-[30px] rounded-full border-[#27ddee] border-solid border-[2px] p-0.5  transition-all duration-700 hover:bg-white`}
                />
              </motion.a>
            </div>
          </div>
          <div className="mt-[2.5rem]">
            <div className="relative flex flex-col justify-center w-max">
              <div className={`w-full`}>
                <Image
                  src="/images/davistheweb.png"
                  alt="hero image"
                  className="absolute w-full h-full bottom-3 right-4 md:bottom-5 md:right-6 lg:bottom-10 lg:right-12"
                  draggable={false}
                  width={500}
                  height={500}
                />
              </div>
              <motion.div
                className={`shrink-0 w-[300px] h-[390px] lg:min-w-[400px] lg:min-h-[490px] border-[3px] border-[#27ddee]`}
              ></motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
