import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Linkedin } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => currentPath === path;

  const navLinks = [
    { path: "/", label: "Home" },
    // { path: "/projects", label: "Projects" },
    // { path: "/blogs", label: "Blogs" },
    // { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 md:gap-3">
          <div className="size-8 md:size-10 bg-primary flex items-center justify-center rounded-lg text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
            <span className="material-symbols-outlined text-xl md:text-2xl">neurology</span>
          </div>
          <span className="text-base md:text-xl font-bold tracking-tight uppercase text-foreground">Avishka Nirmitha</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${isActive(link.path)
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-muted-foreground hover:text-primary"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop Contact Button */}
          <a
            href="https://lk.linkedin.com/in/avishka-nirmitha-9b4b11218"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20"
          >
            <Linkedin className="size-4" />
            LinkedIn
          </a>

          {/* Mobile Hamburger Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-2 text-foreground hover:text-primary transition-colors">
                <Menu className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background border-border">
              <SheetHeader>
                <SheetTitle className="text-left text-foreground">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-medium py-2 px-4 rounded-lg transition-colors ${isActive(link.path)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg text-sm font-bold transition-all text-center shadow-lg shadow-primary/20"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
