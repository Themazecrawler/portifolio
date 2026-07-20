import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitText from '../reactbits/SplitText';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray<Element>('.skill-item');
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reset',
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <section id="skills" className="py-20">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-12">
        <SplitText
          text="What I Do"
          className="text-4xl md:text-5xl font-bold mb-6 text-left text-gray-100"
          tag="h2"
          splitType="words"
          textAlign="left"
          delay={30}
          duration={0.8}
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          once={false}
        />
        <div className="skill-item">
          <SplitText
            text="I specialize in creating comprehensive digital solutions across multiple platforms and technologies"
            className="font-inter text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed mb-12 max-w-2xl"
            tag="p"
            splitType="lines"
            textAlign="left"
            delay={40}
            duration={1}
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            once={false}
          />
        </div>

        <div className="space-y-8 max-w-2xl">
          <div className="skill-item text-xl md:text-2xl text-gray-300 leading-relaxed font-inter">
            <span className="font-semibold" style={{ color: '#EC4899' }}>Mobile development</span> - Building responsive, high-performance mobile applications for Android and iOS with a focus on intuitive user experiences.
          </div>
          <div className="skill-item text-xl md:text-2xl text-gray-300 leading-relaxed font-inter">
            <span className="font-semibold" style={{ color: '#EC4899' }}>Frontend development</span> - Creating modern, interactive user interfaces that are visually appealing, responsive, and optimized for usability.
          </div>
          <div className="skill-item text-xl md:text-2xl text-gray-300 leading-relaxed font-inter">
            <span className="font-semibold" style={{ color: '#EC4899' }}>Web development</span> - Developing fast, scalable websites and web applications using modern technologies and best practices.
          </div>
        </div>
      </div>
    </section>
  );
}
