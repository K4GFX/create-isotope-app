# Isotope Framework Manual

Isotope は、PHP と React を融合させた、レンタルサーバー向けのモダンなハイブリッドフレームワークです。

## 1. ディレクトリ構造

- `app/`: ルーティングとロジックを配置します。
  - `{path}/page.isx`: Atomic Fusion コンポーネント (PHP + React)。
  - `layout.isx`: 共通レイアウト (PHP + React)。
  - `middleware.php`: 全リクエスト共通のミドルウェア。
- `core/`: フレームワークのコアロジック（Kernel, Bridge, Optimizerなど）。
- `src/`: フロントエンドのエントリポイント (Vite)。
- `src/isotope-splitter.ts`: ビルド用スプリッタープラグイン。

## 2. ルーティングとデータ注入 (Atomic Fusion)

各ディレクトリがURLパスに対応します。
`.isx` ファイル内で `return` した配列（PHP側）は、自動的に `props` （React側）として渡されます。

### Quantum Fusion (SSR/CSR)

Isotope はコンポーネントごとにレンダリングモードを切り替えられます。

- **Server Component (SC)**: デフォルト状態。PHPが直接HTMLを出力します。ブラウザにJSは送られません。
- **Client Component (CC)**: ファイルの先頭に `"use client";` を記述します。Reactによるハイドレーションと動的なUI（onClickなど）が有効になります。

```tsx
// app/home/page.isx
import { proton } from "../../src/isotope";

export const nucleus = proton`
return [
    'title' => 'Hello SSR'
];
`;

// "use client"; // これを書くと CSR になります

export default function Page({ title }) {
  return <h1>{title}</h1>;
}
```

## 3. クライアントサイド・ナビゲーション (SPA)

Isotope はデフォルトで SPA として動作します。ページ全体のリロードなしで高速に遷移するには、`src/components/Link.tsx` を使用します。

```tsx
import Link from "../components/Link";

export default function Nav() {
  return (
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}
```

## 4. 環境変数 (.env)

Isotope はプロジェクトルートの `.env` ファイルを自動的に読み込みます。
PHP 側では `$_ENV['KEY_NAME']` または `getenv('KEY_NAME')` でアクセス可能です。

```env
DB_HOST=localhost
DB_NAME=my_database
```

## 5. データベース操作 (Database)

`core/Database.php` を使用して、PDO によるデータベース操作が可能です。

```php
// データの取得 (Read)
$users = \\Isotope\\Database::query("SELECT * FROM users")->fetchAll();

// データの追加 (Create)
\\Isotope\\Database::query("INSERT INTO users (name) VALUES (?)", [$name]);
```

## 6. CRUD サンプル (/posts)

新規プロジェクトには `/posts` パスに CRUD のサンプルコードが含まれています。
`app/posts/page.isx` を参照して、データの取得とフォーム送信の実装方法を確認してください。

## 7. Atomic Actions (Bridge)

`core/Bridge.php` を使用して、APIを作成せずに PHP の関数を呼び出せます。
(※現在は POST リクエストを受け取り、サーバーサイドで指定されたアクションを実行するプロトタイプとして組み込まれています)

## 5. イメージ最適化 (Optimizer)

`core/optimizer.php` を経由することで、レンタルサーバー側で画像をリサイズして配信できます。

**使用例:**
`<img src="/core/optimizer.php?src=logo.png&w=200&q=80" />`

## 6. ミドルウェア (middleware.php)

`app/middleware.php` でリクエスト実行前の処理を定義できます。

## 7. 本番環境へのデプロイ

1. `npm run build` を実行してアセットを生成します。
2. 生成されたすべてのファイルをサーバーにアップロードします。
3. レンタルサーバーでは `index.php` がエントリポイントとなります。
