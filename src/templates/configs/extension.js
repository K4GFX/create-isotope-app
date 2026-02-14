export const extensionPackageJson = () => {
  return JSON.stringify(
    {
      name: "isotope-support",
      displayName: "Isotope Support",
      description:
        "Premium syntax highlighting for Isotope (.isx) hybrid components.",
      version: "0.1.0",
      publisher: "ATOMS GAMING",
      icon: "icon.png",
      engines: {
        vscode: "^1.60.0",
      },
      categories: ["Programming Languages"],
      keywords: ["isotope", "php", "react", "tsx", "hybrid"],
      repository: {
        type: "git",
        url: "https://github.com/atoms-gaming/isotope",
      },
      contributes: {
        grammars: [
          {
            scopeName: "inline.php.proton",
            path: "./syntaxes/isx.tmLanguage.json",
            injectTo: ["source.ts.jsx", "source.tsx"],
          },
        ],
      },
    },
    null,
    2,
  );
};

export const extensionGrammarJson = () => {
  return JSON.stringify(
    {
      $schema:
        "https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json",
      scopeName: "inline.php.proton",
      injectionSelector:
        "L:source.ts.jsx -comment -string, L:source.tsx -comment -string",
      patterns: [
        {
          name: "meta.embedded.block.php",
          begin: "(proton)\\s*(`)",
          beginCaptures: {
            1: { name: "entity.name.function.tagged-template" },
            2: { name: "punctuation.definition.string.template.begin" },
          },
          end: "(`)",
          endCaptures: {
            1: { name: "punctuation.definition.string.template.end" },
          },
          patterns: [
            {
              include: "source.php",
            },
          ],
        },
      ],
    },
    null,
    2,
  );
};

export const extensionReadmeMd = () => {
  return `# Isotope Support for VS Code

Isotope framework (.isx) において、\`proton\` タグ内の PHP コードのシンタックスハイライトを提供します。

## 特長

- **Proton Highlighting**: \`proton\`\\\`...\`\\\` ブロック内を PHP として認識し、色を付けます。
- **Non-destructive**: 標準の TypeScript React (TSX) の文法に介入（Injection）するため、React 側のハイライトを壊いません。

## インストール（手動セットアップ）

このディレクトリを VS Code の拡張機能フォルダに配置してください。

\`\`\`bash
cp -r .vscode/extensions/isotope-support-v0.1 ~/.vscode/extensions/
\`\`\`

その後、VS Code を再起動（または \`Developer: Reload Window\`）すると有効になります。

## 制限事項

- **シンタックスハイライトのみ**: 現在のバージョンは色の表示のみをサポートしています。
- **Intellisense (Hover/F12)**: テンプレートリテラル内の PHP に対する「定義へ移動」や「ホバー説明」は、標準的な PHP Language Server の制限により機能しません。将来的なアップデートで仮想ドキュメント方式によるサポートを検討しています。

---

Produced by **ATOMS GAMING**
`;
};
