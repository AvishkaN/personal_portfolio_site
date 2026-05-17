import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import Timeline from "@/components/Timeline";

const HomePage = () => {
  return (
    <div className="flex-grow flex flex-col">
      <div className="hero-gradient absolute inset-0 pointer-events-none"></div>
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-12 md:py-20">
        <div className="relative z-10 space-y-6 md:space-y-8 text-center lg:text-left">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div> */}
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-background/80 border border-primary/40 text-primary text-[10px] font-mono font-bold tracking-[0.2em] exp-badge-glow">
              [EXP_LEVEL: 05_YEARS]
            </div> */}
          </div>
          <div className="space-y-4">
            <div className="relative inline-block w-full lg:w-auto">
              <div className="flex flex-col lg:flex-row items-center lg:items-end gap-4 lg:gap-6">
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[1.0] tracking-tighter text-foreground name-glow">
                  Avishka <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">nirmitha</span>
                </h1>
                <div className="mb-2 hidden sm:flex flex-col items-center justify-center size-28 rounded-3xl border border-primary/40 bg-background/60 backdrop-blur-md exp-badge-glow">
                  <span className="text-5xl font-bold text-primary leading-none">4+</span>
                  <span className="text-[10px] uppercase tracking-widest text-primary/80 font-mono font-bold mt-2 text-center leading-tight">Years of<br />Experience</span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-lg md:text-2xl font-medium tracking-tight border-l-4 border-primary pl-4 text-left mx-auto lg:mx-0 max-w-fit">
              AI Engineer & Deep learning, Robotics
            </p>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
              Specializing in automation, neural architectures, and edge computing for real-world robotics and intelligent systems.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
            <Link
              to="/projects"
              className="flex min-w-[160px] items-center justify-center gap-2 rounded-lg h-12 md:h-14 px-6 md:px-8 bg-primary text-primary-foreground text-sm md:text-base font-bold shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:scale-105 transition-transform"
            >
              <span>View Projects</span>
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </Link>
            <a
              href="https://lk.linkedin.com/in/avishka-nirmitha-9b4b11218"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[160px] items-center justify-center gap-2 rounded-lg h-12 md:h-14 px-6 md:px-8 bg-secondary border border-border text-foreground text-sm md:text-base font-bold hover:bg-secondary/80 transition-colors"
            >
              <Linkedin className="size-5" />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 pt-4 max-w-2xl mx-auto lg:mx-0">
            {[
              { icon: "code", label: "Python" },
              { icon: "psychology", label: "PyTorch" },
              { icon: "visibility", label: "Computer Vision" },
              { icon: "precision_manufacturing", label: "ROS2" },
              { icon: "hub", label: "TensorFlow" },
              { icon: "dns", label: "Softwere Systems" },
            ].map((skill) => (
              <div key={skill.label} className="flex items-center gap-2 rounded-full bg-background/50 border border-border px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-muted-foreground">
                <span className="material-symbols-outlined text-primary text-base md:text-lg">{skill.icon}</span>
                {skill.label}
              </div>
            ))}
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full aspect-square max-w-[500px]">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full"></div>
            <div className="relative z-10 w-full h-full rounded-2xl border border-border bg-secondary/50 backdrop-blur-sm overflow-hidden group">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-20 pointer-events-none"></div>
              {/* <img
                alt="Avishka Nirmitha, AI Engineer"
                className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-700"
              // src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxLe1CFojRYjbwM_T1q1XubqwOZ5AjOoT51NEcl8DwbL373GbBc_Ue7l4Cz6KHHPX--1isXAFpeeKQIWkFBQy1Knv1toVJCFgB-5OVvzjNa677g3Sy6x9sAnUIgqqoQt3bsi9Ckv1WM5YfJvxUq_EPvApgxz0KHzeNK0NU9EuFGVRhtZPTR2AMW_NZMFO320SRpRqo2DKqaN65_xAaqzM2ZKMQWcTh2_5tK3VrABedKixpit6_WIthr1ijPKwbp_gESMTy4gsY5vg"
              // src="/images/Avishka Nirmitha Cover.jpeg"
              /> */}
              <div className="absolute inset-0 z-30 pointer-events-none">
                <div className="absolute top-4 left-4 size-8 border-t-2 border-l-2 border-primary/60"></div>
                <div className="absolute top-4 right-4 size-8 border-t-2 border-r-2 border-primary/60"></div>
                <div className="absolute bottom-4 left-4 size-8 border-b-2 border-l-2 border-primary/60"></div>
                <div className="absolute bottom-4 right-4 size-8 border-b-2 border-r-2 border-primary/60"></div>
                <div className="scan-line top-[30%] opacity-40"></div>
                <div className="scan-line top-[60%] opacity-20"></div>
                <div className="absolute top-8 left-8 space-y-1">
                  <p className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest bg-background/40 px-1 inline-block">TARGET_DETECTED: Avishka_nirmitha</p>
                  <p className="text-[10px] font-mono text-primary/80 uppercase tracking-widest">Field: AI_Robotics_Core</p>
                  <p className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">Status: SYNC_COMPLETE</p>
                </div>
                <div className="absolute bottom-8 right-8 text-right space-y-1">
                  <p className="text-[10px] font-mono text-primary/80 uppercase">Latency: 0.002ms</p>
                  <p className="text-[10px] font-mono text-primary/80 uppercase">Event: TECH_SUMMIT_KEYNOTE</p>
                  <p className="text-[10px] font-mono text-primary/80 uppercase">Loc: 40.7128° N, 74.0060° W</p>
                </div>
                <div className="absolute inset-0 border-[1px] border-primary/10 rounded-full scale-[0.8] opacity-20"></div>
                <div className="absolute inset-0 border-[1px] border-primary/5 rounded-full scale-[1.1] opacity-10"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-primary/5 z-10"></div>
            </div>
            <div className="absolute -top-6 -right-6 px-4 py-2 rounded-lg bg-background/80 border border-primary/50 backdrop-blur shadow-[0_0_20px_hsl(var(--primary)/0.3)] text-xs font-mono text-primary flex items-center gap-2 z-40">
              <span className="size-2 rounded-full bg-primary animate-pulse"></span>
              ACTIVE_CORE_01
            </div>
          </div>
        </div>
      </div>
      <Timeline />
    </div>
  );
};

export default HomePage;
