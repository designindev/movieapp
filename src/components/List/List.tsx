import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Card from "@/components/Card/Card";
import Pagination from "./Pagination";
import Button from '../Button';

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
          {cardsData.length === 0 ? (
                <div className="w-full h-full flex flex-col gap-10 items-center">
                    <h2 className="text-h2">Your movie list is empty</h2>
                    <Button
                        text="Add a new movie"
                        type="button"
                        view="primary"
                    />
                </div>
            ) : (
                <>
                    <div className="w-full grid justify-items-center grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-2 gap-6">
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
            )}
        </>
    );
};

export default List;
