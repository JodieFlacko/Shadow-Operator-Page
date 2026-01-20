"use client";

import { useState } from "react";
import { Plus, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
    return (
        <div
            className={cn(
                "group cursor-pointer rounded-2xl border border-gray-100 bg-white/50 p-1 backdrop-blur-sm transition-all duration-300 hover:border-gray-200 hover:shadow-md",
                isOpen && "bg-white shadow-md ring-1 ring-black/5"
            )}
            onClick={onClick}
        >
            <div className="flex w-full items-center justify-between px-5 py-3">
                <h3 className="font-medium text-foreground">{question}</h3>
                <span
                    className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-50 text-muted transition-transform duration-300",
                        isOpen && "rotate-45 bg-accent/10 text-accent"
                    )}
                >
                    <Plus className="h-4 w-4" />
                </span>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-5 pt-0 text-sm leading-relaxed text-muted">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const leftQuestions = [
    {
        question: "What is included in the Starter plan?",
        answer:
            "The Starter plan includes access to basic analytics, up to 1,000 monthly active users, and email support. It's designed for individuals and small teams just getting started with our platform.",
    },
    {
        question: "Can I switch plans later?",
        answer:
            "Yes, you can upgrade or downgrade your plan at any time. Changes will be applied to your next billing cycle, and prorated credits will be calculated automatically.",
    },
    {
        question: "How secure is my data?",
        answer:
            "We take security seriously. Your data is encrypted at rest and in transit using industry-standard protocols. We perform regular security audits and are SOC 2 Type II compliant.",
    },
    {
        question: "Can I integrate this platform with other tools?",
        answer:
            "Absolutely. We offer a comprehensive API and native integrations with popular tools like Slack, Jira, GitHub, and Notion to streamline your workflow.",
    },
];

const rightQuestions = [
    {
        question: "Do you offer a free trial?",
        answer:
            "Yes, we offer a 14-day free trial on all paid plans. No credit card is required to sign up, so you can explore the features risk-free.",
    },
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept all major credit cards including Visa, Mastercard, and American Express. For Enterprise plans, we also support invoicing and bank transfers.",
    },
    {
        question: "How does the 2% donation work?",
        answer:
            "For every transaction processed on our platform, we donate 2% of our profit to climate change initiatives and open source projects that align with our sustainability goals.",
    },
    {
        question: "What makes your platform different?",
        answer:
            "Unlike other solutions, we focus on developer experience first. Our platform is built for speed, reliability, and ease of use, with a zero-config setup that gets you running in minutes.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<{ col: "left" | "right"; index: number } | null>(null);

    const handleToggle = (col: "left" | "right", index: number) => {
        setOpenIndex((prev) =>
            prev?.col === col && prev.index === index ? null : { col, index }
        );
    };

    return (
        <section className="relative overflow-hidden py-24 sm:py-32">
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                {/* Header Grid */}
                <div className="mb-16 grid grid-cols-1 items-end gap-y-6 md:grid-cols-[auto_1fr_auto] md:gap-x-12">
                    <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                        Questions answered
                    </h2>
                    <p className="max-w-sm pb-1 text-base leading-relaxed text-muted md:mb-1">
                        We're here to help you with any questions you might have about our platform details.
                    </p>
                    <div className="md:mb-1">
                        <button className="group inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-hover hover:scale-105 active:scale-95">
                            Contact Sales Now
                        </button>
                    </div>
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                    {/* Left Column */}
                    <div className="flex flex-col gap-4">
                        {leftQuestions.map((item, index) => (
                            <FAQItem
                                key={`left-${index}`}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openIndex?.col === "left" && openIndex.index === index}
                                onClick={() => handleToggle("left", index)}
                            />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-4">
                        {rightQuestions.map((item, index) => (
                            <FAQItem
                                key={`right-${index}`}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openIndex?.col === "right" && openIndex.index === index}
                                onClick={() => handleToggle("right", index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-16 flex justify-center">
                    <div className="inline-flex items-center gap-3 rounded-full border border-gray-100 bg-white/50 px-5 py-2.5 text-sm text-muted shadow-sm backdrop-blur-sm">
                        <Mail className="h-4 w-4" />
                        <span>
                            Feel free to mail us for any enquiries :{" "}
                            <a
                                href="mailto:landeros@email.com"
                                className="font-medium text-foreground hover:text-accent"
                            >
                                landeros@email.com
                            </a>
                        </span>
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 opacity-50 blur-[100px]" />
        </section>
    );
}
