"use client";

import { Layers, Check, X, ArrowRightLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function Comparison() {
    return (
        <section className="relative py-12 md:py-24 overflow-hidden">
            {/* Ambient Backgrounds */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/3 h-1/2 bg-purple-500/20 blur-[120px] -z-10" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 bg-pink-500/20 blur-[120px] -z-10" />

            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-sm font-medium mb-6"
                    >
                        <ArrowRightLeft className="w-4 h-4" />
                        <span>COMPARISON</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Why Choose Us
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground"
                    >
                        We help businesses harness the power of AI to work smarter, not harder.
                    </motion.p>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Lander OS Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-white/50 backdrop-blur-sm rounded-3xl p-5 md:p-10 border border-gray-100 hover:border-purple-200 transition-colors duration-300"
                    >
                        <div className="flex items-center gap-4 mb-2 md:mb-8">
                            <img
                                src="/logo.png"
                                alt="Prima Studio"
                                className="w-10 h-10 object-contain"
                            />
                            <h3 className="text-2xl font-bold">Prima Studio Media</h3>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "We build the commercial framework. You own the system",
                                "We built a predictable revenue engine",
                                "Sponsorships became bonus income",
                                "Runs behind the scenes",
                                "Expert support"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 min-h-[52px]">
                                    <div className="mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="font-medium text-gray-900 text-sm md:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Others Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-5 md:p-10 border border-gray-100"
                    >
                        <div className="flex items-center gap-4 mb-2 md:mb-8">
                            <Layers className="w-10 h-10 text-orange-600" />
                            <h3 className="text-2xl font-bold text-gray-900">Others</h3>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "It's not a model. It's a lottery ticket",
                                "Every month, you're starting from scratch",
                                "Chasing new deals",
                                "Hoping your engagement stays high enough to stay relevant",
                                "Negotiating rates"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 min-h-[52px]">
                                    <div className="mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center text-gray-400">
                                        <X className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-gray-500 text-sm md:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
