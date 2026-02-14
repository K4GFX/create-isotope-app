export const postsPageIsx = (styleChoice) => {
  if (styleChoice === "tailwind") {
    return `import { proton } from '../../src/isotope';

export const nucleus = proton\`
// DATABASE CRUD EXAMPLE
try {
    // In a real setup, you would have a 'posts' table
    // $posts = \\Isotope\\Database::query("SELECT * FROM posts ORDER BY created_at DESC")->fetchAll();
    
    // Mock data for demonstration if DB is not connected
    $posts = [
        ['id' => 1, 'title' => 'Getting Started with Isotope', 'content' => 'Isotope is amazing!', 'created_at' => '2024-02-15'],
        ['id' => 2, 'title' => 'Atomic Fusion Explained', 'content' => 'Combine PHP and React easily.', 'created_at' => '2024-02-16']
    ];

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $action = $_POST['action'] ?? '';
        if ($action === 'create') {
            $title = $_POST['title'] ?? 'New Post';
            // \\Isotope\\Database::query("INSERT INTO posts (title) VALUES (?)", [$title]);
            header("Location: /posts");
            exit;
        }
    }

    return [
        'posts' => $posts,
        'db_config' => $_ENV['DB_NAME'] ?? 'Not Configured'
    ];
} catch (\\Exception $e) {
    return ['error' => $e->getMessage(), 'posts' => []];
}
\`;

"use client";

export default function PostsPage({ posts, db_config }) {
    return (
        <div className="p-8 max-w-4xl mx-auto text-white">
            <h1 className="text-4xl font-bold mb-8 text-[#00d4ff]">Blog Posts (CRUD Demo)</h1>
            
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-300">Create New Post</h2>
                <form method="POST" className="flex gap-4">
                    <input type="hidden" name="action" value="create" />
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Post title..." 
                        className="flex-1 bg-black/40 border border-white/20 rounded-lg px-4 py-2 focus:border-[#00d4ff] outline-none"
                    />
                    <button className="bg-[#00d4ff] text-black font-bold px-6 py-2 rounded-lg hover:bg-[#00b8e6] transition-colors">
                        Add Post
                    </button>
                </form>
                <p className="mt-4 text-sm text-gray-500 italic">Database: {db_config}</p>
            </div>

            <div className="space-y-4">
                {posts.map(post => (
                    <div key={post.id} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#00d4ff]/30 transition-all">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-2xl font-bold">{post.title}</h3>
                            <span className="text-sm text-gray-500">{post.created_at}</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed">{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
`;
  }
  return `import { proton } from '../../src/isotope';

export const nucleus = proton\`
// DATABASE CRUD EXAMPLE (Mock)
$posts = [
    ['id' => 1, 'title' => 'Default Template Post', 'content' => 'No Tailwind content here.']
];
return [
    'posts' => $posts
];
\`;

"use client";

export default function PostsPage({ posts }) {
    return (
        <div style={{ padding: '2rem', color: 'white' }}>
            <h1>CRUD Demo</h1>
            {posts.map(post => (
                <div key={post.id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #333' }}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}
`;
};
