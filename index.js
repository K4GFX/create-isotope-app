#!/usr/bin/env node

import fse from "fs-extra";
import path from "path";
import chalk from "chalk";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import readline from "readline";

// ESM 互換
const fs = fse.default || fse;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// テンプレートのインポート
import { kernelPhp } from "./src/templates/core/kernel.js";
import { nucleusPhp } from "./src/templates/core/nucleus.js";
import { bridgePhp, optimizerPhp } from "./src/templates/core/utils.js";
import { homePageIsx, aboutPageIsx } from "./src/templates/pages/pages.js";
import { linkTsx } from "./src/templates/pages/components.js";
import { layoutIsx } from "./src/templates/layouts/layout.js";
import { tailwindStyles, scssStyles } from "./src/templates/styles/styles.js";
import {
  tailwindConfig,
  postcssConfig,
  tsConfig,
  tsConfigNode,
  viteConfig,
  mainTsx,
} from "./src/templates/configs/configs.js";
import { splitterTs } from "./src/templates/configs/splitter.js";
import { readmeMd } from "./src/templates/configs/readme.js";
import {
  extensionPackageJson,
  extensionGrammarJson,
  extensionReadmeMd,
} from "./src/templates/configs/extension.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) =>
  new Promise((resolve) => rl.question(query, resolve));

