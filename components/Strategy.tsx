import React from "react";
import { ArrowRight, Twitter, Facebook, Image as ImageIcon, FileVideo, Phone } from "lucide-react";

export default function Strategy() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="flex items-center gap-6 mb-12">
                    <div className="h-[1px] bg-gray-200 flex-1" />
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
                        Strategy & Content Creation
                    </h2>
                    <div className="h-[1px] bg-gray-200 flex-1" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {/* Card 1: AI Consulting */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300">
                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-foreground">AI Consulting & Strategies</h3>
                            <p className="text-muted-foreground text-sm mt-2">
                                We design custom AI strategies that drive growth.
                            </p>
                        </div>

                        {/* CSS Chart Graphic */}
                        <div className="flex-1 min-h-[180px] bg-gray-50 rounded-2xl p-6 flex items-end justify-center gap-4 relative overflow-hidden">
                            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gray-200" />
                            <div className="absolute inset-y-0 left-0 w-[1px] bg-gray-200" />

                            {/* Bar 1 */}
                            <div className="w-12 md:w-16 bg-purple-300/80 rounded-t-lg h-[50%] relative group">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">Cost</div>
                            </div>
                            {/* Bar 2 */}
                            <div className="w-12 md:w-16 bg-purple-400/90 rounded-t-lg h-[75%] relative group">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">Efficiency</div>
                            </div>
                            {/* Bar 3 */}
                            <div className="w-12 md:w-16 bg-purple-600 rounded-t-lg h-[90%] relative group">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">Growth</div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Content Creation */}
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300">
                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-foreground">Social Media Content Creation</h3>
                            <p className="text-muted-foreground text-sm mt-2">
                                Leverage AI to create engaging, personalized content.
                            </p>
                        </div>

                        {/* CSS Folder Stack Graphic */}
                        <div className="flex-1 min-h-[180px] bg-gray-50 rounded-2xl p-6 flex items-center justify-center relative overflow-hidden">
                            {/* Decorative background elements to simulate depth */}
                            <div className="absolute w-32 h-32 bg-purple-100 rounded-xl rotate-[-12deg] opacity-60 scale-90" />
                            <div className="absolute w-32 h-32 bg-purple-200 rounded-xl rotate-[-6deg] opacity-80 scale-95" />

                            {/* Main 'Folder' */}
                            <div className="relative w-32 h-32 bg-white rounded-xl shadow-lg border border-gray-100 rotate-3 p-4 flex items-center justify-center transform transition-transform duration-300 hover:rotate-0 hover:scale-105 z-10">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                                        <Twitter size={16} />
                                    </div>
                                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-500">
                                        <Facebook size={16} />
                                    </div>
                                    <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center text-pink-500">
                                        <ImageIcon size={16} />
                                    </div>
                                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500">
                                        <FileVideo size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="group flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:opacity-90 transition-all shadow-lg shadow-purple-500/20 active:scale-95">
                        <Phone size={18} className="group-hover:rotate-12 transition-transform" />
                        Book A Free Call Now
                    </button>

                    <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#1a0b2e] text-white font-medium hover:bg-[#2a1b3e] transition-colors shadow-md active:scale-95">
                        Contact Sales Now
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}
