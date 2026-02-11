export const homePageIsx = (styleChoice) => {
  if (styleChoice === "tailwind") {
    return `// ISOTOPE_DIRECTIVE
import { proton } from '../../src/isotope';

export const nucleus = proton\`
// SERVER SIDE LOGIC
return [
    'nucleus' => 'ISOTOPE',
    'isotopes' => ['PHP', 'React', 'Vite', 'Tailwind'],
    'desc' => 'The Next-Gen Hybrid Framework'
];
\`;

"use client";

interface PageProps {
    nucleus: string;
    isotopes: string[];
    desc: string;
}

export default function Page({ nucleus, isotopes, desc }: PageProps) {
    return (
        <div className="flex-1 flex flex-col items-center bg-[radial-gradient(circle,_#1a1a2e_0%,_#0a0a0c_100%)] text-white font-sans text-center px-4 pt-32 pb-20 overflow-x-hidden">
            <div className="mb-16 relative mx-auto w-fit flex justify-center">
                <div className="absolute inset-0 bg-[#00d4ff] rounded-full blur-[120px] opacity-25 scale-150 animate-pulse"></div>
                <img src="/logo.png" className="w-64 h-auto relative z-10 drop-shadow-[0_0_50px_rgba(0,212,255,0.4)] animate-float object-contain" alt="Isotope Logo" />
            </div>
            
            <h1 className="text-[#00d4ff] text-[5.5rem] font-black m-0 leading-none tracking-[15px] drop-shadow-[0_0_40px_rgba(0,212,255,0.7)] uppercase pl-[15px]">
                {nucleus}
            </h1>
            <p className="text-gray-400 text-[1.4rem] mt-8 mb-16 font-medium tracking-[4px] uppercase opacity-80 max-w-3xl">
                {desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full mt-10">
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-[#00d4ff]/50 transition-all group">
                    <div className="text-[#00d4ff] mb-4 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.2-5.6-4.14-7.96s-9.44-2.62-11.48-.58c-2.04 2.03-.2 5.6 4.14 7.96s9.44 2.62 11.48.58z"/><path d="M15.8 4.7c-2.04-2.03-5.6-.2-7.96 4.14s-2.62 9.44-.58 11.48c2.03 2.04 5.6.2 7.96-4.14s2.62-9.44.58-11.48z"/></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">Atomic Logic</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Combine PHP server logic and React UI in a single .isx file with zero friction.</p>
                </div>
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-[#00d4ff]/50 transition-all group">
                    <div className="text-[#00d4ff] mb-4 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13.71-2.13l-1.58-1.58s-1.29 0-2.13.71Z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/><path d="M9 12H4s.5-1 1-4c2 0 3 0 3 0"/><path d="M12 15v5s1-.5 4-1c0-2 0-3 0-3"/></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">Quantum Engine</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Blazing fast Server-Side Rendering with seamless client-side hydration for instant loads.</p>
                </div>
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-[#00d4ff]/50 transition-all group">
                    <div className="text-[#00d4ff] mb-4 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">Proton Pattern</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Reactive data sync between PHP backend and React frontend effortlessly.</p>
                </div>
                <div className="p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-[#00d4ff]/50 transition-all group">
                    <div className="text-[#00d4ff] mb-4 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">Vite Powered</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">Modern development experience with HMR, Tailwind CSS, and lightning fast builds.</p>
                </div>
            </div>

            <div className="mt-20 flex gap-[15px] justify-center flex-wrap">
                {isotopes.map(iso => (
                    <span key={iso} className="px-5 py-[10px] border border-[#00d4ff] rounded-[30px] bg-[rgba(0,212,255,0.1)] text-[0.9rem]">
                        {iso}
                    </span>
                ))}
            </div>

            <div className="mt-20 p-6 bg-black/40 border border-[#00d4ff]/20 rounded-xl backdrop-blur-md inline-flex items-center gap-4 group hover:border-[#00d4ff]/40 transition-all">
                <span className="text-[#00d4ff] font-mono text-lg">$</span>
                <code className="text-gray-300 font-mono text-lg">npx isotope-app create my-app</code>
                <button className="ml-4 p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-500 hover:text-white" onClick={() => navigator.clipboard.writeText('npx isotope-app create my-app')} title="Copy to clipboard">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
`;
  } else if (styleChoice === "scss") {
    return `import { proton } from '../../src/isotope';

export const nucleus = proton\`
// SERVER SIDE LOGIC
return [
    'nucleus' => 'ISOTOPE',
    'isotopes' => ['PHP', 'React', 'Vite', 'SCSS'],
    'desc' => 'The Next-Gen Hybrid Framework'
];
\`;

"use client";

interface PageProps {
    nucleus: string;
    isotopes: string[];
    desc: string;
    _env?: { assetBase: string };
}

export default function Page({ nucleus, isotopes, desc, _env }: PageProps) {
    return (
        <div className="isotope-container">
            <div className="hero-section">
                <div className="glow"></div>
                <img src={(_env?.assetBase || "") + "/logo.png"} className="logo-main" alt="Isotope Logo" />
            </div>
            
            <h1>{nucleus}</h1>
            <p className="description">{desc}</p>

            <div className="feature-grid">
                <div className="feature-card">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.2-5.6-4.14-7.96s-9.44-2.62-11.48-.58c-2.04 2.03-.2 5.6 4.14 7.96s9.44 2.62 11.48.58z"/><path d="M15.8 4.7c-2.04-2.03-5.6-.2-7.96 4.14s-2.62 9.44-.58 11.48c2.03 2.04 5.6.2 7.96-4.14s2.62-9.44.58-11.48z"/></svg>
                    </div>
                    <h3>Atomic Logic</h3>
                    <p>Combine PHP server logic and React UI in a single .isx file with zero friction.</p>
                </div>
                <div className="feature-card">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13.71-2.13l-1.58-1.58s-1.29 0-2.13.71Z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z"/><path d="M9 12H4s.5-1 1-4c2 0 3 0 3 0"/><path d="M12 15v5s1-.5 4-1c0-2 0-3 0-3"/></svg>
                    </div>
                    <h3>Quantum Engine</h3>
                    <p>Blazing fast Server-Side Rendering with seamless client-side hydration for instant loads.</p>
                </div>
                <div className="feature-card">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></svg>
                    </div>
                    <h3>Proton Pattern</h3>
                    <p>Reactive data sync between PHP backend and React frontend effortlessly.</p>
                </div>
                <div className="feature-card">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                    </div>
                    <h3>Vite Powered</h3>
                    <p>Modern development experience with HMR, SCSS, and lightning fast builds.</p>
                </div>
            </div>

            <div className="badge-list">
                {isotopes.map(iso => (
                    <span key={iso} className="badge">{iso}</span>
                ))}
            </div>

            <div className="command-box">
                <span className="prompt">$</span>
                <code>npx isotope-app create my-app</code>
                <button className="copy-btn" onClick={() => navigator.clipboard.writeText('npx isotope-app create my-app')}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                </button>
            </div>
        </div>
    );
}
`;
  } else {
    return `import { proton } from '../../src/isotope';

export const nucleus = proton\`
// SERVER SIDE LOGIC
return [
    'nucleus' => 'ISOTOPE',
    'isotopes' => ['PHP', 'React', 'Vite'],
    'desc' => 'The Next-Gen Hybrid Framework'
];
\`;

"use client";

interface PageProps {
    nucleus: string;
    isotopes: string[];
    desc: string;
    _env?: { assetBase: string };
}

export default function Page({ nucleus, isotopes, desc, _env }: PageProps) {
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'radial-gradient(circle, #1a1a2e 0%, #0a0a0c 100%)', color: 'white', fontFamily: 'sans-serif' }}>
            <img src={(_env?.assetBase || "") + "/logo.png"} alt="Logo" style={{ width: '120px', marginBottom: '2rem', filter: 'drop-shadow(0 0 20px #00d4ff)' }} />
            <h1 style={{ color: '#00d4ff', fontSize: '3rem', fontWeight: 'bold', margin: '0' }}>{nucleus} ISOTOPE</h1>
            <p style={{ color: '#888', fontSize: '1.2rem', marginBottom: '2.5rem' }}>{desc}</p>
            <div style={{ display: 'flex', gap: '15px' }}>
                {isotopes.map(iso => (
                    <span key={iso} style={{ padding: '10px 20px', border: '1px solid #00d4ff', borderRadius: '30px', background: 'rgba(0,212,255,0.1)', fontSize: '0.9rem' }}>
                        {iso}
                    </span>
                ))}
            </div>

            <div style={{ marginTop: '3rem', padding: '1rem 1.5rem', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '12px', background: 'rgba(0,0,0,0.3)', display: 'inline-flex', alignItems: 'center', gap: '1rem' }}>
                <span style={{ color: '#00d4ff', fontFamily: 'monospace' }}>$</span>
                <code style={{ fontSize: '1rem', color: '#ccc', fontFamily: 'monospace' }}>npx isotope-app create my-app</code>
            </div>
        </div>
    );
}
`;
  }
};

