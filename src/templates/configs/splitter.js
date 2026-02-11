export const splitterTs =
  () => `import { Plugin, transformWithEsbuild } from 'vite';
import fs from 'fs';

export default function isotopeSplitter(): Plugin {
  return {
    name: 'isotope-splitter',
    enforce: 'pre',
    async transform(code, id) {
      const [path] = id.split('?');
      if (path.endsWith('.isx')) {
          const isClient = /['"]use client['"]/.test(code.replace(/\\/\\*\\s*[\\s\\S]*?\\s*\\*\\/|\\/\\/.*/g, ''));
          if (!isClient) {
              const stubCode = 'import React from "react"; export default function SC(props) { return <div dangerouslySetInnerHTML={{ __html: props._pageHtml }} style={{ display: "contents" }} />; }';
              return transformWithEsbuild(stubCode, id, {
                loader: 'tsx',
                jsx: 'automatic',
              });
          }
          const cleanedCode = code
              .replace(/<\\?php[\\s\\S]*?\\?>/g, '')
              .replace(/proton\\\`[\\s\\S]*?\\\`/g, 'null');
          
          return transformWithEsbuild(cleanedCode, id, {
            loader: 'tsx',
            jsx: 'automatic',
          });
      }
      return null;
    },
    handleHotUpdate({ file, server }) {
      if (file.split('?')[0].endsWith('.isx')) {
        const mod = server.moduleGraph.getModuleById(file);
        if (mod) {
          server.moduleGraph.invalidateModule(mod);
          return [mod];
        }
      }
    }
  };
}
`;
