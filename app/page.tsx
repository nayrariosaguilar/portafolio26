import { Footer } from "@/components/Footer";
import { Landing } from "@/components/Landing";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}
