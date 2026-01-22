import Link from "next/link";
import Image from "next/image";
import { Box, Twitter, Instagram, Facebook, Globe } from "lucide-react";

const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Globe, href: "#", label: "Website" },
];

const navLinks = [
    { label: "Product", href: "#" },
    { label: "Integrations", href: "#" },
    { label: "Success Stories", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Careers", href: "#" },
];

export default function Footer() {
    return (
        <footer className="w-full pt-20 pb-10 bg-purple-50/30">
            <div className="max-w-5xl mx-auto px-4 md:px-0 flex flex-col">
                {/* Top Row: Brand & Socials */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo Badge */}
                    {/* Logo Badge */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative h-[32px] w-auto">
                            <Image
                                src="/logo.png"
                                alt="Prima Studio Logo"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: 'auto', height: '32px' }}
                            />
                        </div>
                        <span className="font-heading font-bold text-xl tracking-tight text-gray-900">
                            Prima Studio Media
                        </span>
                    </Link>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                aria-label={social.label}
                                className="bg-white p-3 rounded-full shadow-sm text-purple-600 hover:scale-110 transition-transform duration-200 flex items-center justify-center"
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Middle Row: Navigation */}
                <nav className="mt-12 mb-8">
                    <ul className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.href}
                                    className="text-gray-600 hover:text-purple-600 transition-colors duration-200 font-medium text-sm md:text-base"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Bottom Row: Copyright */}
                <div className="border-t border-gray-200 pt-8 flex justify-center md:justify-start">
                    <p className="text-sm text-gray-500">© 2026 PrimaStudioMedia</p>
                </div>
            </div>
        </footer>
    );
}
