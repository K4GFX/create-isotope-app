export const tailwindConfig = () =>
  `export default { content: ["./index.php", "./src/**/*.{js,ts,jsx,tsx,isx}", "./app/**/*.{js,ts,jsx,tsx,isx}"], theme: { extend: {} }, plugins: [], }`;

export const postcssConfig = () =>
  `export default { plugins: { tailwindcss: {}, autoprefixer: {}, }, }`;

export const tsConfig = (projectName) => ({
  compilerOptions: {
    target: "ESNext",
    lib: ["DOM", "DOM.Iterable", "ESNext"],
    module: "ESNext",
    skipLibCheck: true,
    moduleResolution: "node",
    allowImportingTsExtensions: true,
    resolveJsonModule: true,
    isolatedModules: true,
    noEmit: true,
    jsx: "react-jsx",
    strict: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    noFallthroughCasesInSwitch: true,
    baseUrl: ".",
    paths: {
      "@/*": ["./src/*"],
    },
  },
  include: ["src", "app"],
  references: [{ path: "./tsconfig.node.json" }],
});

export const tsConfigNode = () => ({
  compilerOptions: {
    composite: true,
    skipLibCheck: true,
    module: "ESNext",
    moduleResolution: "node",
    allowSyntheticDefaultImports: true,
  },
  include: ["vite.config.ts"],
});

export const viteConfig = (styleChoice) => `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import isotopeSplitter from './src/isotope-splitter';

export default defineConfig({
  plugins: [isotopeSplitter(), react({ include: /\\.(isx|tsx?|jsx?)$/ })],
  server: { cors: true, port: 5173, strictPort: true },
  optimizeDeps: {
    extensions: ['.isx'],
    esbuildOptions: {
      loader: {
        '.isx': 'tsx',
      },
    },
  },
  build: {
    outDir: 'public/dist',
    manifest: true,
    rollupOptions: {
      input: 'src/main.tsx',
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});
`;

export const mainTsx = (styleChoice) => `import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from '../app/layouts/layout.isx';

const rootElement = document.getElementById('isotope-nucleus');
if (rootElement) {
    const protonData = JSON.parse(rootElement.getAttribute('data-proton') || '{}');
    const electronPath = rootElement.getAttribute('data-electron') || '';
    
    // Client-side hydration logic
    const pages = import.meta.glob('../app/**/page.isx');
    
    const render = async () => {
        const pageKey = electronPath.startsWith('/') ? electronPath : '/' + electronPath;
        const matchedKey = Object.keys(pages).find(key => key.includes(electronPath));
        
        if (matchedKey) {
            const mod = await pages[matchedKey]() as any;
            const Page = mod.default;
            
            ReactDOM.createRoot(rootElement).render(
                <React.StrictMode>
                    <Layout>
                        <Page {...protonData} />
                    </Layout>
                </React.StrictMode>
            );
        }
    };
    
    render();
}
`;
