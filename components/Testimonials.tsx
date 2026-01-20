import { Heart, Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

const reviews = [
    {
        name: "Emily Johnson",
        company: "Johnson Marketing",
        text: "We've seen measurable growth in our operational efficiency since implementing this system. The AI integration is seamless.",
        avatar: "https://i.pravatar.cc/150?u=1",
        icon: Facebook,
    },
    {
        name: "Sophia Martin",
        company: "Martin Agency",
        text: "Finally, AI services designed with users in mind. The deployment process was incredibly smooth and the support is top-notch.",
        avatar: "https://i.pravatar.cc/150?u=2",
        icon: Twitter,
    },
    {
        name: "David Chen",
        company: "TechFlow Solutions",
        text: "The workflow assessment revealed bottlenecks we didn't even know existed. Highly recommend for any growing team.",
        avatar: "https://i.pravatar.cc/150?u=3",
        icon: Instagram,
    },
    {
        name: "Michael Ross",
        company: "Ross & Co",
        text: "Our team saved over 20 hours per week using these automated workflows. The ROI has been immediate and significant.",
        avatar: "https://i.pravatar.cc/150?u=4",
        icon: Facebook,
    },
    {
        name: "Sarah Williams",
        company: "Creative Pulse",
        text: "The best investment we've made this year. The customer support team is responsive and the platform is rock solid.",
        avatar: "https://i.pravatar.cc/150?u=5",
        icon: Twitter,
    },
];

export default function Testimonials() {
    return (
        <section id="reviews" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-16 text-center">
                <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-medium tracking-wider text-pink-600 uppercase bg-pink-50 rounded-full">
                    <Heart className="w-3 h-3 fill-current" />
                    CUSTOMERS
                </span>
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
                    Our customers love us
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Real feedback from teams that have transformed their workflows with our
                    solutions.
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
                {/* Fade Masks */}
                <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <div className="flex w-max animate-scroll">
                    {/* Double the list for infinite loop */}
                    {[...reviews, ...reviews].map((review, index) => (
                        <div
                            key={index}
                            className="w-[400px] mx-4 p-8 bg-purple-50/50 rounded-2xl border border-purple-100/50"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-200">
                                        <Image
                                            src={review.avatar}
                                            alt={review.name}
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                                        <p className="text-sm text-gray-500">{review.company}</p>
                                    </div>
                                </div>
                                <div className="text-purple-400">
                                    <review.icon className="w-5 h-5" />
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                &quot;{review.text}&quot;
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Stats */}
            <div className="mt-16 text-center">
                <div className="flex items-center justify-center -space-x-3 mb-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                        >
                            <Image
                                src={`https://i.pravatar.cc/150?u=${i + 10}`}
                                alt={`User ${i}`}
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
                <p className="text-sm font-medium text-gray-600">
                    Over <span className="text-gray-900 font-bold">15,725+</span> people
                    gave us review
                </p>
            </div>
        </section>
    );
}
