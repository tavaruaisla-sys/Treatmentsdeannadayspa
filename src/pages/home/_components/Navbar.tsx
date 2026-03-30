import { useState } from "react";
import { MenuIcon, XIcon, SparklesIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT US", href: "#about" },
  { label: "OUR TREATMENTS", href: "#treatments" },
  { label: "CAFE", href: "#cafe" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#00838F]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#00838F] flex items-center justify-center">
            <SparklesIcon className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <span className="font-serif text-lg font-semibold text-[#00838F] tracking-wide">
              DEANNA
            </span>
            <p className="text-[10px] text-muted-foreground tracking-widest uppercase font-sans">
              Spa & Cafe
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-xs font-sans font-medium tracking-widest text-foreground/70 hover:text-[#00838F] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
