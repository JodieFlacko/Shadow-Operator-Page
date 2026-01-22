"use client";


import { motion } from "framer-motion";
import { Settings, Sparkles, PieChart, Code } from "lucide-react";
import Cube from "./3d/Cube";
import FadeIn from "./FadeIn";

export default function Hero() {


    return (
        <section
            className="relative px-6 py-12 pt-32 md:p-20 md:pt-40 pb-24 overflow-hidden bg-gradient-to-b from-purple-50 to-white"
        >
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,var(--color-accent)_0%,transparent_50%)] opacity-10 blur-3xl -z-10" />

            <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center relative z-10">
                <FadeIn delay={0.1}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border/40 shadow-sm mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-600 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                        </span>
                        <span className="text-xs font-medium text-muted uppercase tracking-wider">Stop Leaving Money on the Table</span>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <h1 className="font-heading text-4xl md:text-7xl font-medium leading-[1.1] tracking-tight text-foreground mb-6">
                        Turn Your Audience Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">Qualified Buyers</span> Without Being Pushy
                    </h1>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <p className="text-muted text-lg md:text-xl max-w-2xl leading-relaxed mb-10 mx-auto">
                        We install a private pipeline that converts your wellness followers into sales-ready clients in 90 days. No desperate tactics. No brand damage. Just predictable revenue.
                    </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-16">
                        <button className="h-12 px-8 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                            See How It Works
                        </button>
                    </div>
                </FadeIn>

                {/* Isometric Placeholder Grid */}
                <FadeIn delay={0.5}>
                    <div
                        className="relative mt-8 mx-auto -z-10 w-fit pointer-events-none select-none"
                        style={{ perspective: "1000px" }}
                    >
                        <div
                            className="grid grid-cols-2 gap-4 transition-transform duration-100 ease-out preserve-3d scale-75 md:scale-100"
                            id="cube-grid"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="w-24 h-24 sm:w-32 sm:h-32 [--cube-size:6rem] sm:[--cube-size:8rem] animate-float"
                                style={{ animationDelay: "0s" }}
                            >
                                <Cube>
                                    <Code className="w-10 h-10 text-purple-600 opacity-80" />
                                </Cube>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                                className="w-24 h-24 sm:w-32 sm:h-32 [--cube-size:6rem] sm:[--cube-size:8rem] animate-float"
                                style={{ animationDelay: "1.1s" }}
                            >
                                <Cube>
                                    <Sparkles className="w-10 h-10 text-purple-600 opacity-80" />
                                </Cube>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="w-24 h-24 sm:w-32 sm:h-32 [--cube-size:6rem] sm:[--cube-size:8rem] animate-float"
                                style={{ animationDelay: "2.4s" }}
                            >
                                <Cube>
                                    <Settings className="w-10 h-10 text-purple-600 opacity-80" />
                                </Cube>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9, duration: 0.8 }}
                                className="w-24 h-24 sm:w-32 sm:h-32 [--cube-size:6rem] sm:[--cube-size:8rem] animate-float"
                                style={{ animationDelay: "0.7s" }}
                            >
                                <Cube>
                                    <PieChart className="w-10 h-10 text-purple-600 opacity-80" />
                                </Cube>
                            </motion.div>
                        </div>
                        {/* Floating Orbs for extra depth */}
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-600/10 rounded-full blur-xl animate-pulse" />
                        <div className="absolute -bottom-5 -left-10 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
                    </div>
                </FadeIn>


            </div>
        </section>
    );
}
