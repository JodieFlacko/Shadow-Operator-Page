import { Share2, Rocket, Headphones } from "lucide-react";

export default function Process() {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-200 blur-3xl opacity-30 rounded-full -z-10 pointer-events-none" />

            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-gray-900 uppercase bg-gray-100 rounded-full">
                        PROCESS
                    </span>
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
                        Process Is Performance
                    </h2>
                    <p className="text-lg text-gray-600">
                        Our streamlined approach ensures efficiency and quality at every step.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {/* Card 1 */}
                    <div className="group relative bg-white rounded-2xl border border-purple-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-purple-50 rounded-xl text-purple-600 group-hover:scale-110 transition-transform">
                                <Share2 className="w-6 h-6" />
                            </div>
                            <span className="flex items-center justify-center w-6 h-6 text-sm font-medium text-gray-500 bg-gray-100 rounded-full">
                                1
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Workflow Assessment
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We begin by examining your existing workflows to identify
                            bottlenecks and opportunities for automation.
                        </p>
                        <span className="inline-block px-3 py-1 text-xs font-medium text-purple-700 bg-purple-50 rounded-full">
                            Step 1
                        </span>
                    </div>

                    {/* Card 2 */}
                    <div className="group relative bg-white rounded-2xl border border-purple-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-purple-50 rounded-xl text-purple-600 group-hover:scale-110 transition-transform">
                                <Rocket className="w-6 h-6" />
                            </div>
                            <span className="flex items-center justify-center w-6 h-6 text-sm font-medium text-gray-500 bg-gray-100 rounded-full">
                                2
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Deploy with Confidence
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Our team develops custom AI systems tailored to your needs and
                            deploys them with zero downtime.
                        </p>
                        <span className="inline-block px-3 py-1 text-xs font-medium text-purple-700 bg-purple-50 rounded-full">
                            Step 2
                        </span>
                    </div>

                    {/* Card 3 */}
                    <div className="group relative bg-white rounded-2xl border border-purple-100 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-purple-50 rounded-xl text-purple-600 group-hover:scale-110 transition-transform">
                                <Headphones className="w-6 h-6" />
                            </div>
                            <span className="flex items-center justify-center w-6 h-6 text-sm font-medium text-gray-500 bg-gray-100 rounded-full">
                                3
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Ongoing Support
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            After deployment, we provide support and monitoring to ensure your
                            system continues to perform optimally.
                        </p>
                        <span className="inline-block px-3 py-1 text-xs font-medium text-purple-700 bg-purple-50 rounded-full">
                            Step 3
                        </span>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-12">
                    <div className="text-center md:border-r border-gray-100 last:border-0">
                        <div className="text-3xl font-bold text-gray-900 mb-1">10k+</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wide">
                            Happy users
                        </div>
                    </div>
                    <div className="text-center md:border-r border-gray-100 last:border-0">
                        <div className="text-3xl font-bold text-gray-900 mb-1">250k+</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wide">
                            Total hrs saved
                        </div>
                    </div>
                    <div className="text-center md:border-r border-gray-100 last:border-0">
                        <div className="text-3xl font-bold text-gray-900 mb-1">4.8</div>
                        <div className="text-sm text-gray-500 uppercase tracking-wide">
                            Average Rating
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
