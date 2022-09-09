import Header from "../components/Header.tsx";
import { PageProps } from "$fresh/server.ts";
import LinkButton from "../components/LinkButton.tsx";

export default function Home() {
    return (
        <div class="h-full flex flex-col items-center">
            <Header/>
            <main class="flex flex-col w-full h-[calc(100%-4rem-4rem)] justify-center items-center">
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
			<footer class="w-11/12 h-16 flex items-center justify-between">
				<a href="https://fresh.deno.dev">
					<img width="197" height="37" src="https://fresh.deno.dev/fresh-badge-dark.svg" alt="Made with Fresh" />
				</a>
				<a href="https://github.com">
					<img width="37" height="37" src="github-icon.png" alt="Link to source code on Github" />
				</a>				
			</footer>
        </div>
    );
}
