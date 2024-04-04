import Image from "next/image";

interface CardProps {
    id: string;
    feature: string;
    title: string;
    year: string;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ feature, title, year, onClick }) => {
    return (
        <div 
            className="flex flex-col gap-4 p-2 rounded-xl bg-card max-w-[282px] cursor-pointer"
            onClick={onClick}
        >
            <Image 
                src={feature} 
                width={266}
                height={400}
                alt={title}
                className="rounded-xl"
            />
            <div className="flex flex-col gap-2 px-2">
                <h2 className="text-title capitalize">{title}</h2>
                <p className="text-info">{year}</p>
            </div>
        </div>         
    );
};
export default Card;
