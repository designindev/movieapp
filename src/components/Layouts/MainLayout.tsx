import Footer from "../Main/Footer/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-main w-full flex flex-col justify-between items-center text-white">
         <section className="w-full h-full flex justify-center items-center grow px-6 pb-5">
            {children}
        </section>         
        <Footer />
    </main>  
  );
}
