export const extensionPackageJson = () =>
  "{" +
  '  "name": "isotope-support",' +
  '  "displayName": "Isotope Support",' +
  '  "description": "Syntax highlighting for Isotope (.isx) files",' +
  '  "version": "0.1.0",' +
  '  "publisher": "atoms-gaming",' +
  '  "icon": "icon.png",' +
  '  "engines": {' +
  '    "vscode": "^1.75.0"' +
  "  }," +
  '  "categories": [' +
  '    "Programming Languages"' +
  "  ]," +
  '  "contributes": {' +
  '    "languages": [{' +
  '      "id": "isx",' +
  '      "aliases": ["Isotope", "isx"],' +
  '      "extensions": [".isx"],' +
  '      "configuration": "./language-configuration.json"' +
  "    }]," +
  '    "grammars": [{' +
  '      "language": "isx",' +
  '      "scopeName": "source.isx",' +
  '      "path": "./syntaxes/isx.tmLanguage.json"' +
  "    }]" +
  "  }" +
  "}";

export const extensionGrammarJson = () =>
  "{" +
  '  "scopeName": "source.isx",' +
  '  "name": "Isotope",' +
  '  "patterns": [' +
  "    {" +
  '      "begin": "(proton)(\\\\`)",' +
  '      "beginCaptures": {' +
  '        "1": { "name": "entity.name.function.isx" },' +
  '        "2": { "name": "punctuation.definition.string.begin.isx" }' +
  "      }," +
  '      "end": "(\\\\`)",' +
  '      "endCaptures": {' +
  '        "1": { "name": "punctuation.definition.string.end.isx" }' +
  "      }," +
  '      "contentName": "source.php",' +
  '      "patterns": [' +
  '        { "include": "source.php" }' +
  "      ]" +
  "    }," +
  '    { "include": "source.ts" },' +
  '    { "include": "source.tsx" }' +
  "  ]" +
  "}";

export const extensionReadmeMd = () =>
  "# Isotope Support for VS Code\\n\\n" +
  "Isotope framework (.isx) において、`proton` タグ内の PHP コードのシンタックスハイライトを提供します。\\n\\n" +
  "## 特長\\n\\n" +
  "- **Proton Highlighting**: `proton`\\\\`...`\\\\` ブロック内を PHP として認識し、色を付けます。\\n" +
  "- **Non-destructive**: 標準の TypeScript React (TSX) の文法に介入（Injection）するため、React 側のハイライトを壊しません。\\n\\n" +
  "## インストール（手動セットアップ）\\n\\n" +
  "このディレクトリを VS Code の拡張機能フォルダに配置してください。\\n\\n" +
  "```bash\\n" +
  "cp -r .vscode/extensions/isotope-support-v0.1 ~/.vscode/extensions/\\n" +
  "```\\n\\n" +
  "その後、VS Code を再起動（または `Developer: Reload Window`）すると有効になります。\\n\\n" +
  "## 制限事項\\n\\n" +
  "- **シンタックスハイライトのみ**: 現在のバージョンは色の表示のみをサポートしています。\\n" +
  "- **Intellisense (Hover/F12)**: テンプレートリテラル内の PHP に対する「定義へ移動」や「ホバー説明」は、標準的な PHP Language Server の制限により機能しません。将来的なアップデートで仮想ドキュメント方式によるサポートを検討しています。\\n\\n" +
  "---\\n\\n" +
  "Produced by **ATOMS GAMING**\\n";
