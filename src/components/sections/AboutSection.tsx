import FadeIn from '../animations/FadeIn';
import AnimatedText from '../animations/AnimatedText';
import ContactButton from '../ui/ContactButton';
import ResumeButton from '../ui/ResumeButton';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen relative flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">

      {/* Decorative Corners */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain" alt="Moon" />
      </FadeIn>

      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          className="w-[100px] sm:w-[140px] md:w-[180px] object-contain" alt="3D Object" />
      </FadeIn>

      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0">
        <img src="./src/assets/3d.png"
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain" alt="Lego" />
      </FadeIn>

      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          className="w-[130px] sm:w-[170px] md:w-[220px] object-contain" alt="3D Group" />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center max-w-4xl">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)] mb-10 sm:mb-14 md:mb-16">
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text="As a UI/UX Designer, I transform complex workflows into intuitive, striking interfaces. My front-end knowledge ensures every design is as developer-friendly as it is visually bold. Let's build something incredible together!"
          className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
        />

        <div className="pt-16 sm:pt-20 md:pt-24 flex flex-col sm:flex-row gap-4">
          <ResumeButton />
          <ContactButton />
        </div>
      </div>
    </section>
  );
}
