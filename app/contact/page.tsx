import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - Prima Studio Media",
    description: "Get in touch with our team for assistance or to book a demo.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Contact />
        </main>
    );
}
