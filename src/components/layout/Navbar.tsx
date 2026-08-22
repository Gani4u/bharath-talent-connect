import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/data/navigation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';
import logo from "../../assets/logos/btc-logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHome = typeof window !== 'undefined' && (window.location.pathname === '/' || window.location.pathname === '/index.html');

  const handleNavClick = (to: string, e: React.MouseEvent) => {
    if (!isHome) {
      e.preventDefault();
      sessionStorage.setItem("scrollToSection", to);
      window.history.pushState(null, "", "/");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo and Brand Title */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={(e: React.MouseEvent) => handleNavClick("home", e)}
          className="cursor-pointer"
        >
          <div className="flex items-center gap-3.5">
            <img
              src={logo}
              alt="BTC Logo"
              className="h-10 w-10 object-contain shrink-0"
              loading="eager"
              width="40"
              height="40"
            />
            <div className="hidden md:block">
              <div className="text-base font-black leading-tight tracking-wider text-primary">
                BTC
              </div>
              <div className="text-[9px] text-slate-500/80 leading-none font-bold uppercase tracking-widest mt-0.5">
                Business Transformation Consulting
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Menu (Decluttered to 5 items) */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              smooth={true}
              duration={500}
              offset={-64} // Height offset for h-16 sticky navbar
              spy={true}
              activeClass="text-primary font-black border-b-2 border-primary pb-1"
              onClick={(e: React.MouseEvent) => handleNavClick(item.href, e)}
              className="cursor-pointer text-xs font-bold uppercase tracking-wider text-slate-600 transition-all hover:text-primary py-1"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact CTA Button (Routes to unified contact block) */}
        <div className="hidden lg:block">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-64}
            onClick={(e: React.MouseEvent) => handleNavClick("contact", e)}
            className="cursor-pointer"
          >
            <Button className="rounded-full px-5 text-xs font-bold bg-primary hover:bg-primary/95 text-white shadow-xs">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border lg:hidden text-foreground cursor-pointer"
          aria-label="Open menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/80 p-6 shadow-xl flex flex-col gap-3.5 z-50 animate-fade-in">
          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              smooth={true}
              duration={500}
              offset={-64}
              spy={true}
              activeClass="text-primary font-bold"
              onClick={(e: React.MouseEvent) => {
                setIsMenuOpen(false);
                handleNavClick(item.href, e);
              }}
              className="cursor-pointer text-sm font-semibold text-slate-700 hover:text-primary transition-all py-2 border-b border-slate-100/50"
            >
              {item.title}
            </Link>
          ))}
          <div className="mt-4 pt-2">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-64}
              onClick={(e: React.MouseEvent) => {
                setIsMenuOpen(false);
                handleNavClick("contact", e);
              }}
              className="cursor-pointer block text-center"
            >
              <Button className="w-full rounded-full py-5 text-xs font-bold">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
export { Navbar };