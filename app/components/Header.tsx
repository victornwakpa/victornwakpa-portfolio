"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "About Me", href: "#about-me" },
];

function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id || "");
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    const sections = ["hero", ...navItems.map(item => item.href.slice(1))];
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
}


export default function Header() {
  const activeSection = useActiveSection();

 

  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/Resume-victor-nwakpa.pdf";
    link.setAttribute("download", "Resume-victor-nwakpa.pdf"); // This sets the download attribute
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="container fixed left-0 right-0 top-5 z-50 mx-auto w-fit rounded-full bg-black/60 py-2 shadow-[0_0px_10px_rgba(100,150,169,0.8)] backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-4xl px-3">
        <nav className="flex items-center justify-between gap-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="py- rounded-full bg-gray-100 px-4 text-2xl font-bold text-black">
                VN
              </span>
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 py-1 font-semibold transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "bg-gray-200 text-gray-900"
                    : "text-gray-200 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center rounded-full border border-transparent bg-gray-100 px-4 py-1 text-base font-semibold text-black shadow-sm transition-colors hover:bg-gray-300"
            >
              Resume
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
