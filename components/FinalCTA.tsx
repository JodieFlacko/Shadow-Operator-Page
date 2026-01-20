import { Wallet, Users } from 'lucide-react';

export default function FinalCTA() {
    return (
        <section className="py-24 px-4">
            <div className="w-full max-w-5xl mx-auto rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-white shadow-xl">
                {/* Subtle radial overlay for cloud effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What you still waiting!!
                    </h2>
                    <p className="text-gray-600 max-w-2xl text-lg">
                        Ready to unlock the full potential of AI for your business? Let's build intelligent solutions that save time, cut costs, and accelerate growth.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-8 mb-8">
                        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium text-purple-900 border border-white/50">
                            <Wallet className="w-4 h-4" />
                            <span>100% safe payment</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium text-purple-900 border border-white/50">
                            <Users className="w-4 h-4" />
                            <span>10k+ people trust us</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-purple-700 hover:bg-purple-800 text-white rounded-full px-8 py-3 font-medium transition-all shadow-lg ring-4 ring-purple-100/50 hover:ring-purple-200">
                            Get Started for Free
                        </button>
                        <button className="bg-purple-800 hover:bg-purple-900 text-white rounded-full px-8 py-3 font-medium transition-colors shadow-lg">
                            Contact Sales Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