async function init() {
  let projectName = process.argv[2];
  let projectIndex = 2;

  // 'create' サブコマンドの処理をより堅牢に
  if (projectName === "create") {
    projectName = process.argv[3];
    projectIndex = 3;
  }

  // プロジェクト名が未指定、またはオプションが先に来てしまった場合の対処
  if (!projectName || projectName.startsWith("-")) {
    projectName = "my-isotope-app";
  }

  // 絶対パスとして解決
  const root = path.resolve(process.cwd(), projectName);

  // 1. ポートの競合を解消
  console.log(chalk.cyan("🧹 Cleaning up ports 8000 and 5173..."));
  try {
    execSync('pkill -9 -f "vite" || true');
    execSync('pkill -9 -f "php -S localhost:8000" || true');
  } catch (e) {}

  const args = process.argv.slice(projectIndex + 1);
  let styleChoice = args
    .find((arg) => arg.startsWith("--style="))
    ?.split("=")[1];

  console.log(
    chalk.blueBright(
      `\n⚛️  Isotope: Stabilizing new atomic structure at ${chalk.bold(root)}...\n`,
    ),
  );

  if (!styleChoice) {
    styleChoice = await question(
      "Which CSS framework? (tailwind / scss / none): ",
    );
  }
  rl.close();

  console.log(chalk.yellow(`\n📂 Creating project directories...`));

  // 2. ディレクトリ構造の作成
  const dirs = [
    "app/home",
    "app/about",
    "app/layouts",
    "core",
    "public/dist",
    "src",
    "src/styles",
    "src/components",
    "docs/framework",
    ".vscode",
    ".vscode/extensions/isotope-support-v0.1/syntaxes",
  ];
  dirs.forEach((dir) => {
    fs.ensureDirSync(path.join(root, dir));
  });

  console.log(chalk.yellow(`\n📝 Generating templates...`));

  // 3. テンプレートの生成
  const pkgDeps = {
    react: "^18.2.0",
    "react-dom": "^18.2.0",
  };

  const pkgDevDeps = {
    "@vitejs/plugin-react": "^4.0.0",
    vite: "^4.3.0",
    typescript: "^5.0.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@types/node": "^20.0.0",
    concurrently: "^8.2.0",
  };

  if (styleChoice === "tailwind") {
    Object.assign(pkgDevDeps, {
      tailwindcss: "^3.3.0",
      autoprefixer: "^10.4.0",
      postcss: "^8.4.0",
    });
    fs.writeFileSync(path.join(root, "tailwind.config.js"), tailwindConfig());
    fs.writeFileSync(path.join(root, "postcss.config.js"), postcssConfig());
    fs.writeFileSync(
      path.join(root, "src/styles/globals.css"),
      tailwindStyles(),
    );
  } else if (styleChoice === "scss") {
    pkgDevDeps["sass"] = "^1.62.0";
    fs.writeFileSync(path.join(root, "src/styles/globals.scss"), scssStyles());
  }

  // コアファイル
  fs.writeFileSync(path.join(root, "core/Kernel.php"), kernelPhp(styleChoice));
  fs.writeFileSync(path.join(root, "core/nucleus.php"), nucleusPhp());
  fs.writeFileSync(path.join(root, "core/Bridge.php"), bridgePhp());
  fs.writeFileSync(path.join(root, "core/optimizer.php"), optimizerPhp());
  fs.writeFileSync(
    path.join(root, "index.php"),
    `<?php require_once 'core/Kernel.php'; Isotope\\Kernel::boot();`,
  );

  // 設定・ビルドツール
  fs.writeFileSync(
    path.join(root, "src/isotope.ts"),
    `export function proton(strings: TemplateStringsArray, ...values: any[]): any { return null; }`,
  );
  fs.writeFileSync(path.join(root, "src/isotope-splitter.ts"), splitterTs());
  fs.writeFileSync(path.join(root, "src/main.tsx"), mainTsx(styleChoice));
  fs.writeFileSync(path.join(root, "vite.config.ts"), viteConfig(styleChoice));
  fs.writeFileSync(
    path.join(root, "tsconfig.json"),
    JSON.stringify(tsConfig(projectName), null, 2),
  );
  fs.writeFileSync(
    path.join(root, "tsconfig.node.json"),
    JSON.stringify(tsConfigNode(), null, 2),
  );
  fs.writeFileSync(path.join(root, "README.md"), readmeMd());

  // VS Code 設定 & 拡張機能
  fs.writeFileSync(
    path.join(root, ".vscode/settings.json"),
    JSON.stringify(
      { "files.associations": { "*.isx": "typescriptreact" } },
      null,
      2,
    ),
  );
  fs.writeFileSync(
    path.join(root, ".vscode/extensions/isotope-support-v0.1/package.json"),
    extensionPackageJson(),
  );
  fs.writeFileSync(
    path.join(
      root,
      ".vscode/extensions/isotope-support-v0.1/syntaxes/isx.tmLanguage.json",
    ),
    extensionGrammarJson(),
  );
  fs.writeFileSync(
    path.join(root, ".vscode/extensions/isotope-support-v0.1/README.md"),
    extensionReadmeMd(),
  );

  // コンポーネント・ページ
  fs.writeFileSync(path.join(root, "src/components/Link.tsx"), linkTsx());
  fs.writeFileSync(
    path.join(root, "app/layouts/layout.isx"),
    layoutIsx(styleChoice),
  );
  fs.writeFileSync(
    path.join(root, "app/home/page.isx"),
    homePageIsx(styleChoice),
  );
  fs.writeFileSync(
    path.join(root, "app/about/page.isx"),
    aboutPageIsx(styleChoice),
  );

  // ロゴ & 拡張機能アイコン
  const logoSrc = path.join(__dirname, "templates", "logo.png");
  if (fs.existsSync(logoSrc)) {
    fs.copySync(logoSrc, path.join(root, "public/logo.png"));
    fs.copySync(
      logoSrc,
      path.join(root, ".vscode/extensions/isotope-support-v0.1/icon.png"),
    );
  }

  // 4. package.json & インストール
  const pkg = {
    name: projectName,
    version: "1.0.0",
    type: "module",
    scripts: {
      dev: 'concurrently "vite" "php -S localhost:8000 index.php"',
      build: "vite build",
      preview: "vite preview",
    },
    dependencies: pkgDeps,
    devDependencies: pkgDevDeps,
  };
  fs.writeFileSync(
    path.join(root, "package.json"),
    JSON.stringify(pkg, null, 2),
  );

  console.log(chalk.yellow(`\n📦 Installing dependencies...`));
  try {
    execSync(`npm install`, { cwd: root, stdio: "inherit" });
    console.log(chalk.green(`\n🚀 Ready! cd ${projectName} && npm run dev`));

    console.log(chalk.cyan(`\n💡 VS Code Integration:`));
    console.log(
      chalk.white(
        `  (JP) シンタックスハイライトを有効にするには、以下のコマンドでフォルダを開いてください:`,
      ),
    );
    console.log(
      chalk.white(
        `  (EN) To enable syntax highlighting, please open the folder directly in VS Code:`,
      ),
    );
    console.log(chalk.blueBright(`  > cd ${projectName} && code .\n`));
  } catch (err) {
    console.log(chalk.red(`\n❌ Install failed.`));
  }
}

init();
