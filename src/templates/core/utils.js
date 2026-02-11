export const bridgePhp = () => `<?php
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    $action = $input['action'] ?? null;
    $params = $input['params'] ?? [];
    
    if ($action && is_callable($action)) {
        $result = $action(...$params);
        echo json_encode(['success' => true, 'data' => $result]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Action not found']);
    }
    exit;
}
`;

export const optimizerPhp = () => `<?php
$src = $_GET['src'] ?? null;
$width = $_GET['w'] ?? null;
$quality = $_GET['q'] ?? 80;

if (!$src || !file_exists(__DIR__ . '/../public/' . $src)) {
    http_response_code(404);
    exit;
}

$file = __DIR__ . '/../public/' . $src;
$info = getimagesize($file);
$mime = $info['mime'];

header("Content-Type: $mime");

if (!$width) {
    readfile($file);
    exit;
}

// Simple GD resizing
$img = null;
switch ($mime) {
    case 'image/jpeg': $img = imagecreatefromjpeg($file); break;
    case 'image/png':  $img = imagecreatefrompng($file);  break;
    case 'image/webp': $img = imagecreatefromwebp($file); break;
}

if ($img) {
    $origW = imagesx($img);
    $origH = imagesy($img);
    $height = ($origH / $origW) * $width;
    $tmp = imagecreatetruecolor($width, $height);
    
    if ($mime === 'image/png' || $mime === 'image/webp') {
        imagealphablending($tmp, false);
        imagesavealpha($tmp, true);
    }
    
    imagecopyresampled($tmp, $img, 0, 0, 0, 0, $width, $height, $origW, $origH);
    
    switch ($mime) {
        case 'image/jpeg': imagejpeg($tmp, null, $quality); break;
        case 'image/png':  imagepng($tmp); break;
        case 'image/webp': imagewebp($tmp, null, $quality); break;
    }
    imagedestroy($tmp);
    imagedestroy($img);
}
`;
