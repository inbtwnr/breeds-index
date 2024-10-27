import Breed from "@/components/Breed";
import Link from "next/link";

export default function Page() {
    return <main className={'space-y-6 pt-4 max-w-5xl mx-auto'}>
        <Link href={'/'}>Go to the main</Link>
        <div className={'grid gap-3 lg:grid-cols-2'}>
            <Breed url={'https://api.thedogapi.com'} />
        </div>
    </main>
}