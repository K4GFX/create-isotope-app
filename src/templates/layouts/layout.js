export const layoutIsx = (styleChoice) => {
  if (styleChoice === "scss") {
    return `import { proton } from '../../src/isotope';

export const layoutData = proton\`
return [];
\`;

"use client";
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="isotope-layout">
            <header>
                <nav>
                    <a href="/" className="logo-link">
                        <div className="logo-box">
                            <img src="/logo.png" alt="Logo" />
                        </div>
                        <span className="logo-text">ISOTOPE</span>
                    </a>
                    <div className="nav-links">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                    </div>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                &copy; 2026 Isotope Framework
            </footer>
        </div>
    );
}
`;
  } else {
    // Default or Tailwind
    return `import { proton } from '../../src/isotope';

export const layoutData = proton\`
return [];
\`;

"use client";
import * as React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="isotope-layout">
            <header className="p-4 border-b border-gray-800 bg-black/50 backdrop-blur-md sticky top-0 z-50">
                <nav className="max-w-7xl mx-auto flex gap-6 items-center">
                    <a href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-[#00d4ff]/10 rounded-xl flex items-center justify-center border border-[#00d4ff]/20 group-hover:border-[#00d4ff]/50 transition-colors">
                            <img src="/logo.png" className="w-7 h-7 transition-transform group-hover:rotate-12" alt="Logo" />
                        </div>
                        <span className="font-bold text-white tracking-widest text-xl group-hover:text-[#00d4ff] transition-colors">ISOTOPE</span>
                    </a>
                    <div className="flex gap-6 ml-6">
                        <a href="/" className="text-gray-400 hover:text-[#00d4ff] transition-colors font-semibold uppercase text-sm tracking-widest">Home</a>
                        <a href="/about" className="text-gray-400 hover:text-[#00d4ff] transition-colors font-semibold uppercase text-sm tracking-widest">About</a>
                    </div>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer className="p-4 text-center text-gray-600 text-sm mt-8">
                &copy; 2026 Isotope Framework
            </footer>
        </div>
    );
}
`;
  }
};
