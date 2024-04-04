import Image from "next/image";
import { useRouter } from "next/router";

interface HeaderProps {
    title: string;
    list?: boolean;
    logout?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, list, logout }) => {
    const router = useRouter();

    const handleListClick = () => {
        router.push('/movies/new');
    };

    const handleLogoutClick = () => {
        router.push('/signin');
    };

    return (
        <div className="w-full flex items-center justify-between my-[120px]">
            <div className="flex gap-2 items-center">
                <h1 className="text-h2">{title}</h1>
                {list && <Image 
                    src="/add.svg" 
                    alt="add" 
                    width="26" 
                    height="26"
                    className="cursor-pointer transition-transform hover:scale-105"
                    onClick={handleListClick}
                />}
            </div>
            {logout && (
                <button 
                    type="button" 
                    className="flex items-center gap-3 text-regular group"
                    onClick={handleLogoutClick}
                >
                    Logout
                    <Image 
                        src="/logout.svg" 
                        alt="logout" 
                        width="24" 
                        height="24"
                        className="cursor-pointer transition-transform group-hover:scale-105"
                    />
                </button>
            )}
        </div>
    );
}

export default Header;
