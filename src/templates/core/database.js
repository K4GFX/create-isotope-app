export const databasePhp = () => `<?php
namespace Isotope;

use PDO;
use PDOException;

/**
 * リモートからのレスポンスをPDOStatement風に扱うためのクラス
 */
class RemoteStatement {
    private $data;
    public function __construct($data) { $this->data = $data; }
    public function fetchAll() { return $this->data; }
    public function execute() { return true; }
}

class Database {
    private static $instance = null;
    private $connection;

    private function __construct() {
        // ブリッジが有効な場合はPDO接続をスキップ
        if ($this->shouldBridge()) return;

        $host = $_ENV['DB_HOST'] ?? 'localhost';
        $db   = $_ENV['DB_NAME'] ?? 'isotope_db';
        $user = $_ENV['DB_USER'] ?? 'root';
        $pass = $_ENV['DB_PASS'] ?? '';
        $port = $_ENV['DB_PORT'] ?? '3306';
        $charset = 'utf8mb4';

        $dsn = "mysql:host=$host;dbname=$db;charset=$charset;port=$port";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];

        try {
            $this->connection = new PDO($dsn, $user, $pass, $options);
        } catch (PDOException $e) {
            throw new PDOException($e->getMessage(), (int)$e->getCode());
        }
    }

    private function shouldBridge() {
        return !empty($_ENV['ISX_BRIDGE_URL']) && (isset($_ENV['DB_HOST']) && str_ends_with($_ENV['DB_HOST'], '.lan') || ($_ENV['APP_ENV'] ?? '') === 'development');
    }

    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance->connection;
    }

    private static function getInstanceInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public static function query($sql, $params = []) {
        $instance = self::getInstanceInstance();

        // ブリッジ条件に合致する場合はHTTPリクエストを発行
        if ($instance->shouldBridge()) {
            return self::bridgeQuery($sql, $params);
        }

        $db = $instance->connection;
        $stmt = $db->prepare($sql);
        $stmt->execute($params);
        return $stmt;
    }

    private static function bridgeQuery($sql, $params) {
        $url = $_ENV['ISX_BRIDGE_URL'];
        $token = $_ENV['ISX_BRIDGE_TOKEN'] ?? '';

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
            'action' => 'db_query',
            'params' => ['sql' => $sql, 'params' => $params],
            'token' => $token
        ]));
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

        $response = curl_exec($ch);
        $result = json_decode($response, true);

        if (!$result || !($result['success'] ?? false)) {
            throw new \\Exception("Bridge Error: " . ($result['error'] ?? 'Unknown error'));
        }

        return new RemoteStatement($result['data']);
    }
}
`;
