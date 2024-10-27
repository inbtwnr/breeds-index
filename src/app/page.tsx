import Footer from "@/components/footer";
import Header from "@/components/header";
import BreedsList from "@/components/breedsList";

export default function Home() {
  return (
    <div className="py-8 min-h-screen space-y-6 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <BreedsList />
      </main>
      <Footer />
    </div>
  );
}
