"use client";
import logoImage from "@/public/pigeons.jpeg";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact Us",
      href: "#contactus",
    },
  ];

  return (
    <header
      className="
        sticky top-0 z-50 w-full
        bg-brand-surface
        shadow-brand-sm
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* =========================
              LOGO
          ========================== */}
          <Link
            href="./"
            className="
              group flex items-center gap-3
              animate-fade-in
            "
          >
            {/* Logo */}
            <div
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-brand
                bg-brand-gradient
                shadow-brand-sm
                transition-all duration-300
                group-hover:scale-105
              "
            >
              <span className="text-xl font-black text-brand-surface">
                <Image src={logoImage} />
              </span>
            </div>

            {/* Logo Text */}
            <div className="leading-tight">
              <h1
                className="
                  text-lg
                  font-extrabold
                  tracking-tight
                  text-brand-primary
                "
              >
                Pigeons
                <span className="text-brand-secondary">Power</span>
              </h1>

              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-brand-muted
                "
              >
                Electrical Engineering Consultancy
              </p>
            </div>
          </Link>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  relative
                  py-2
                  text-sm
                  font-semibold
                  text-brand-text
                  transition-colors
                  duration-300

                  hover:text-brand-secondary

                  after:absolute
                  after:bottom-0
                  after:left-0
                  after:h-[2px]
                  after:w-0
                  after:bg-brand-accent
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* =========================
              DESKTOP CTA
          ========================== */}
          <div className="hidden lg:block">
            <Link
              href="#contactus"
              className="
                inline-flex
                items-center
                justify-center

                rounded-brand

                bg-brand-accent
                px-6
                py-3

                text-sm
                font-bold
                text-brand-primary

                shadow-button

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-brand-accent-dark
                hover:shadow-brand

                active:translate-y-0
              "
            >
              Contact Us
            </Link>
          </div>

          {/* =========================
              MOBILE BUTTON
          ========================== */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-brand
              border
              border-brand-border

              text-brand-primary

              transition-all
              duration-300

              hover:border-brand-secondary
              hover:text-brand-secondary

              lg:hidden
            "
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* =========================
            MOBILE MENU
        ========================== */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-300
            lg:hidden

            ${
              isMenuOpen
                ? "max-h-[500px] pb-6 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <nav
            className="
              flex
              flex-col
              border-t
              border-brand-border
              pt-4
            "
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="
                  border-b
                  border-brand-border

                  px-2
                  py-4

                  text-sm
                  font-semibold
                  text-brand-text

                  transition-colors
                  duration-300

                  hover:bg-brand-background
                  hover:text-brand-secondary
                "
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Contact Button */}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="
                mt-5
                flex
                items-center
                justify-center

                rounded-brand

                bg-brand-accent

                px-6
                py-3

                text-sm
                font-bold
                text-brand-primary

                transition-all
                duration-300

                hover:bg-brand-accent-dark
              "
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
