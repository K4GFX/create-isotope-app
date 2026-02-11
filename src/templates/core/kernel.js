export const kernelPhp = (styleChoice) => `<?php
namespace Isotope;

class Kernel {
    public static function boot() {
        // Serve static files from public/ during development
        $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        if ($uri !== '/' && file_exists(__DIR__ . '/../public' . $uri)) {
            $ext = pathinfo($uri, PATHINFO_EXTENSION);
            $mimes = ['png' => 'image/png', 'jpg' => 'image/jpeg', 'jpeg' => 'image/jpeg', 'gif' => 'image/gif', 'svg' => 'image/svg+xml'];
            if (isset($mimes[$ext])) header('Content-Type: ' . $mimes[$ext]);
            readfile(__DIR__ . '/../public' . $uri);
            exit;
        }

        $isDev = (isset($_SERVER['HTTP_HOST']) && strpos($_SERVER['HTTP_HOST'], ':8000') !== false);
        $route = ($uri === '/' || $uri === '/index.php') ? '/home' : rtrim($uri, '/');
        
        // Middleware Support
        if (file_exists(__DIR__ . "/../app/middleware.php")) {
            $middleware = include __DIR__ . "/../app/middleware.php";
            if (is_callable($middleware)) $middleware();
        }

        $path = __DIR__ . "/../app" . $route;
        $isx = $path . "/page.isx";
        
        $data = ['nucleus' => '404', 'isotopes' => [], 'desc' => 'Page Not Found'];
        $pageHtml = "";
        $isClient = false;

        if (file_exists($isx)) {
            $content = file_get_contents($isx);
            
            // Directive Detection (Improved regex to ignore comments)
            $cleanContent = preg_replace('#/\\\\*\\\\s*[\\\\s\\\\S]*?\\\\s*\\\\*\\\\/|(?<!:)\\\\/\\\\/.*#', '', $content);
            $isClient = preg_match('#^\\\\s*["\\\\x27]use client["\\\\x27]#', $cleanContent);

            $phpCode = null;
            if (preg_match('/<\\\\?php([\\\\s\\\\S]*?)\\\\?>/', $content, $matches)) {
                $phpCode = $matches[1];
            } elseif (preg_match('/proton\\\`([\\\\s\\\\S]*?)\\\`/', $content, $matches)) {
                $phpCode = $matches[1];
            }

            if ($phpCode) {
                // Temporary file to avoid eval() for better include behavior
                $tmp = tempnam(sys_get_temp_dir(), 'isx');
                file_put_contents($tmp, "<?php " . $phpCode);
                $res = include $tmp;
                if (is_array($res)) $data = $res;
                unlink($tmp);
            }

            if (!$isClient) {
                if (preg_match('#export default function [^\\\\(]+\\\\(([^)]*)\\\\)[\\\\s\\\\S]*?return\\\\s*\\\\(([\\\\s\\\\S]*?)\\\\)[\\\\s;]*$#m', $content, $matches)) {
                    $jsx = $matches[2];
                    $pageHtml = self::renderJSX($jsx, $data);
                }
            }
        } elseif (file_exists($path . "/page.php")) {
            $data = include $path . "/page.php";
        }
        
        // SPA Handling: Return JSON if requested
        if (isset($_SERVER['HTTP_ACCEPT']) && str_contains($_SERVER['HTTP_ACCEPT'], 'application/json')) {
            header('Content-Type: application/json');
            if (!$isClient) { $data["_pageHtml"] = $pageHtml; }
            echo json_encode($data);
            exit;
        }

        // Layout Data Merging (Always SSR if possible)
        if (file_exists(__DIR__ . "/../app/layouts/layout.isx")) {
            $lContent = file_get_contents(__DIR__ . "/../app/layouts/layout.isx");
            $lPhpCode = null;
            if (preg_match('/proton\\\`([\\\\s\\\\S]*?)\\\`/', $lContent, $matches)) {
                $lPhpCode = $matches[1];
            }
            if ($lPhpCode) {
                $tmp = tempnam(sys_get_temp_dir(), 'isx_l');
                file_put_contents($tmp, "<?php " . $lPhpCode);
                $layoutData = include $tmp;
                unlink($tmp);
                if (is_array($layoutData)) $data = array_merge($layoutData, $data);
            }
            
            // Layout Integration: Wrapping the page HTML inside the layout's JSX logic is typically done in the frontend,
            // but for pure SSR, we render the page first then pass it to the nucleus shell.
        }

        // Final SSR Assembly
        $data["_pageHtml"] = $pageHtml; 
        $elementPath = "app" . $route . "/page.isx";
        include __DIR__ . "/nucleus.php";
    }

    public static function renderJSX($jsx, $data) {
        $html = $jsx;
        
        // 1. Map replacement (Loop)
        $html = preg_replace_callback('#\\\\{([^}.]+)\\\\.map\\\\((?P<args>[^\\\\s=>]+)\\\\s*=>\\\\s*\\\\((?P<tpl>[\\\\s\\\\S]+?)\\\\)\\\\)\\\\}#', function($m) use ($data) {
            $listKey = trim($m[1]);
            $itemVar = trim($m['args'], '() ');
            $itemTpl = $m['tpl'];
            $replacement = "";
            if (isset($data[$listKey]) && is_array($data[$listKey])) {
                foreach ($data[$listKey] as $item) {
                    $replacement .= preg_replace('/\\\\{\\\\s*' . preg_quote($itemVar, '/') . '\\\\s*\\\\}/i', (string)$item, $itemTpl);
                }
            }
            return $replacement;
        }, $html);

        // 2. Props replacement (Variables)
        foreach ($data as $key => $val) {
            if (is_string($val) || is_numeric($val)) {
                $html = preg_replace('/\\\\{\\\\s*' . preg_quote($key, '/') . '\\s*\\\\}/i', (string)$val, $html);
            }
        }

        $html = preg_replace('#className=#i', 'class=', $html);
        $html = preg_replace('#/\\\\*\\\\s*[\\\\s\\\\S]*?\\\\s*\\\\*\\\\/|(?<!:)\\\\/\\\\/.*#', '', $html);
        $html = preg_replace('#onClick=\\\\{.*?\\\\}|onChange=\\\\{.*?\\\\}|onSubmit=\\\\{.*?\\\\}#i', '', $html);

        return $html;
    }
}
`;
