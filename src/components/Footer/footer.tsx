import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="mx-auto w-full py-4 border-t border-gray-200">
            <div className="m-auto max-w-7xl w-full flex justify-between">
            <Link href={"/"}>
                <Image 
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={64}
                    height={64}
                    priority
                />
            </Link>
            <button className="btn rounded-full">@NextJS</button>
        </div>
        </div>
    );
}

export default Footer