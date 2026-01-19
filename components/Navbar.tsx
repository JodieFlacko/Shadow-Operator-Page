import Link from "next/link";
import { Menu, Box } from "lucide-react";

export default function Navbar() {
    const navLinks = [
        { name: "Services", href: "#services" },
        { name: "Reviews", href: "#reviews" },
        { name: "Pricing", href: "#pricing" },
        { name: "Projects", href: "#projects" },
        { name: "Contact Us", href: "#contact" },
    ];

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
            <div className="flex items-center justify-between w-full px-6 py-3 rounded-full shadow-lg backdrop-blur-md bg-white/80 border border-white/40">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Box className="w-8 h-8 text-purple-600" strokeWidth={2.5} />
                    <span className="font-heading font-bold text-xl tracking-tight text-foreground hidden sm:block">
                        Lander OS
                    </span>
                </div>

                {/* Desktop Nav Links */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted hover:text-purple-600 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Link
                        href="/"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-md"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden p-2 text-foreground hover:text-purple-600 transition-colors">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </header>
    );
}
