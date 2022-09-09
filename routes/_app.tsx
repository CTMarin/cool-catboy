import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App(props: AppProps) {
    return (
        <>  
            <Head>
                <meta name="cool catboys"></meta>
            </Head>
            <body class="h-screen">
                <props.Component/>
            </body>
        </>
    );
}