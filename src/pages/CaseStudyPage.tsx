import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';
import FadeIn from '../components/animations/FadeIn';

export default function CaseStudyPage() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  // Scroll to top when loading the case study
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/" className="text-white border border-white/20 px-6 py-2 rounded-full hover:bg-white/10 transition-colors">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-kanit pt-8 sm:pt-12 px-5 sm:px-8 md:px-12 pb-24">
      {/* Navbar / Back Button */}
      <nav className="mb-12 sm:mb-20">
        <Link to="/" className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity font-medium uppercase tracking-wider">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Portfolio
        </Link>
      </nav>

      {/* Header */}
      <FadeIn y={30} className="max-w-5xl mb-16 sm:mb-24">
        <span className="text-white/50 font-light uppercase tracking-widest text-sm mb-4 block">
          {project.category} / {project.id}
        </span>
        <h1 className="text-[clamp(3rem,8vw,100px)] font-black uppercase leading-none tracking-tight mb-8">
          {project.name}
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 border-t border-white/10 pt-8 mt-12">
          {project.role && (
            <div>
              <h3 className="text-white/50 text-sm uppercase tracking-wider mb-2">Role</h3>
              <p className="font-medium">{project.role}</p>
            </div>
          )}
          {project.timeline && (
            <div>
              <h3 className="text-white/50 text-sm uppercase tracking-wider mb-2">Timeline</h3>
              <p className="font-medium">{project.timeline}</p>
            </div>
          )}
        </div>
        
        {project.description && (
          <div className="mt-12 max-w-2xl">
            <p className="text-lg sm:text-xl font-light leading-relaxed opacity-80">
              {project.description}
            </p>
          </div>
        )}
      </FadeIn>

      {/* Masonry / Grid Images */}
      <FadeIn delay={0.2} y={40} className="w-full flex flex-col gap-6 sm:gap-8 md:gap-12">
        <div className="w-full">
          <img 
            src={project.images.col2} 
            alt={`${project.name} Hero`} 
            className="w-full h-auto max-h-[80vh] object-cover rounded-[30px] sm:rounded-[40px]" 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <img 
            src={project.images.col1Top} 
            alt={`${project.name} Detail 1`} 
            className="w-full h-auto object-cover rounded-[30px] sm:rounded-[40px]" 
          />
          <img 
            src={project.images.col1Bottom} 
            alt={`${project.name} Detail 2`} 
            className="w-full h-auto object-cover rounded-[30px] sm:rounded-[40px]" 
          />
        </div>
      </FadeIn>

      {/* Next Steps / Footer CTA */}
      <FadeIn delay={0.3} className="mt-32 text-center border-t border-white/10 pt-20">
        <h2 className="text-3xl sm:text-5xl font-black uppercase mb-8">Loved this project?</h2>
        <Link 
          to="/#contact" 
          onClick={(e) => {
            // Need to manually handle this since we're using a router and want to scroll to a section on the home page
            if (window.location.pathname !== '/') {
              window.location.href = '/#contact';
            }
          }}
          className="inline-block rounded-full bg-white text-[#0C0C0C] font-bold uppercase tracking-widest px-10 py-5 hover:scale-105 transition-transform"
        >
          Let's work together
        </Link>
      </FadeIn>
    </main>
  );
}
