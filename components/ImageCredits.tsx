import { PageProps } from "$fresh/server.ts";

interface ImageCreditsProps {
    artist: string,
    artist_url: string,
    source_url: string
}

export default function ImageCredits(props: ImageCreditsProps) {
    return (
        <div class="border-l-4 border-green-400 px-8">
            <h1 class="text-3xl font-extrabold text-purple-500">
                {props.artist}
            </h1>
            <h2 class="text-lg">
                <span class="font-extrabold">
                    Link to Awrrrtist
                </span> 
                : <a href={props.artist_url} target="_blank" rel="noopener noreferrer"
                    class="text-blue-500"
                >
                    {props.artist_url}
                </a>
            </h2>
            <h2 class="text-lg">
                <span class="font-extrabold">
                    Source
                </span> 
                : <a href={props.source_url} target="_blank" rel="noopener noreferrer"
                    class="text-blue-500"
                >
                    {props.artist_url}
                </a>
            </h2>
        </div>
    );
}