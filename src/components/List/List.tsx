import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Card from "@/components/Card/Card";
import Pagination from "./Pagination";
import Button from "../Button";

const List = ({ data }: { data: any[] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    const router = useRouter();

    console.log(data);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleCardClick = (movieId: string, feature: string, title: string) => {
        router.push({
            pathname: `/movies/${movieId}`,
            query: { imageUrl: feature, title: title },
        });
    };

    return (
        <>
          {data.length === 0 ? (
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
                                id={cardData.movieId}
                                feature={cardData.feature}
                                title={cardData.title}
                                year={cardData.year}
                                onClick={() => handleCardClick(cardData.movieId, cardData.feature, cardData.title)}
                            />
                        ))}
                    </div>
                    <Pagination 
                        totalItems={data.length}
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
