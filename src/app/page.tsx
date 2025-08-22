import Hero from "@/components/pages/Home";
import RecentWorks from "@/components/pages/RecentWorks";
import Services from "@/components/pages/Services";
import Skills from "@/components/pages/Skills";
import WorkExp from "@/components/pages/WorkExp";

export default function Home() {
  return (
    <div>
      <Hero />
      <main>
        <Services />
        <RecentWorks />
        <Skills />
        <WorkExp />
      </main>
    </div>
  );
}
