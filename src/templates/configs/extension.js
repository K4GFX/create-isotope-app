export const extensionPackageJson = () =>
  "{" +
  '  "name": "isotope-support",' +
  '  "displayName": "Isotope Support",' +
  '  "description": "Syntax highlighting for Isotope (.isx) files",' +
  '  "version": "0.1.0",' +
  '  "publisher": "atoms-gaming",' +
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
  "# Isotope Support v0.1\n\n" +
  "This internal extension provides syntax highlighting for .isx files in the Isotope Framework.\n\n" +
  "## Features\n\n" +
  "- **Atomic Logic Highlighting**: Correctly highlights PHP code inside proton template literals.\n" +
  "- **React/TSX Integration**: Seamlessly works with React components in the same file.\n\n" +
  "## Usage\n\n" +
  "This extension is automatically loaded when you open the project in VS Code.\n";
