import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border bg-background/80 backdrop-blur-md py-12 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <span className="font-signature text-4xl text-foreground tracking-wide">Avishka Nirmitha</span>
            <span className="text-[10px] text-primary uppercase tracking-[0.4em] font-bold mt-1">AI & Robotics Engineer</span>
          </div>
          {/* <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <Link to="/blogs" className="hover:text-primary transition-colors">Blogs</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav> */}
          <div className="flex flex-col gap-1">
            <p className="text-xs font-mono text-muted-foreground uppercase">© 2026 Avishka Nirmitha Portfolio</p>
            {/* <p className="text-[10px] text-muted-foreground/60 uppercase tracking-widest">Autonomous Automation Division</p> */}
          </div>
        </div>
        <div className="flex flex-col items-end gap-6 w-full md:w-auto">
          {/* <div className="flex items-center gap-6">
            <div className="bg-secondary border border-border rounded px-3 py-1.5 flex items-center gap-2">
              <span className="text-[10px] font-mono text-muted-foreground">Core_Version</span>
              <span className="text-[10px] font-mono text-primary">4.1.0-PRO</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-lg">shield_with_heart</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-lg">lan</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-lg">alternate_email</span>
              </a>
            </div>
          </div> */}
          <div className="text-[10px] font-mono text-muted-foreground text-right uppercase tracking-widest leading-relaxed">
            Building the future through code and metal.<br />
            Sri Lanka | Remote
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
