"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  "PHP",
  "Python",
  "JavaScript",
  "TypeScript",
  "TailwindCSS",
  "Laravel",
  "Next.js",
  "ReactJS",
  "InertiaJs",
  "Git",
  "GitHub",
  "Docker",
];

const Skills = () => {
  const [sectionRef] = useInView({
    triggerOnce: false,
    threshold: 0.9,
  });

  return (
    <section className="overflow-hidden py-24 px-4 md:px-8 lg:px-16 w-full">
      <div className="flex flex-col gap-[60px] lg:flex-row lg:gap-[36px] lg:justify-center">
        {/* Skills */}
        <div className="flex flex-col w-full lg:w-1/2">
          <div>
            <h2 className="flex items-center font-clashbold text-white font-semibold leading-[24.6px] text-2xl md:text-3xl lg:leading-[49.2px]">
              Skills <small className="animate-bounce">👨‍💻</small>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-cyan-500 my-6" />
            <p className="font-medium text-sm md:text-[20px] text-[#808e91] leading-[22.5px] lg:leading-[30px] lg:tracking-wide">
              I&apos;ve gained solid experience in these skills through diverse
              projects and experiences.
            </p>
          </div>
          <div className="mt-[31px] grid grid-cols-1 gap-y-[18.67px] md:grid-cols-2 md:gap-x-3 lg:mt-[36px] lg:gap-[20px] w-full">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 0.96 }}
                ref={sectionRef}
                initial={{ opacity: 0, x: index % 2 === 0 ? -300 : 300 }}
                transition={{ duration: 0.6 }}
                whileInView={{ opacity: 1, x: 0 }}
                className={`bg-gradient-to-${
                  index % 2 === 0 ? "r" : "l"
                } max-w-[369px] lg:max-w-[252px] to-[#27ddee] from-[#77e9f4] ${
                  index % 2 === 0 ? "pr-0.5 pt-0.5" : "pb-0.5 pl-0.5"
                }`}
              >
                <div
                  className={`bg-[#262522] px-[20px] py-[23px] lg:h-[100px] lg:max-w-full lg:w-[250px] lg:px-[32px] lg:py-[35px]`}
                >
                  <p className="text-white font-medium font-clash lg:text-[20px] lg:leading-[30.75px]">
                    {skill === "PHP" ? (
                      <span>
                        PHP <span className="text-[10px]"> I love php</span>
                      </span>
                    ) : (
                      skill
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
