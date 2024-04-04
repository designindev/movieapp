export default function SimpleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <main className="min-h-screen bg-main w-full flex justify-center items-center text-white">
          {children} 
      </main>
  );
}