"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const features = [
    {
        title: "Workflow Assessment",
        description: "We analyze your current processes to identify high-impact automation opportunities.",
    },
    {
        title: "Deploy with Confidence",
        description: "Our custom AI systems are built rigorously to ensure reliability and scalability.",
    },
    {
        title: "Ongoing Support",
        description: "We don't just launch and leave. We provide continuous support and optimization.",
    },
    {
        title: "Data-driven",
        description: "Turn your raw business data into actionable insights for better decision-making.",
    },
    {
        title: "Efficient Growth",
        description: "Scale your operations without linear cost increases through intelligent automation.",
    },
    {
        title: "Workflow Automation",
        description: "Put repetitive manual tasks on autopilot and free up your team for creative work.",
    },
];

export default function Features() {
    return (
        <section id="services" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-4">
                            AI Automation Services
                        </h2>
                        <p className="text-muted text-lg max-w-2xl mx-auto">
                            Comprehensive solutions to modernize your business operations
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FadeIn key={index} delay={index * 0.1} className="h-full">
                            <FeatureCard {...feature} />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
    return (
        <div className="group h-full p-8 rounded-2xl border border-border bg-white hover:border-accent/40 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-accent/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <div className="w-6 h-6 bg-accent rounded-full opacity-20" /> {/* Placeholder icon */}
            </div>
            <h3 className="font-heading text-xl font-medium text-foreground mb-3">{title}</h3>
            <p className="text-muted leading-relaxed">{description}</p>
        </div>
    );
}
