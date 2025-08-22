import { Smartphone, Palette, Cloud, Code, Server } from "lucide-react";

const services = [
  {
    title: "WEB DEVELOPMENT",
    description:
      "I build performant softwares with React, NextJS, TailwindCSS, Typescript, and JavaScript. I also develop backend applications with PHP/Python.",
    icon: Code,
  },
  {
    title: "VERSION CONTROL",
    description:
      "Using version control systems like Git/GitHub to collaborate with other developers and manage code changes effectively.",
    icon: Cloud,
  },
  {
    title: "CONTINUOUS LEARNING",
    description:
      "Staying updated with the latest programming language tools, trends, and best practices to deliver modern and innovative solutions.",
    icon: Palette,
  },
  {
    title: "RESPONSIVE DESIGN",
    description:
      "Building websites and applications that work seamlessly on various devices and screen sizes, from desktop to smartphones.",
    icon: Smartphone,
  },
  {
    title: "API INTEGRATIONS",
    description:
      "Integrating backend services and APIs to the frontend securely to fetch and display data in real time.",
    icon: Server,
  },
];

const Services = () => {
  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-left mb-5">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
            Services I Offer
            <span className="inline-block ml-4 transform hover:scale-110 transition-transform">
              🧙🏿‍♂️
            </span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-cyan-500 mb-6" />
          <p className="text-sm md:text-[20px] text-[#808e91]">
            These are some of the services I offer as a software developer,
            crafted with precision and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#1a1a10]/80 backdrop-blur-lg rounded-lg overflow-hidden border border-[#ffffff10]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                    <service.icon
                      className="w-8 h-8 text-cyan-500"
                      strokeWidth={1.5}
                    />
                  </span>
                  <div className="h-px w-16 bg-gradient-to-r from-cyan-500 to-cyan-500 opacity-50" />
                </div>

                <h3 className="text-white text-xl font-bold mb-4 tracking-wide">
                  {service.title}
                </h3>

                <p className="text-[#FFFFFF99] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="h-[2px] w-full bg-gradient-to-r from-cyan-500/50 to-cyan-500/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
