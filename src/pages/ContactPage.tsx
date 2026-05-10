import { useState } from "react";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectFocus: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    // Simulate form submission
    toast.success("Message sent successfully! Avishka will respond shortly.");
    setFormData({ name: "", email: "", projectFocus: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 grid-bg pointer-events-none"></div>
      <div className="bg-gradient-site absolute inset-0"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6 py-12 md:py-20">
        <div className="mb-12 flex flex-col items-center text-center">
          {/* Terminal Animation */}
          <div className="w-full max-w-md mb-8">
            <div className="bg-card border border-primary/30 rounded-lg overflow-hidden shadow-2xl">
              <div className="bg-secondary px-4 py-2 flex items-center gap-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest ml-2">Terminal — Session: Guest</span>
              </div>
              <div className="p-4 text-left font-mono text-xs md:text-sm space-y-2 min-h-[100px]">
                <div className="flex items-center gap-2">
                  <span className="typing-line-1 text-blue-400">&gt; INITIALIZING_HANDSHAKE...</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="typing-line-2 text-blue-400">&gt; AUTHENTICATING_USER...</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="typing-line-3 text-emerald-400">&gt; WELCOME_Avishka_GUEST_v2.4</span>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Avishka_nirmitha: Active</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-foreground">
            Let's Connect, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Avishka</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Specialized in Python, Robotics, and AI Automation. Ready to collaborate on your next technical challenge.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-8 rounded-2xl h-full border-primary/20">
              <div className="flex items-center gap-2 mb-8">
                <span className="material-symbols-outlined text-primary">data_object</span>
                <h2 className="text-xl font-bold tracking-tight text-foreground">Secure_Contact_Protocol</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Sender_Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-background/50 border border-border rounded-lg py-4 px-4 text-foreground focus:ring-1 focus:ring-primary focus:border-primary/50 outline-none transition-all placeholder:text-muted-foreground/50"
                      placeholder="e.g. Alan Turing"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Sender_Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-background/50 border border-border rounded-lg py-4 px-4 text-foreground focus:ring-1 focus:ring-primary focus:border-primary/50 outline-none transition-all placeholder:text-muted-foreground/50"
                      placeholder="engineer@domain.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Project_Focus</label>
                  <select
                    name="projectFocus"
                    value={formData.projectFocus}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-border rounded-lg py-4 px-4 text-foreground focus:ring-1 focus:ring-primary focus:border-primary/50 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select Objective</option>
                    <option value="ai-automation">AI Automation Pipeline</option>
                    <option value="python-microservices">Python Microservices</option>
                    <option value="robotics">Robotics Integration</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message_Payload</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-background/50 border border-border rounded-lg py-4 px-4 text-foreground focus:ring-1 focus:ring-primary focus:border-primary/50 outline-none transition-all placeholder:text-muted-foreground/50 resize-none"
                    placeholder="Define project parameters for Avishka..."
                    rows={5}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-lg flex items-center justify-center gap-3 group transition-all shadow-[0_0_20px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_35px_hsl(var(--primary)/0.5)]"
                >
                  <span>Initialize_Handshake</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">send</span>
                </button>
              </form>
              <div className="mt-8 flex items-center justify-between text-[10px] text-muted-foreground/60 font-mono uppercase tracking-[0.2em]">
                <span>Channel: Encrypted</span>
                <span>Routing: Direct to Avishka</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground mb-6 px-2">Avishka's_Networks</h3>

              <a href="#" className="group glass-card block p-5 rounded-2xl transition-all border-primary/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-border group-hover:border-primary/30">
                      <span className="material-symbols-outlined text-muted-foreground group-hover:text-primary">person_search</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Avishka on LinkedIn</p>
                      <p className="text-xs text-muted-foreground">Connect for AI opportunities</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-muted-foreground group-hover:text-primary transition-colors">arrow_outward</span>
                </div>
              </a>

              <a href="#" className="group glass-card block p-5 rounded-2xl transition-all border-primary/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-border group-hover:border-primary/30">
                      <span className="material-symbols-outlined text-muted-foreground group-hover:text-primary">terminal</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">AN_Repositories</p>
                      <p className="text-xs text-muted-foreground">View Python & Robotics source</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-muted-foreground group-hover:text-primary transition-colors">arrow_outward</span>
                </div>
              </a>

              <a href="#" className="group block bg-primary/10 border border-primary/40 hover:bg-primary/20 hover:border-primary p-5 rounded-2xl transition-all shadow-[0_0_20px_hsl(var(--primary)/0.1)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                      <span className="material-symbols-outlined text-primary">article</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Professional_CV</p>
                      <p className="text-xs text-primary/80">Expertise in Python & AI</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary animate-bounce-subtle">download</span>
                </div>
              </a>
            </div>

            <div className="glass-card p-6 rounded-2xl mt-12 border-primary/20">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Lead_Engineer</span>
                  <span className="text-foreground font-mono">Avishka Nirmitha</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Response_Time</span>
                  <span className="text-primary font-mono">&lt; 12hrs</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Specialization</span>
                  <span className="text-foreground font-mono">Robotics_AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
