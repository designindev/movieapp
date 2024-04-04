export default function SimpleLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div className="w-full min-h-screen max-w-[1200px]">
            {children} 
        </div>
    );
  }