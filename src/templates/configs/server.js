export const htaccess = () => `<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /

    # Block access to sensitive files
    <FilesMatch "^\\.(env|git|vscode|idea)">
        Order allow,deny
        Deny from all
    </FilesMatch>

    # Block access to Isotope system files
    <FilesMatch "^(composer\\.json|package\\.json|tsconfig\\.json|vite\\.config\\.ts)$">
        Order allow,deny
        Deny from all
    </FilesMatch>
    
    # Don't rewrite files or directories
    RewriteCond %{REQUEST_FILENAME} -f [OR]
    RewriteCond %{REQUEST_FILENAME} -d
    RewriteRule ^ - [L]

    # Handle all other requests via index.php
    RewriteRule ^ index.php [L]
</IfModule>
`;
