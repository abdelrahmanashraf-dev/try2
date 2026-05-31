import FadeIn from '../animations/FadeIn';
import Magnet from '../animations/Magnet';
import ContactButton from '../ui/ContactButton';
import ResumeButton from '../ui/ResumeButton';

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col relative overflow-clip">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full">
        <nav className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          {['About', 'Services', 'Projects', 'Contact'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:opacity-70 transition-opacity duration-200">
              {link}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Heading */}
      <div className="flex-1 flex flex-col justify-center items-center overflow-hidden">
        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[15vw] sm:text-[15vw] md:text-[16vw] lg:text-[9vw] mt-6 sm:mt-4 md:-mt-5">
            Hi, i&apos;m Abdelrahman
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none">
        <Magnet padding={150} strength={3} className="pointer-events-auto w-full h-full">
          <img
            src="/src/assets/Heroo.png"
            alt="Jack 3D Portrait"
            className="w-full h-auto object-contain"
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            A UI/UX Designer crafting intuitive, pixel-perfect interfaces with a developer's mindset to ensure seamless implementation.</p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="flex gap-3 sm:gap-4 flex-col sm:flex-row">
          <ResumeButton />
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
