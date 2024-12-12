export const metadata = {
    title: "Artem Arsenian",
    description: "Nomadic art manager, Producer and Curator of Performative Art, Marketing/Digital media Specialist and Researcher",
};  

export default function RootLayout({ children,}: {children: React.ReactNode;}) {
    return (
        <html lang="en">
            <body className="m-0 p-0">{children}</body>
        </html>
    );
}