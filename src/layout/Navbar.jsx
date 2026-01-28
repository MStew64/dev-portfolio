import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import React, { useEffect } from "react";

const navLinks = [ 
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" }
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  <header className={`fixed top-0 left-0 right-0 transition-all duration-300 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}>
    <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tight hover:text-primary">
            MS<span className="text-primary">.</span>
        </a>

        {
            /* Desktop Menu */
        }
        <div className="hidden md:flex items-center gap-1">
            <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                {navLinks.map((link, index) => (
                    <a key={index}
                    href={link.href}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                        {link.label}
                    </a>
                ))}
            </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
            <Button size = "sm">Contact Me</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden p-2 text-foreground cursor-pointer" onClick={ () => setIsMobileMenuOpen((prev) => !prev)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
    </nav>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
                    <a key={index}
                     href={link.href}
                     onClick={() => setIsMobileMenuOpen(false)}
                     className="text-lg text-muted-foreground hover:text-foreground py-2">
                        {link.label}
                    </a>
                ))}

            <Button onClick={() => setIsMobileMenuOpen(false)}>Contact Me</Button>
          </div>
        </div>
    )}
  </header>
  );
};