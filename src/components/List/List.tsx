import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Card from "@/components/Card/Card";
import Pagination from "./Pagination";

const List = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const router = useRouter();

    const cardsData = [
        { feature: "/Rectangle 24.png", title: "movie", year: "2021" },
        { feature: "/Rectangle 25.png", title: "movie", year: "2021" },
        { feature: "/Rectangle 24.png", title: "movie", year: "2021" },
        { feature: "/Rectangle 23.png", title: "movie", year: "2021" },
        { feature: "/Rectangle 24.png", title: "movie", year: "2021" },
        { feature: "/Rectangle 25.png", title: "movie", year: "2021" },
        { feature: "/Rectangle 24.png", title: "movie", year: "2021" },
        { feature: "/Rectangle 23.png", title: "movie", year: "2021" },
        { feature: "/Rectangle 24.png", title: "movie", year: "2021" },
        { feature: "/Rectangle 25.png", title: "movie", year: "2021" },
        { feature: "/Rectangle 24.png", title: "movie", year: "2021" },
        { feature: "/Rectangle 23.png", title: "movie", year: "2021" },
        { feature: "/Rectangle 24.png", title: "movie", year: "2021" },
        { feature: "/Rectangle 23.png", title: "movie", year: "2021" },
        { feature: "/Rectangle 23.png", title: "movie", year: "2021" },
        { feature: "/Rectangle 23.png", title: "movie", year: "2021" },
    ];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = cardsData.slice(indexOfFirstItem, indexOfLastItem);

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleCardClick = (movieId: string) => {
        router.push(`/movies/${movieId}`);
    };

    return (
        <>
          <div className="w-full grid grid-cols-4 grid-rows-2 gap-6">
                {currentItems.map((cardData, index) => (
                    <Card 
                        key={index}
                        id={index.toString()}
                        feature={cardData.feature}
                        title={cardData.title}
                        year={cardData.year}
                        onClick={() => handleCardClick(index.toString())}
                    />
                ))}
            </div>
            <Pagination 
                totalItems={cardsData.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />
        </>
    );
};

export default List;
