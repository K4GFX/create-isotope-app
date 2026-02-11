import type { Plugin } from "vite";
import fs from "fs";

export default function isotopeSplitter(): Plugin {
  return {
    name: "isotope-splitter",
    enforce: "pre",
    async resolveId(source, importer, options) {
      if (source.endsWith(".isx")) {
        const resolution = await this.resolve(source, importer, {
          skipSelf: true,
          ...options,
        });
        if (resolution && resolution.id) {
          return resolution.id + ".tsx";
        }
      }
      return null;
    },
    load(id) {
      if (id.endsWith(".isx.tsx")) {
        const realPath = id.slice(0, -4);
        if (fs.existsSync(realPath)) {
          const code = fs.readFileSync(realPath, "utf-8");
          // Remove PHP blocks: <?php ... ?> AND proton`...`
          const cleanedCode = code
            .replace(/<\?php[\s\S]*?\?>/g, "")
            .replace(/proton`[\s\S]*?`/g, "null");
          return {
            code: cleanedCode,
            map: null,
          };
        }
      }
      return null;
    },
  };
}
