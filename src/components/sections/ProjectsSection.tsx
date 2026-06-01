import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import CaseStudyButton from '../ui/CaseStudyButton';
import { PROJECTS } from '../../data/projects';

function ProjectCard({
  project,
  index,
  progress,
  total
}: {
  project: typeof PROJECTS[0],
  index: number,
  progress: MotionValue<number>,
  total: number
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(
    progress,
    [index / total, 1],
    [1, targetScale]
  );

  return (
    <motion.div
      style={{
        scale,
        top: `calc(${index * 28}px + 6rem)`
      }}
      className={`sticky w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 origin-top shadow-2xl max-w-6xl mx-auto ${index !== total - 1 ? 'mb-[15vh]' : ''}`}
    >
      {/* Top Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4 sm:gap-8 text-[#D7E2EA]">
          <span className="font-black text-[clamp(2rem,6vw,80px)] leading-none">{project.id}</span>
          <div className="flex flex-col">
            <span className="font-light uppercase tracking-wider opacity-60 text-sm">{project.category}</span>
            <span className="font-medium uppercase text-[clamp(1.2rem,2.5vw,2.5rem)]">{project.name}</span>
          </div>
        </div>
        <CaseStudyButton projectId={project.id} />
      </div>

      {/* Bottom Row - Image Grid */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 h-full mt-4 sm:mt-0">
        {/* Left Column (40%) */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full sm:w-[40%]">
          <img
            src={project.images.col1Top}
            alt={`${project.name} preview 1`}
            className="w-full object-cover rounded-[30px] sm:rounded-[50px] md:rounded-[60px] h-[200px] sm:h-[clamp(130px,16vw,230px)]"
          />
          <img
            src={project.images.col1Bottom}
            alt={`${project.name} preview 2`}
            className="w-full object-cover rounded-[30px] sm:rounded-[50px] md:rounded-[60px] h-[250px] sm:h-[clamp(160px,22vw,340px)]"
          />
        </div>

        {/* Right Column (60%) */}
        <div className="w-full sm:w-[60%] sm:h-full">
          <img
            src={project.images.col2}
            alt={`${project.name} preview 3`}
            className="w-full object-cover rounded-[30px] sm:rounded-[50px] md:rounded-[60px] h-[300px] sm:h-full sm:min-h-[300px]"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative pt-20 sm:pt-24 md:pt-32 pb-40 px-5 sm:px-8 md:px-10">
      <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-24">
        Project
      </h2>

      <div ref={containerRef} className="flex flex-col w-full relative pb-[10vh]">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            progress={scrollYProgress}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
}
