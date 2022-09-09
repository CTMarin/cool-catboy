import Header from "../components/Header.tsx";
import { PageProps } from "$fresh/server.ts";
import LinkButton from "../components/LinkButton.tsx";

export default function Home() {
    return (
        <div class="h-full">
            <Header/>
            <main class="flex flex-col h-[calc(100%-4rem)] justify-center items-center">
                <section class="flex flex-col items-center">
                    <h2 
                        class="text-3xl font-bold mb-8">
                        Feeling <span class="text-purple-500">nyacky</span>?
                    </h2>
                    <LinkButton 
						text="meow"
						link="/nyacky"
					/>
                </section>
            </main>
        </div>
    );
}
