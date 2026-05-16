const ContactPage = () => {
  const contactLinks = [
    {
      title: "LinkedIn",
      value: "Avishka Nirmitha",
      icon: "person_search",
      href: "https://www.linkedin.com/in/avishka-nirmitha-9b4b11218/",
      target: "_blank"
    },
    {
      title: "GitHub",
      value: "Avishka Nirmitha",
      icon: "terminal",
      href: "https://github.com/AvishkaN",
      target: "_blank"
    },
    // {
    //   title: "Phone Number",
    //   value: "+94 XX XXX XXXX",
    //   icon: "phone_iphone",
    //   href: "tel:+94000000000",
    //   target: "_self"
    // },
    // {
    //   title: "Primary Email",
    //   value: "primary@domain.com",
    //   icon: "alternate_email",
    //   href: "mailto:primary@domain.com",
    //   target: "_self"
    // },
    // {
    //   title: "Secondary Email",
    //   value: "secondary@domain.com",
    //   icon: "mail",
    //   href: "mailto:secondary@domain.com",
    //   target: "_self"
    // }
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-center py-20">
      <div className="absolute inset-0 grid-bg pointer-events-none"></div>
      <div className="bg-gradient-site absolute inset-0"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-6">
        <div className="mb-16 flex flex-col items-center text-center">
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
                  <span className="typing-line-3 text-emerald-400">&gt; ACCESS_COMM_CHANNELS_v2.4</span>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-foreground">
            Let's Connect, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Avishka</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Specialized in Python, Robotics, and AI Automation. Ready to collaborate on your next technical challenge.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {contactLinks.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.target}
              className="group glass-card block p-6 rounded-2xl transition-all border-primary/20 hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.3)] w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-border group-hover:border-primary/30">
                  <span className="material-symbols-outlined text-3xl text-muted-foreground group-hover:text-primary transition-colors">{contact.icon}</span>
                </div>
                <div className="w-full overflow-hidden">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors mb-2">{contact.title}</p>
                  <p className="text-base font-medium text-foreground truncate">{contact.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
