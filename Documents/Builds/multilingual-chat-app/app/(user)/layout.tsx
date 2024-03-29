export default function ChatLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex-1 w-full flex flex-col max-w-5xl mx-auto">
            {children}
        </div>
    );
}
