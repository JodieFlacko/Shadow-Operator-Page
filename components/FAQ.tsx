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
        question: "How long does it take to see results?",
        answer:
            "Most clients see qualified demos within 60 days of pipeline installation. The system is built to deliver fast, measurable results.",
    },
    {
        question: "Do I need a sales team to make this work?",
        answer:
            "No. We include the SDR-in-a-Box playbook that shows you exactly how to hire and manage your first sales development rep.",
    },
    {
        question: "What if I don't have a large audience?",
        answer:
            "The system works with audiences as small as 5,000 engaged followers. It's about quality of attention, not just quantity of followers.",
    },
    {
        question: "Will this feel pushy or damage my brand?",
        answer:
            "No. The quiz funnel operates privately, away from your public feed. Your audience opts in voluntarily, preserving your authentic brand voice.",
    },
    {
        question: "What happens if I don't get 15 qualified demos in 60 days?",
        answer:
            "We keep working for free until you hit that benchmark. Your success is guaranteed, or we don't stop building.",
    },
];

const rightQuestions = [
    {
        question: "Is this just another course I have to implement myself?",
        answer:
            "No. This is done-for-you installation. We build the quiz, scoring system, emails, and dashboard. You focus on your content.",
    },
    {
        question: "How much technical knowledge do I need?",
        answer:
            "Zero. We handle all the technical setup and integration. You just need to provide your expertise and approve the messaging.",
    },
    {
        question: "Can I use this if I already have a product or course?",
        answer:
            "Yes. The pipeline works with any existing offer. We simply install the qualification system between your audience and your sales process.",
    },
    {
        question: "What if my audience is in a different niche than wellness?",
        answer:
            "The system works for any creator or info business with an engaged audience. We customize the quiz and messaging to your specific market.",
    },
    {
        question: "How is this different from running Facebook ads?",
        answer:
            "This targets your existing warm audience, not cold traffic. You're harvesting intent that already exists, not paying to create new attention.",
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
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
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
                                href="mailto:info@prima-studio-agency.com"
                                className="font-medium text-foreground hover:text-accent"
                            >
                                info@prima-studio-agency.com
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
