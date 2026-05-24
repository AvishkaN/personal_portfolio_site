import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  {
    year: "2017",
    title: "Started Programming",
    description: [
      "Began learning programming during Grade 9 with C# and Java.",
      "Built the foundation for my software engineering journey."
    ],
  },
  {
    year: "2020",
    title: "Web Development Journey",
    description: [
      "Started focused self-learning in web development.",
      "Mastered HTML, CSS, JavaScript, React.js, and Node.js through real-world projects."
    ],
  },
  {
    year: "2021",
    title: "Full-Stack Development",
    description: [
      "Expanded knowledge in frontend and backend systems.",
      "Developed modern web applications and strengthening software engineering skills."
    ],
  },
  {
    year: "2022",
    title: "AI Transition & Industry Experience",
    description: [
      "Shifted career focus from software engineering to Artificial Intelligence and Machine Learning.",
      "Joined the industry as a Software Engineering Intern.",
      "Received the 'Best Software Developer Of The Year 2022' award for outstanding performance and contributions."
    ],
  },
  {
    year: "2023",
    title: "Deep Learning Foundations",
    description: [
      "Dedicated months to studying neural networks, mathematics, and backpropagation.",
      "Explored deep learning internals to understand AI beyond the black-box level."
    ],
  },
  {
    year: "2024",
    title: "Production AI & Recognition",
    description: [
      "Focused on Computer Vision, CNNs, and production-level AI systems.",
      "Received the 'Exceptional Contributor 2024' award, including an international Bangkok tour recognition."
    ],
  },
  {
    year: "2025",
    title: "Physical AI & Robotics",
    description: [
      "Currently building production-grade Machine Learning systems.",
      "Growing interests in robotics, robotic arms, autonomous systems, and intelligent automation."
    ],
  },
  {
    year: "Future",
    title: "Building Intelligent Systems",
    description: [
      "Continuously exploring the future of Physical AI, deep learning, and robotics.",
      "Aiming to create scalable intelligent technologies for real-world impact."
    ],
  },
];

const VISIBLE = 10;

const Timeline = () => {
  const [active, setActive] = useState(0);
  const [start, setStart] = useState(0);

  const visible = events.slice(start, start + VISIBLE);
  const activeIndexInWindow = active - start;

  const prev = () => {
    if (active > 0) {
      const next = active - 1;
      setActive(next);
      if (next < start) setStart(next);
    }
  };
  const next = () => {
    if (active < events.length - 1) {
      const n = active + 1;
      setActive(n);
      if (n >= start + VISIBLE) setStart(n - VISIBLE + 1);
    }
  };

  const progress = ((active + 1) / events.length) * 100;

  return (
    <section className="relative w-full py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            Career Timeline
          </div> */}
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter name-glow">
            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Journey</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm md:text-base">A year-by-year look at key milestones</p>
        </div>

        {/* Progress bar */}
        <div className="max-w-3xl mx-auto mb-8">
          {/* <div className="flex justify-between text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-2">
            <span>Progress</span>
            <span className="text-primary">{active + 1} / {events.length}</span>
          </div> */}
          {/* <div className="relative h-1.5 rounded-full bg-secondary overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-blue-400 transition-all duration-500"
              style={{ width: `${progress}%`, boxShadow: "0 0 12px hsl(var(--primary) / 0.6)" }}
            />
          </div> */}
        </div>

        <div className="relative flex items-center gap-2 md:gap-4">
          <button
            onClick={prev}
            disabled={active === 0}
            aria-label="Previous"
            className="shrink-0 size-10 md:size-12 rounded-lg bg-secondary border border-border text-foreground hover:bg-primary/20 hover:border-primary/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div className="relative flex-1 overflow-hidden">
            {/* Track */}
            <div className="relative pt-12 pb-4">
              <div className="absolute left-0 right-0 top-[3.625rem] md:top-[3.75rem] h-px bg-border" />
              <div
                className="absolute left-0 top-[3.625rem] md:top-[3.75rem] h-px bg-gradient-to-r from-primary to-blue-400 transition-all duration-500"
                style={{ width: `${((activeIndexInWindow + 0.5) / VISIBLE) * 100}%`, boxShadow: "0 0 8px hsl(var(--primary) / 0.6)" }}
              />

              <div className="grid" style={{ gridTemplateColumns: `repeat(${VISIBLE}, minmax(0, 1fr))` }}>
                {visible.map((e, i) => {
                  const realIndex = start + i;
                  const isActive = realIndex === active;
                  const isPast = realIndex < active;
                  return (
                    <button
                      key={e.year}
                      onClick={() => setActive(realIndex)}
                      className="flex flex-col items-center group"
                    >
                      <div
                        className={`relative z-10 size-5 md:size-6 rounded-full border-2 transition-all duration-300 ${isActive
                          ? "bg-primary border-primary scale-125 shadow-[0_0_20px_hsl(var(--primary)/0.7)]"
                          : isPast
                            ? "bg-primary/60 border-primary/60"
                            : "bg-background border-border group-hover:border-primary/60"
                          }`}
                      >
                        {isActive && (
                          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40" />
                        )}
                      </div>
                      <span
                        className={`mt-3 text-xs md:text-sm font-mono font-bold tracking-widest transition-colors ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                          }`}
                      >
                        {e.year}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <button
            onClick={next}
            disabled={active === events.length - 1}
            aria-label="Next"
            className="shrink-0 size-10 md:size-12 rounded-lg bg-secondary border border-border text-foreground hover:bg-primary/20 hover:border-primary/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Active event details */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="glass-card rounded-xl p-6 md:p-8 text-center" key={active}>
            <p className="text-primary text-xs font-mono font-bold tracking-[0.2em] uppercase mb-2">
              [{events[active].year}]
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
              {events[active].title}
            </h3>
            <ul className="text-muted-foreground text-sm md:text-base leading-relaxed list-disc list-inside text-left inline-block space-y-1">
              {events[active].description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
