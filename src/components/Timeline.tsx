import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const events = [
  { year: "2019", title: "Started Journey", description: "Began exploring AI and robotics during university." },
  { year: "2020", title: "First ML Project", description: "Built first computer vision model using OpenCV and TensorFlow." },
  { year: "2021", title: "Robotics Research", description: "Joined robotics lab; worked on ROS-based autonomous navigation." },
  { year: "2022", title: "AI Engineer Role", description: "Started professional career building neural architectures." },
  { year: "2023", title: "Edge Computing", description: "Deployed real-time AI models on edge devices for industrial use." },
  { year: "2024", title: "Tech Summit Keynote", description: "Presented research on scalable AI systems for robotics." },
  { year: "2025", title: "Innovating Forward", description: "Leading new initiatives in autonomous intelligent systems." },
];

const VISIBLE = 5;

const Timeline = () => {
  const [active, setActive] = useState(Math.floor(events.length / 2));
  const [start, setStart] = useState(Math.max(0, Math.min(events.length - VISIBLE, active - Math.floor(VISIBLE / 2))));

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
    <section className="relative w-full py-16 md:py-24 hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            Career Timeline
          </div>
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
              <div className="absolute left-0 right-0 top-[60px] h-px bg-border" />
              <div
                className="absolute left-0 top-[60px] h-px bg-gradient-to-r from-primary to-blue-400 transition-all duration-500"
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
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              {events[active].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
