import { Wallet, Users } from 'lucide-react';

export default function FinalCTA() {
    return (
        <section className="py-12 px-4 md:py-24">
            <div className="w-full max-w-5xl mx-auto rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-white shadow-xl">
                {/* Subtle radial overlay for cloud effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 to-transparent pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                        You Create Content. <br /> We Build the Empire.
                    </h2>
                    <p className="text-gray-600 max-w-2xl text-lg">
                        Stop leaving money on the table. We build the backend infrastructure, high-ticket offers, and monetization funnels your audience is begging for—so you can focus on being the face of the brand.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-2 mt-6 mb-6 w-full">
                        <div className="flex items-center justify-center gap-2 bg-white shadow-sm px-4 py-2.5 rounded-full text-sm font-medium text-purple-900 w-full max-w-[300px]">
                            <Wallet className="w-4 h-4" />
                            <span>100% Done-For-You</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 bg-white shadow-sm px-4 py-2.5 rounded-full text-sm font-medium text-purple-900 w-full max-w-[300px]">
                            <Users className="w-4 h-4" />
                            <span>Trusted by Top 1% Creators</span>
                        </div>
                    </div>

                    <div className="flex flex-row gap-3 justify-center w-full">
                        <button className="bg-purple-700 hover:bg-purple-800 text-white rounded-full px-6 py-3 text-sm font-medium transition-all shadow-lg ring-4 ring-purple-100/50 hover:ring-purple-200 whitespace-nowrap">
                            Get Your Audit
                        </button>
                        <button className="bg-purple-800 hover:bg-purple-900 text-white rounded-full px-6 py-3 text-sm font-medium transition-colors shadow-lg whitespace-nowrap">
                            How It Works
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
