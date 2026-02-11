export const nucleusPhp = () => `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $data['_meta']['title'] ?? 'Isotope App'; ?></title>
    <?php if (isset($data['_meta']['description'])): ?>
    <meta name="description" content="<?php echo $data['_meta']['description']; ?>">
    <?php endif; ?>
    
    <?php
    $isDev = false;
    $fp = @fsockopen('localhost', 5173, $errno, $errstr, 0.1);
    if ($fp) {
        $isDev = true;
        fclose($fp);
    }

    if ($isDev): 
        // Auto-detect CSS or SCSS
        $cssFile = file_exists(__DIR__ . '/../src/styles/globals.scss') ? 'globals.scss' : 'globals.css';
    ?>
        <link rel="stylesheet" href="http://localhost:5173/src/styles/<?php echo $cssFile; ?>">
        <script type="module">
            import RefreshRuntime from 'http://localhost:5173/@react-refresh'
            RefreshRuntime.injectIntoGlobalHook(window)
            window.$RefreshReg$ = () => {}
            window.$RefreshSig$ = () => (type) => type
            window.__vite_plugin_react_preamble_installed__ = true
        </script>
        <script type="module" src="http://localhost:5173/@vite/client"></script>
        <script type="module" src="http://localhost:5173/src/main.tsx"></script>
    <?php else: 
        $manifestFile = __DIR__ . '/../public/dist/.vite/manifest.json';
        if (!file_exists($manifestFile)) $manifestFile = __DIR__ . '/../public/dist/manifest.json';
        $manifest = file_exists($manifestFile) ? json_decode(file_get_contents($manifestFile), true) : [];
        $entry = $manifest['src/main.tsx'] ?? null;
        if ($entry):
        ?>
        <link rel="stylesheet" href="/dist/<?php echo $entry['css'][0] ?? ''; ?>">
        <script type="module" src="/dist/<?php echo $entry['file'] ?? ''; ?>"></script>
    <?php endif; endif; ?>
</head>
<body>
    <div id="isotope-nucleus" data-proton='<?php echo json_encode($data, JSON_HEX_QUOT | JSON_HEX_APOS); ?>' data-electron="<?php echo $elementPath; ?>">
        <?php echo $pageHtml; ?>
    </div>
</body>
</html>`;
