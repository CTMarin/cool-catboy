import { Handlers, PageProps } from "$fresh/server.ts";
import ImageCredits from "../components/ImageCredits.tsx";
import LinkButton from "../components/LinkButton.tsx";

interface RandomImage {
    url: string,
    artist: string,
    artist_url: string,
    source_url: string,
    error: string
}

export const handler: Handlers<RandomImage | null> = {
    async GET(req, ctx) {
        const response = await fetch("https://api.catboys.com/img");
        if(!response.ok) {
            return ctx.render(null);
        } 
        const randomImage: RandomImage = await response.json();
        return ctx.render(randomImage);
    }
}

export default function Nyacky({ data }: PageProps<RandomImage | null>) {
    if(!data) {
        return <h1>Ewrrror</h1>
    }

    return (
        <div class="flex h-full flex-col justify-center items-center">
            <img src={data.url}
                class="h-2/3 rounded-2xl mb-8 shadow-2xl"
            />
            <ImageCredits 
                artist={data.artist}
                artist_url={data.artist_url}
                source_url={data.source_url}
            />
            <br></br>
            <div class="flex">
                <LinkButton
                    text="Mwore?"
                    link="/nyacky"
                />
                <LinkButton
                    text="Stowp >:("
                    link="/"
                />
            </div>
        </div>
    );
}