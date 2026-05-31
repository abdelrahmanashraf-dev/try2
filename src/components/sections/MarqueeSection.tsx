import { useEffect, useRef } from 'react';

import reflektorImg from '../../assets/reflektor.png';
import qrdevelopmentImg from '../../assets/qrdevelopment.png';
import wearopia2Img from '../../assets/wearopia2.png';
import pyramisImg from '../../assets/pyramis.png';
import eduaImg from '../../assets/edu.png';
import mobileappImg from '../../assets/mobileapp.png';
import wearopiaImg from '../../assets/wearopia.png';
// import pyramis2Img from '../../assets/pyrmais2.png';
import edua2Img from '../../assets/edu2.png';

// Define the base images for the first row
const ROW1_BASE = [reflektorImg, qrdevelopmentImg, pyramisImg, wearopiaImg];

// Define completely different images for the second row
const ROW2_BASE = [mobileappImg, eduaImg, edua2Img, wearopia2Img];

// We repeat (fill) the base arrays 6 times so the marquee has enough images to scroll infinitely without running out of content
const ROW1 = Array(6).fill(ROW1_BASE).flat();
const ROW2 = Array(6).fill(ROW2_BASE).flat();

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !row1Ref.current || !row2Ref.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderRow = (images: string[], innerRef: React.RefObject<HTMLDivElement | null>) => (
    <div
      ref={innerRef}
      className="flex gap-3 will-change-transform whitespace-nowrap min-w-max"
    >
      {[...images, ...images, ...images].map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Marquee item ${i}`}
          loading="lazy"
          className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0 pointer-events-none"
        />
      ))}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3"
    >
      {renderRow(ROW1, row1Ref)}
      {renderRow(ROW2, row2Ref)}
    </section>
  );
}
