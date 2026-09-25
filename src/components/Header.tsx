import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "./Button";

const links = [
  { href: "/ons-verhaal", label: "Ons verhaal" },
  { href: "/onze-pijlers", label: "Onze pijlers" },
  { href: "/projecten-en-impact", label: "Projecten & impact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-offwhite/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-forest"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button href="/#contact" variant="primary" className="!px-4 md:!px-6">
          <span className="md:hidden">Doe mee</span>
          <span className="hidden md:inline">Samen impact maken</span>
        </Button>
      </div>
    </header>
  );
}
