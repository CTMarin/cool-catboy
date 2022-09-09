interface LinkButtonProps {
    text: string,
    link: string
}

export default function LinkButton(props: LinkButtonProps) {
    return (
        <a href={props.link} class="
            bg-purple-500 text-white text-xl rounded-md
            px-4 py-2 mx-4 my-4 sm:px-16 whitespace-nowrap
            hover:cursor-pointer hover:bg-green-300 hover:text-gray-900
        ">
            {props.text}
        </a>
    );
}