"use client";

import { Check } from "lucide-react";
import FadeIn from "./FadeIn";

const tiers = [
    {
        name: "The Launchpad",
        price: "$0",
        frequency: " (Rev-Share)",
        description: "We identify your best product opportunity, build the offer, and launch it to your audience.",
        features: ["Audience Analysis", "Offer Creation", "Landing Page Build", "Launch Email Campaign"],
        popular: false,
    },
    {
        name: "Growth Partner",
        price: "$0",
        frequency: " (Rev-Share)",
        description: "We take over your backend operations, optimizing funnels and emails to maximize Revenue Per Follower.",
        features: [
            "Everything in Launchpad",
            "Funnel Optimization",
            "Upsell & Cross-sell Systems",
            "Community Management",
        ],
        popular: true,
    },
    {
        name: "The Empire",
        price: "$0",
        frequency: " (Rev-Share)",
        description: "We act as your fractional COO, building a full-scale business infrastructure intended for long-term scale or exit.",
        features: [
            "Full Operational Control",
            "Team Hiring & Management",
            "New Product Lines",
            "Brand Deal Negotiation",
            "Quarterly Board Strategy"
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
                        <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">
                            We Invest In You
                        </h2>
                        <p className="text-muted text-lg max-w-2xl mx-auto">
                            No monthly fees. No expensive retainers. We partner with select creators on a pure performance basis. We cover the operational costs; we share the upside.
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
                                    Apply for Launch
                                </button>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
