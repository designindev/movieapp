import React from 'react';

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePrevClick = () => {
        onPageChange(currentPage - 1);
    };

    const handleNextClick = () => {
        onPageChange(currentPage + 1);
    };

    return (
        <div className="w-full flex justify-center mt-[120px] mb-[109px]">
            <ul className="flex gap-2 text-regular items-center">
                <li className='mr-2'>
                    <button 
                        onClick={handlePrevClick} 
                        disabled={currentPage === 1}
                    >
                        Prev
                    </button>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                    <li key={index}>
                        <button 
                            onClick={() => onPageChange(index + 1)} 
                            disabled={index + 1 === currentPage}
                            className={`py-1 px-3 rounded ${
                                index + 1 === currentPage ? "bg-primary" : "bg-card"
                            }`}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li className='ml-2'>
                    <button 
                        onClick={handleNextClick} 
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;
