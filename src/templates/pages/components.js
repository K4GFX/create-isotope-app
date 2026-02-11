export const linkTsx = () => `import React from 'react';

export default function Link({ to, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }) {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if ((window as any).isotopeNavigate) {
            (window as any).isotopeNavigate(to);
        } else {
            window.location.href = to;
        }
    };
    return <a href={to} onClick={handleClick} {...props}>{children}</a>;
}
`;
