import React from 'react';

const GlassCardFade = ({
    children,
    className = "",
    padding = "",
    fadePoint = "80%"
}) => {
    return (
        <div className={`relative w-full h-fit ${className}`}>
            <div
                className="absolute inset-0 overflow-hidden border border-white/40 shadow-2xl bg-neutral-50"
                style={{
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
                }}
            >

                <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <div className="absolute -top-10 -left-10 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-pulse"></div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-40"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-200 rounded-full mix-blend-multiply filter blur-[60px] opacity-40"></div>
                    <div className="absolute top-10 right-0 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-amber-200 rounded-full mix-blend-multiply filter blur-[0px] opacity-40"></div>
                    <div className="absolute -bottom-30 left-10 w-90 h-90 bg-orange-500 rounded-full mix-blend-multiply filter blur-[70px] opacity-40"></div>
                </div>

                <div className="absolute inset-0 w-full h-full bg-white/30 backdrop-blur-xl z-0"></div>

            </div>
            <div className={`relative z-10 ${padding}`}>
                {children}
            </div>

        </div>
    );
};

export default GlassCardFade;