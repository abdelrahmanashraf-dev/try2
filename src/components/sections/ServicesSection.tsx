import FadeIn from '../animations/FadeIn';

const SERVICES = [
  {
    id: "01",
    name: "UX Research & Strategy",
    description: "Conducting competitive analysis, wireframing, and mapping intuitive user flows to solve complex digital problems."
  },
  {
    id: "02",
    name: "UI & Editorial Design",
    description: "Crafting striking, high-contrast interfaces with a focus on modern typography, Swiss design principles, and pixel-perfect layouts."
  },
  {
    id: "03",
    name: "Complex Dashboards & Web Apps",
    description: "Structuring complex data into clean, manageable user interfaces for SaaS, B2B platforms, and e-commerce dashboards."
  },
  {
    id: "04",
    name: "Mobile App Experience",
    description: "Designing engaging and seamless mobile applications tailored for optimal user retention and ease of use."
  },
  {
    id: "05",
    name: "Design Systems & Dev Handoff",
    description: "Building scalable component libraries in Figma and ensuring smooth, developer-friendly handoffs backed by front-end knowledge."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
        Services
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.id}
            delay={i * 0.1}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 first:border-t"
          >
            <div className="text-[#0C0C0C] font-black text-[clamp(3rem,10vw,140px)] leading-none w-[1.3em] flex-shrink-0">
              {service.id}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] text-[#0C0C0C]">
                {service.name}
              </h3>
              <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] text-[#0C0C0C] opacity-60">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
