"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Box } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "Services", href: "/#services" },
        { name: "Reviews", href: "/#reviews" },
        { name: "Pricing", href: "/#pricing" },
        { name: "Projects", href: "/#projects" },
        { name: "Contact Us", href: "/contact" },
    ];

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMenuOpen]);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        // Only run smooth scroll logic if we are on the homepage AND the link is an anchor link
        if (pathname === "/" && href.startsWith("/#")) {
            e.preventDefault();
            const targetId = href.replace("/#", "");
            const elem = document.getElementById(targetId);
            elem?.scrollIntoView({
                behavior: "smooth",
            });
        }
        setIsMenuOpen(false);
    };

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (pathname === "/") {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
                <div className="flex items-center justify-between w-full px-6 py-3 rounded-full shadow-lg backdrop-blur-md bg-white/80 border border-white/40">
                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={handleLogoClick}
                        className="flex items-center gap-2 cursor-pointer relative z-50"
                    >
                        <div className="relative h-[40px] w-auto mr-2">
                            <Image
                                src="/logo.png"
                                alt="Lander OS Logo"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: 'auto', height: '40px' }}
                                priority
                            />
                        </div>
                        <span className="font-heading font-bold text-xl tracking-tight text-foreground hidden sm:block">
                            Lander OS
                        </span>
                    </Link>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
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
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-foreground hover:text-purple-600 transition-colors relative z-50 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <div className="flex flex-col justify-center items-center gap-[6px] w-6 h-6">
                            <span
                                className={`bg-gray-800 h-[2px] w-full rounded-full transition-all duration-300 ease-in-out origin-center ${isMenuOpen ? "rotate-45 translate-y-[4px]" : ""
                                    }`}
                            />
                            <span
                                className={`bg-gray-800 h-[2px] w-full rounded-full transition-all duration-300 ease-in-out origin-center ${isMenuOpen ? "-rotate-45 -translate-y-[4px]" : ""
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                    }`}
            >
                <nav className="flex flex-col items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                            className="text-2xl font-medium text-foreground hover:text-purple-600 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}
