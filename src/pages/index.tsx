import { Inter } from "next/font/google";
import IntroNavBar from "@/components/Intro/introNavBar/introNavBar";
import Header from "@/components/Intro/header/header";
import Hero from "@/components/Intro/hero/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-20 ${inter.className}`}
    >
      <Header />
      <Hero />
      <IntroNavBar />
    </main>
  );
}
