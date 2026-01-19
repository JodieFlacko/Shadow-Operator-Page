"use client";

import { Check } from "lucide-react";
import FadeIn from "./FadeIn";

const tiers = [
    {
        name: "Starter",
        price: "$750",
        frequency: "/month",
        description: "Perfect for small businesses starting with AI.",
        features: ["Basic AI tools", "Limited automation", "Real-time reporting", "Basic chatbot"],
        popular: false,
    },
    {
        name: "Pro",
        price: "$1700",
        frequency: "/month",
        description: "Advanced automation for growing companies.",
        features: [
            "Everything in Starter",
            "3rd-party integrations",
            "Advanced analytics",
            "Premium chatbot",
            "Cross-platform",
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "$4700",
        frequency: "/month",
        description: "Full-scale custom solutions for large organizations.",
        features: [
            "Everything in Pro",
            "Dedicated growth manager",
            "Custom reports",
            "Fully customized AI solutions",
        ],
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-zinc-50/50">
            <div className="max-w-7xl mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-4">
                            Simple Pricing
                        </h2>
                        <p className="text-muted text-lg max-w-2xl mx-auto">
                            Choose the specific plan that fits your business needs
                        </p>
                    </div>
                </FadeIn>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {tiers.map((tier, index) => (
                        <FadeIn key={tier.name} delay={index * 0.1} className="h-full">
                            <div
                                className={`relative p-8 rounded-2xl bg-white border transition-all duration-300 hover:shadow-xl h-full flex flex-col ${tier.popular
                                        ? "border-accent shadow-lg scale-105 z-10"
                                        : "border-border hover:border-accent/30"
                                    }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="font-heading text-xl font-medium text-foreground mb-2">{tier.name}</h3>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                                        <span className="text-muted">{tier.frequency}</span>
                                    </div>
                                    <p className="text-muted text-sm">{tier.description}</p>
                                </div>

                                <ul className="space-y-4 mb-8 flex-grow">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
                                            <Check className="w-5 h-5 text-accent shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-3 rounded-xl font-medium transition-all ${tier.popular
                                            ? "bg-accent text-white hover:bg-accent-hover shadow-md hover:shadow-lg"
                                            : "bg-white border-2 border-border text-foreground hover:border-accent hover:text-accent"
                                        }`}
                                >
                                    Get Started
                                </button>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
