"use client";

import { motion } from "framer-motion";
import { Workflow, Rocket, Headphones, BarChart3, TrendingUp, Zap } from "lucide-react";
import FadeIn from "./FadeIn";

const features = [
    {
        title: "Wellness Coaches With an Engaged Audience",
        description: "You've built a loyal following that trusts your expertise, but you're stuck trading time for money with inconsistent 1-on-1 bookings and no clear path to scale.",
        icon: Workflow,
    },
    {
        title: "Holistic Health Creators Struggling to Monetize",
        description: "Our custom AI systems are built rigorously to ensure reliability and scalability.",
        icon: Rocket,
    },
    {
        title: "Mindfulness Experts Ready to Systemize",
        description: "You know your audience needs a deeper solution beyond free content, but you feel overwhelmed by the technical side of building offers and sales systems.",
        icon: Headphones,
    },
    // {
    //     title: "Data-driven",
    //     description: "Turn your raw business data into actionable insights for better decision-making.",
    //     icon: BarChart3,
    // },
    // {
    //     title: "Efficient Growth",
    //     description: "Scale your operations without linear cost increases through intelligent automation.",
    //     icon: TrendingUp,
    // },
    // {
    //     title: "Workflow Automation",
    //     description: "Put repetitive manual tasks on autopilot and free up your team for creative work.",
    //     icon: Zap,
    // },
];

export default function Features() {
    return (
        <section id="services" className="py-12 md:py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">
                            Who This Is For
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

function FeatureCard({ title, description, icon: Icon }: { title: string; description: string; icon: any }) {
    return (
        <div className="group h-full p-8 rounded-2xl border border-border bg-white hover:border-accent/40 hover:shadow-lg transition-all duration-300">
            <div className="bg-purple-100 rounded-lg p-3 w-fit mb-4">
                <Icon className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-heading text-xl font-medium text-foreground mb-3">{title}</h3>
            <p className="text-muted leading-relaxed">{description}</p>
        </div>
    );
}
