"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Sparkles } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Contact() {
    return (
        <section className="relative min-h-screen px-6 py-12 pt-24 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-white">
            {/* Cloud/Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-purple-200/40 rounded-full blur-3xl" />
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-pink-200/40 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="max-w-6xl mx-auto bg-white/40 backdrop-blur-xl rounded-[3rem] shadow-2xl border border-white/50 p-8 md:p-12 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                            {/* Left Column: Info */}
                            <div className="flex flex-col justify-center">
                                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8">
                                    Apply for Partnership
                                </h2>

                                <ul className="space-y-6 mb-12">
                                    <li className="flex items-start gap-3">
                                        <Sparkles className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                                        <p className="text-lg text-muted">
                                            <span className="font-semibold text-foreground">Zero Financial Risk:</span> We invest our time and resources. We only get paid when you profit.
                                        </p>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Sparkles className="w-6 h-6 text-purple-600 shrink-0 mt-1" />
                                        <p className="text-lg text-muted">
                                            <span className="font-semibold text-foreground">Selective Enrollment:</span> Because we work deeply with each partner, we only accept 3 new creators per quarter.
                                        </p>
                                    </li>
                                </ul>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-purple-50/80 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
                                        <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-semibold text-xl mb-1">Partnership Inquiries</h3>
                                            <p className="text-sm text-muted mb-2">Have questions about the profit-share model?</p>
                                            <a href="mailto:landeros@email.com" className="text-sm font-medium text-purple-600 hover:text-purple-700 underline underline-offset-4">
                                                info@prima-studio-agency.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="bg-purple-50/80 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300">
                                        <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-semibold text-xl mb-1">Strategy Desk</h3>
                                            <p className="text-sm text-muted mb-2">Urgent operational questions.</p>
                                            <a href="tel:+1234567890" className="text-sm font-medium text-purple-600 hover:text-purple-700 underline underline-offset-4">
                                                +393281736685
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Form */}
                            <div className="bg-white/50 rounded-3xl p-6 md:p-8 border border-white/60 shadow-sm">
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-muted ml-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="Jane Smith"
                                            className="w-full px-4 py-3 rounded-xl bg-white border-0 shadow-sm focus:ring-2 focus:ring-purple-600/20 focus:outline-none transition-all placeholder:text-muted/40"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-muted ml-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="jane@framer.com"
                                            className="w-full px-4 py-3 rounded-xl bg-white border-0 shadow-sm focus:ring-2 focus:ring-purple-600/20 focus:outline-none transition-all placeholder:text-muted/40"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium text-muted ml-1">Subject of Interest</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            placeholder="Subject"
                                            className="w-full px-4 py-3 rounded-xl bg-white border-0 shadow-sm focus:ring-2 focus:ring-purple-600/20 focus:outline-none transition-all placeholder:text-muted/40"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-muted ml-1">Message</label>
                                        <textarea
                                            id="message"
                                            placeholder="message goes here..."
                                            className="w-full px-4 py-3 rounded-xl bg-white border-0 shadow-sm focus:ring-2 focus:ring-purple-600/20 focus:outline-none transition-all h-32 resize-none placeholder:text-muted/40"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
