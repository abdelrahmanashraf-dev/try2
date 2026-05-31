import FadeIn from '../animations/FadeIn';

export default function ContactSection() {
  const whatsappNumber = "201115719908";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Abdelrahman,%20I'm%20interested%20in%20working%20with%20you!`;

  return (
    <section id="contact" className="bg-[#0C0C0C] relative py-24 sm:py-32 px-5 sm:px-8 md:px-10 flex flex-col items-center justify-center min-h-[60vh] border-t border-[rgba(215,226,234,0.1)]">
      <FadeIn y={40} className="flex flex-col items-center max-w-4xl text-center w-full">
        <h2 className="hero-heading font-black uppercase tracking-tight text-[clamp(3rem,10vw,120px)] mb-6 sm:mb-10 leading-none">
          Let's Work Together
        </h2>
        <p className="text-[#D7E2EA] font-light text-[clamp(1rem,2vw,1.35rem)] max-w-2xl mb-12 sm:mb-16 opacity-80">
          Ready to bring your ideas to life? Reach out to discuss your next project, or just to say hi.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-8 py-4 sm:px-10 sm:py-4 md:px-12 md:py-5 text-sm sm:text-base font-medium uppercase tracking-widest text-white transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 w-full sm:w-auto"
            style={{
              background: '#25D366',
              boxShadow: '0px 4px 15px rgba(37, 211, 102, 0.4)',
              outline: '2px solid white',
              outlineOffset: '-3px'
            }}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Chat on WhatsApp
          </a>

          <a
            href="mailto:hello@example.com"
            className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-4 sm:px-10 sm:py-4 md:px-12 md:py-5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors flex items-center justify-center w-full sm:w-auto"
          >
            Email Me
          </a>
        </div>
      </FadeIn>

      <div className="absolute bottom-6 sm:bottom-8 text-center text-[#D7E2EA] opacity-40 text-xs sm:text-sm font-light uppercase tracking-wider w-full left-0">
        © {new Date().getFullYear()} Abdelrahman. All rights reserved.
      </div>
    </section>
  );
}
