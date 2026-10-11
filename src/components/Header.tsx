"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Button } from "./Button";

const links = [
  { href: "/ons-verhaal", label: "Ons verhaal" },
  { href: "/onze-pijlers", label: "Onze pijlers" },
  { href: "/projecten-en-impact", label: "Projecten & impact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b bg-offwhite/95 backdrop-blur transition-[border-color,box-shadow] duration-300 ${
          scrolled ? "border-charcoal/10 shadow-sm" : "border-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-[height] duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <Logo onClick={close} />
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-1 text-sm font-medium transition-colors hover:text-forest after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-gold after:transition-transform after:duration-300 ${
                    active
                      ? "text-forest after:scale-x-100"
                      : "text-charcoal/80 after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2 md:gap-3">
            <Button
              href="/#contact"
              variant="primary"
              className="!px-3.5 !py-2 md:!px-6 md:!py-3"
            >
              <span className="md:hidden">Doe mee</span>
              <span className="hidden md:inline">Samen impact maken</span>
            </Button>
            <button
              type="button"
              aria-label={open ? "Sluit menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="relative flex size-10 shrink-0 items-center justify-center md:hidden"
            >
              <span className="relative block h-3 w-6">
                <span
                  className={`absolute left-0 h-0.5 w-6 bg-charcoal transition-all duration-300 ${
                    open ? "top-[5px] rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-6 bg-charcoal transition-all duration-300 ${
                    open ? "top-[5px] -rotate-45" : "top-[10px]"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-forest text-offwhite transition-[opacity,visibility] duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
          <nav className="flex flex-col gap-2">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={`font-display block border-b border-offwhite/15 py-4 text-4xl transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                } ${pathname === link.href ? "text-gold" : "text-offwhite"}`}
                style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div
            className={`flex flex-col gap-4 transition-all duration-500 ${
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: open ? "380ms" : "0ms" }}
          >
            <Button href="/#contact" variant="primary" className="justify-center" onClick={close}>
              Samen impact maken →
            </Button>
            <p className="text-sm text-offwhite/60">Together We Rise.</p>
          </div>
        </div>
      </div>
    </>
  );
}