export const aboutPageIsx = (styleChoice) => {
  const isotopesList =
    "['PHP', 'React', 'Vite'" +
    (styleChoice !== "none" ? `, '${styleChoice.toUpperCase()}'` : "") +
    "]";

  if (styleChoice === "tailwind") {
    return `"use client";
import { proton } from '../../src/isotope';

export const nucleus = proton\`
// SERVER SIDE LOGIC
return [
    'nucleus' => 'ABOUT',
    'isotopes' => ${isotopesList},
    'desc' => 'Next-gen Hybrid Infrastructure'
];
\`;

interface PageProps {
    nucleus: string;
    isotopes: string[];
    desc: string;
}

export default function Page({ nucleus, isotopes, desc }: PageProps) {
  return (
    <div className="flex-1 flex flex-col items-center bg-[radial-gradient(circle,_#1a1a2e_0%,_#0a0a0c_100%)] text-white font-sans text-center px-4 pt-32 pb-20 overflow-x-hidden">
      <div className="mb-16 relative mx-auto w-fit flex justify-center">
        <div className="absolute inset-0 bg-[#00d4ff] rounded-full blur-[120px] opacity-25 scale-150 animate-pulse"></div>
        <div className="w-32 h-32 bg-[#00d4ff]/10 rounded-3xl flex items-center justify-center border border-[#00d4ff]/20 animate-float relative z-10 transition-transform hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        </div>
      </div>

      <h1 className="text-[#00d4ff] text-[5.5rem] font-black m-0 leading-none tracking-[15px] drop-shadow-[0_0_40px_rgba(0,212,255,0.7)] uppercase pl-[15px]">
        {nucleus}
      </h1>
      <p className="text-gray-400 text-[1.4rem] mt-8 mb-16 font-medium tracking-[4px] uppercase opacity-80 max-w-3xl">
        {desc}
      </p>

      <div className="max-w-4xl w-full p-10 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl text-left leading-relaxed">
        <h2 className="text-2xl font-bold mb-6 text-[#00d4ff] uppercase tracking-widest flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Protocol Intelligence
        </h2>
        <p className="text-gray-400 mb-6 text-lg">
          Isotope represents the next evolution in hybrid infrastructure. By merging the reliability of PHP with the 
          reactive power of React, we've created a framework that transcends traditional boundaries.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-[#00d4ff]/30 transition-colors">
            <h4 className="font-bold text-white mb-2 uppercase tracking-tighter flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              Server Nucleus
            </h4>
            <p className="text-gray-500 text-sm">Secure, mature logic powered by PHP 8+ with direct database access.</p>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-[#00d4ff]/30 transition-colors">
            <h4 className="font-bold text-white mb-2 uppercase tracking-tighter flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              Client Electron
            </h4>
            <p className="text-gray-500 text-sm">Dynamic, fluid interfaces powered by React and Vite with HMR.</p>
          </div>
        </div>
      </div>

      <div className="mt-20 flex gap-[15px] justify-center flex-wrap">
        {isotopes.map((iso) => (
          <span
            key={iso}
            className="px-5 py-[10px] border border-[#00d4ff] rounded-[30px] bg-[rgba(0,212,255,0.1)] text-[0.9rem]"
          >
            {iso}
          </span>
        ))}
      </div>
    </div>
  );
}
`;
  } else if (styleChoice === "scss") {
    return `import { proton } from '../../src/isotope';

export const nucleus = proton\`
// SERVER SIDE LOGIC
return [
    'nucleus' => 'ABOUT',
    'isotopes' => ${isotopesList},
    'desc' => 'Next-gen Hybrid Infrastructure'
];
\`;

"use client";

interface PageProps {
    nucleus: string;
    isotopes: string[];
    desc: string;
    _env?: { assetBase: string };
}

export default function Page({ nucleus, isotopes, desc, _env }: PageProps) {
    return (
        <div className="about-page">
            <div className="about-hero">
                <div className="glow"></div>
                <div className="icon-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                </div>
            </div>
            
            <h1 className="about-title">{nucleus}</h1>
            <p className="about-subtitle">{desc}</p>

            <div className="about-content">
                <h2 className="about-section-title">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  Protocol Intelligence
                </h2>
                <p className="about-description">
                  Isotope represents the next evolution in hybrid infrastructure. By merging the reliability of PHP with the 
                  reactive power of React, we've created a framework that transcends traditional boundaries.
                </p>
                
                <div className="about-features">
                  <div className="about-feature-card">
                    <h4 className="about-feature-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                      Server Nucleus
                    </h4>
                    <p className="about-feature-text">Secure, mature logic powered by PHP 8+ with direct database access.</p>
                  </div>
                  <div className="about-feature-card">
                    <h4 className="about-feature-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                      Client Electron
                    </h4>
                    <p className="about-feature-text">Dynamic, fluid interfaces powered by React and Vite with HMR.</p>
                  </div>
                </div>
            </div>

            <div className="about-badges">
                {isotopes.map(iso => (
                    <span key={iso} className="about-badge">{iso}</span>
                ))}
            </div>
        </div>
    );
}
`;
  } else {
    return `import { proton } from '../../src/isotope';

export const nucleus = proton\`
// SERVER SIDE LOGIC
return [
    'nucleus' => 'ABOUT',
    'isotopes' => ${isotopesList},
    'desc' => 'Next-gen Hybrid Infrastructure'
];
\`;

"use client";

interface PageProps {
    nucleus: string;
    isotopes: string[];
    desc: string;
    _env?: { assetBase: string };
}

export default function Page({ nucleus, isotopes, desc, _env }: PageProps) {
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'radial-gradient(circle, #1a1a2e 0%, #0a0a0c 100%)', color: 'white', fontFamily: 'sans-serif' }}>
            <h1 style={{ color: '#00d4ff', fontSize: '3rem', fontWeight: 'bold' }}>{nucleus} ISOTOPE</h1>
            <p style={{ color: '#888', fontSize: '1.2rem' }}>{desc}</p>
            <div style={{ display: 'flex', gap: '15px' }}>
                {isotopes.map(iso => (
                    <span key={iso} style={{ padding: '10px 20px', border: '1px solid #00d4ff', borderRadius: '30px', background: 'rgba(0,212,255,0.1)', fontSize: '0.9rem' }}>
                        {iso}
                    </span>
                ))}
            </div>
        </div>
    );
}
`;
  }
};
