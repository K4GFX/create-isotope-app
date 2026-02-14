<div align="center">

<img src="https://raw.githubusercontent.com/K4GFX/create-isotope-app/main/templates/logo.png" alt="Isotope Logo" width="200">

# Isotope Framework

[![npm version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://www.npmjs.com/package/create-isotope-app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/atoms-gaming/isotope)
[![PHP Version](https://img.shields.io/badge/PHP-%3E%3D8.0-777bb4.svg)](https://www.php.net/)

**Isotope** is a unified PHP & React hybrid framework designed by **ATOMS GAMING**.  
It transforms the constraints of shared hosting into a modern development field.

**Isotope** は、ATOMS GAMING が提供する PHP と React のハイブリッドフレームワークです。  
レンタルサーバーという制限を、モダンな開発フィールドへと変貌させます。

</div>

---

## ⚛️ Concept: Atomic Fusion

Isotope fuses server-side logic and client-side UI into a single atomic structure: **The ISX File (.isx)**.

- **Nucleus (PHP)**: The server-side core. Handles DB operations and initial data fetching.
- **Electron (React)**: The client-side shell. Handles interactive UI and state management.

### ⚛️ Quantum Fusion (SSR/CSR)

Next.js-like developer experience on standard PHP servers.

- **Server Components (Default)**: Rendered by PHP's Quantum Engine. Zero JS sent to browser.
- **Client Components**: Add `"use client";` to the top to enable React hydration and HMR.

---

- **Atomic Fusion (.isx)**: Write PHP and React in a single file.
- **Quantum SSR Engine**: PHP-only JSX rendering. No Node.js required!
- **Zero-API Fetching**: Data from PHP is directly available in React props.
- **Shared Hosting Optimized**: Runs perfectly on standard rental servers.

---

## 🚀 Quick Start / クイックスタート

### 1. Initialize / プロジェクト生成

```bash
npx create-isotope-app my-app
cd my-app
```

### 2. Start Development / 開発エンジンの起動

```bash
npm run dev
```

> [!TIP]
> `npm run dev` starts both `vite` and the PHP built-in server concurrently.

---

## 🛠 Usage / 使い方

### Unified Component (Atomic Fusion)

`app/dashboard/page.isx`

```tsx
import { proton } from "../../src/isotope";

export const nucleus = proton`
// SERVER SIDE LOGIC (Executed on Server)
return [
    'user' => 'Atoms_User',
    'status' => 'Stable'
];
`;

// "use client"; // Uncomment to make it a Client Component

/**
 * Renders on Server by default (Quantum Engine)
 */
export default function Page({ user, status }) {
  return (
    <main>
      <h1>User: {user}</h1>
      <p>Status: {status}</p>
    </main>
  );
}
```

---

## 🚢 Deployment / デプロイ

1. Run `npm run build`.
2. Upload `app/`, `core/`, `public/dist/`, `index.php`, `.htaccess` to your server.

---

<div align="center">
Produced by <strong>ATOMS GAMING</strong>
</div>
