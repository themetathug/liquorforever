'use client';

import Link from 'next/link';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex flex-col items-center magnetic spotlight ${className}`}>
      <div className="text-center">
        {/* Ornate LF Logo - Elegant Vintage Style */}
        <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-1" style={{ fontFamily: "'Pacifico', cursive", letterSpacing: '-0.05em' }}>
          LF
        </div>
        <div className="text-lg md:text-xl font-bold text-yellow-400 tracking-[0.15em] uppercase" style={{ fontFamily: "'Pacifico', cursive" }}>
          LIQUOR
        </div>
        <div className="text-lg md:text-xl font-bold text-yellow-400 tracking-[0.15em] uppercase" style={{ fontFamily: "'Pacifico', cursive" }}>
          FOREVER
        </div>
        <div className="text-[9px] text-gray-400 uppercase tracking-[0.35em] mt-0.5" style={{ fontFamily: "'Cinzel', Georgia, serif" }}>
          LIQUOR STORE
        </div>
      </div>
    </Link>
  );
}
