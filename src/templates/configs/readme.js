export const readmeMd = () => `<div align="center">

<img src="public/logo.png" alt="Isotope Logo" width="200">

# Isotope: Atomic Fusion

[![npm version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://www.npmjs.com/package/create-isotope-app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/atoms-gaming/isotope)
[![PHP Version](https://img.shields.io/badge/PHP-%3E%3D8.0-777bb4.svg)](https://www.php.net/)

**Isotope** is a unified PHP & React hybrid framework designed by **ATOMS GAMING**.  
It transforms the constraints of shared hosting into a modern development field.

</div>

---

## ⚛️ Getting Started

### 1. Start Development

\`\`\`bash
npm run dev
\`\`\`

This starts the **Proton (PHP Nucleus)** on port 8000 and the **Electron (Vite)** on port 5173.

### 2. File Structure

- \`app/\`: Contains your Atomic Components (\`.isx\`).
- \`core/\`: Framework kernel.
- \`src/\`: Frontend entry points.

## 🛠 Atomic Fusion (.isx)

Write PHP and React in a single file!

\`\`\`tsx
import { proton } from '../../src/isotope';

export const nucleus = proton\\\`
// SERVER SIDE LOGIC
return ['message' => 'Hello from Quantum SSR'];
\\\`;

// "use client"; // Add this for Client Components (CSR)

export default function Page({ message }) {
    return <h1>{message}</h1>;
}
\`\`\`

### ⚛️ Quantum Fusion (SSR/CSR)
- **Server Components (Default)**: Rendered by PHP. Zero JS overhead.
- **Client Components**: Interactive UI using React hydration.

---

<div align="center">
Produced by <strong>ATOMS GAMING</strong>
</div>
`;
