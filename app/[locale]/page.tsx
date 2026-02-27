import { Footer } from "@/components/Footer";
import { Landing } from "@/components/Landing";
import { Navbar } from "@/components/Navbar";
import {setRequestLocale} from 'next-intl/server';

export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}
