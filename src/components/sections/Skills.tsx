import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { DeviceMobile, Code, Globe } from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';
import { SKILLS } from '../../constants/site';
import SplitText from '../reactbits/SplitText';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SKILL_ICONS: Icon[] = [DeviceMobile, Code, Globe];
const CARD_ACCENTS = ['accent', 'pop', 'accent'] as const;

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray<Element>('.skill-item');
    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.06,
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
    <section id="skills" className="py-24 relative overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <SplitText
          text="What I Do"
          className="text-4xl md:text-5xl font-bold mb-4 text-left text-text"
          tag="h2"
          splitType="words"
          textAlign="left"
          delay={30}
          duration={0.8}
          from={{ opacity: 0, y: 20 }}
          to={{ opacity: 1, y: 0 }}
          once={false}
        />
        <p className="font-inter text-lg text-text-muted leading-relaxed mb-12 max-w-xl">
          I specialize in creating comprehensive digital solutions across multiple
          platforms and technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map((skill, i) => {
            const IconCmp = SKILL_ICONS[i % SKILL_ICONS.length];
            const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
            return (
              <div
                key={skill.title}
                className={`skill-item p-6 rounded-card border-2 bg-surface flex flex-col gap-4 ${
                  accent === 'pop' ? 'border-pop shadow-hard-pop' : 'border-accent shadow-hard'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-chunky flex items-center justify-center border-2 border-ink ${
                    accent === 'pop' ? 'bg-pop text-ink' : 'bg-accent text-ink'
                  }`}
                >
                  <IconCmp className="w-6 h-6" weight="bold" />
                </div>
                <h3 className="font-syne text-xl font-bold text-text">{skill.title}</h3>
                <p className="text-text-muted leading-relaxed">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
