import React, { ReactNode } from 'react';

interface CubeProps {
    children?: ReactNode;
    className?: string;
}

export default function Cube({ children, className = "" }: CubeProps) {
    return (
        <div className={`relative w-full h-full preserve-3d ${className}`}>
            {/* Inner Container for Isometric Rotation */}
            <div
                className="relative w-full h-full preserve-3d"
                style={{ transform: "rotateX(-25deg) rotateY(-35deg)" }}
            >
                {/* Front Face (Lighter Purple) */}
                <div
                    className="absolute inset-0 bg-purple-100 border border-purple-200/50 flex items-center justify-center backface-hidden"
                    style={{ transform: "rotateY(0deg) translateZ(calc(var(--cube-size) / 2))" }}
                >
                    {children}
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 bg-purple-300 border border-purple-400/30 backface-hidden"
                    style={{ transform: "rotateY(180deg) translateZ(calc(var(--cube-size) / 2))" }}
                />

                {/* Right Face (Medium Purple) */}
                <div
                    className="absolute inset-0 bg-purple-200 border border-purple-300/40 backface-hidden"
                    style={{ transform: "rotateY(90deg) translateZ(calc(var(--cube-size) / 2))" }}
                />

                {/* Left Face */}
                <div
                    className="absolute inset-0 bg-purple-100 border border-purple-200/50 backface-hidden"
                    style={{ transform: "rotateY(-90deg) translateZ(calc(var(--cube-size) / 2))" }}
                />

                {/* Top Face (Lightest/White) */}
                <div
                    className="absolute inset-0 bg-purple-50 border border-purple-200/50 backface-hidden"
                    style={{ transform: "rotateX(90deg) translateZ(calc(var(--cube-size) / 2))" }}
                />

                {/* Bottom Face */}
                <div
                    className="absolute inset-0 bg-purple-200 border border-purple-300/40 backface-hidden"
                    style={{ transform: "rotateX(-90deg) translateZ(calc(var(--cube-size) / 2))" }}
                />
            </div>
        </div>
    );
}
