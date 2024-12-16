import { ReactNode } from 'react';

export default function StudioLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}