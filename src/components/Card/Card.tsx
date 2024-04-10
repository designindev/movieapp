import Image from "next/image";

interface CardProps {
    id: string;
    feature: string;
    title: string;
    year: string;
    onClick?: () => void;
    imageUrl?: string; 
}

const Card: React.FC<CardProps> = ({ feature, title, year, onClick }) => {
    return (
        <div 
            className="flex flex-col gap-4 p-2 rounded-xl bg-card max-w-[360px] sm:max-w-[382px] lg:max-w-[282px] cursor-pointer"
            onClick={onClick}
        >
            <Image 
                src={feature} 
                width={266}
                height={400}
                alt={title}
                className="rounded-xl h-[400px] w-[100%] lg:w-[266px] sm:w-[100%] object-cover"
            />
            <div className="flex flex-col gap-2 px-2">
                <h2 className="text-title capitalize">{title}</h2>
                <p className="text-info">{year}</p>
            </div>
        </div>         
    );
};
export default Card;
