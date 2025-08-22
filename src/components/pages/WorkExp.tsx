"use client";
import CV from "../CV";
import { motion } from "framer-motion";

const WorkExp = () => {
  const expData = [
    {
      company: "HNG Internship",
      expTitle: "Backend Developer",
      period: "July 2024 - Past",
      location: "Remote",
      descriptions: [
        "Developed Api(S) endpoints with php",
        "Collaborated with various developers in building backend application, Database Management and Project Documentation",
      ],
      technologies: [
        "PHP",
        "Laravel",
        "Swagger",
        "Github & Git",
        "SQL",
        "PostgreSQL",
        "CI/CD",
      ],
    },
    {
      company: "Klosanow",
      expTitle: "Fullstack Developer",
      period: "June 2025 - Present",
      location: "Remote",
      descriptions: [
        "Led a rebuild of responsive, SEO-friendly landing pages — optimized assets and markup to improve load performance and accessibility.",
        "Defined the roadmap and technical requirements for upcoming AI-driven learning features; scoped data, model and integration needs and drafted an implementation plan.",
        "Collaborate with product and design to translate requirements into maintainable code, enforce best practices, and support CI/CD and QA workflows.",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Python",
        "Git & Github",
      ],
    },
    {
      company: "Aliconnects",
      expTitle: "Fullstack Developer",
      period: "Feb 2025 - Present",
      location: "Remote",
      descriptions: [
        "Implemented Alixia AI chatbot features for customer support and vendor assistance, building contextual FAQ flows and real-time help for platform users.",
        "Developed business automation workflows for vendors — product listing, order management, automated reminders, and payment setup guidance to streamline operations.",
        "Integrated marketplace tools and multimedia support: vendor/service search, AI-powered recommendations, order tracking UIs, and support for text, voice, and video guidance.",
        "Still On CI/CD",
      ],
      technologies: ["JavaScript", "React", "Python", "Flask", "Gemini Api"],
    },
    {
      company: "TMIT",
      expTitle: "Fullstack Developer",
      period: "May 2025 - Present",
      location: "Nigeria",
      descriptions: [
        "Developing School Management System with ReactJs, SQL and Laravel for enterprise clients.",
        "Designed and implemented RESTful APIs to support front-end applications.",
      ],
      technologies: ["PHP", "Laravel", "Typescript", "ReactJs", "SQL"],
    },
    {
      company: "CryptiaJS 🔐",
      expTitle: "Maintenance Engineer",
      period: "March 2025 - Present",
      location: "Remote",
      descriptions: [
        "Collaborated in Building and maintaining CryptiaJS, a lightweight and secure JavaScript library for text encryption and decryption using substitution ciphers.",
        "Authored clear developer documentation and usage examples to simplify integration into both client and server-side projects.",
        "Updated/Published open-source package to npm and GitHub, encouraging community adoption and contributions.",
      ],
      technologies: ["JavaScript", "Node.js", "npm", "Open Source"],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="py-24 bg-[#060f12] w-full">
      <div className="max-w-full px-4 md:px-8 lg:px-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold mb-2">Professional Experience</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-cyan-500 my-6" />
          <p className="text-sm md:text-[20px] text-[#808e91]">
            An overview of my professional journey
          </p>
        </motion.div>

        <motion.div
          className="space-y-12 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {expData.map((job) => (
            <motion.div
              key={job.company}
              variants={itemVariants}
              className="border-l-2 border-[#1a2e33] pl-6 relative w-full"
            >
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-[#0a1c20] border-2 border-cyan-400 rounded-full left-[-9px] top-1"></div>

              <div className="mb-2 flex flex-col md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-xl font-medium">{job.expTitle}</h3>
                <span className="text-sm text-[#60777c] font-medium">
                  {job.period}
                </span>
              </div>

              <div className="mb-3 flex flex-col md:flex-row md:items-baseline md:justify-between">
                <p className="text-[#a4b5ba] font-medium">{job.company}</p>
                <span className="text-sm text-[#60777c]">{job.location}</span>
              </div>

              <ul className="list-disc ml-4 space-y-2 mb-4">
                {job.descriptions.map((desc, i) => (
                  <li key={i} className="text-sm text-[#c0c9cc] pl-1">
                    {desc}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-3">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#0a1c20] text-xs px-2 py-1 rounded-md text-[#9cb0b6] border border-[#1a2e33]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <CV
            pdfUrl="/pdf/Josiah_Davis-cv.pdf"
            fileName="Josiah Davis CV"
            buttonText="Download CV"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExp;
