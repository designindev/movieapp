import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from "@/components/Button";
import Input from "@/components/Form/Input";
import Header from "@/components/Main/Header/header";
import SimpleLayout from "@/components/Layouts/MainLayout";
import Wrapper from "@/components/Layouts/Wrapper";
import { useCrud, Item } from '@/lib/services/hooks/CRUD';
import useStoreData from "@/lib/services/store";

const EditMovie = () => {
    const router = useRouter();
    const [movie, setMovie] = useState<Item | null>(null);
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const data = useStoreData();
    const { updateItem } = useCrud();

    useEffect(() => {
        const movieId = router.query.movieId as string;
        const foundMovie = data.find(movie => movie.movieId === movieId);
        if (foundMovie) {
            setMovie(foundMovie);
            setTitle(foundMovie.title);
            setYear(foundMovie.year);
            setCurrentImage(foundMovie.feature);
        }
    }, [router.query.movieId, data]);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setYear(e.target.value);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
            setCurrentImage(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {       
        e.preventDefault();
        if (!movie) {
            console.error('Movie is null');
            return;
        }
    
        try {
            if (selectedImage) {
                const updatedMovieData: Item = {
                    ...movie,
                    title,
                    year,
                    feature: selectedImage.name,
                };
                await updateItem(movie.movieId, updatedMovieData, selectedImage);
            } else {
                const updatedMovieData: Item = {
                    ...movie,
                    title,
                    year,
                };
                await updateItem(movie.movieId, updatedMovieData);
            }
            
            router.push('/movies');
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    if (!movie) return null;

    function CancelClick(): void {
        router.push('/movies');
    }

    return (
        <SimpleLayout>
            <Wrapper>
                <Header
                    title={`Edit ${movie.title}`}
                />
                <form 
                    className="w-full flex flex-col-reverse lg:flex-row justify-between items-start gap-6"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="image" className="border-2 bg-input rounded-[10px] relative border-white border-dashed w-full md:max-w-[473px] h-[504px] flex justify-center items-center cursor-pointer">
                        <Image
                            src={currentImage || ""}
                            alt="Selected Image"
                            width="473"
                            height="504"
                            className="w-full h-full object-cover rounded-[10px]"
                        />
                        <input 
                            type="file"
                            id="image"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        <button 
                            type="button"
                            className="absolute top-4 left-4 shadow-lg p-3 flex items-center justify-center rounded-full bg-card transition-transform hover:scale-105"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </button>
                    </label>
                    <div className="flex flex-col gap-6 md:gap-16 w-full md:max-w-[362px]">
                        <div className="flex flex-col gap-6">
                            <Input
                                type="text"
                                placeholder="Title"
                                id="title"
                                required={true}
                                value={title}
                                onChange={handleTitleChange}
                            />
                            <Input
                                type="text"
                                placeholder="Publishing year"
                                id="year"
                                required={true}
                                value={year}
                                onChange={handleYearChange}
                                style={{ maxWidth: '241px' }}
                            />
                        </div>
                        <div className="flex gap-4">
                            <Button
                                text="Submit"
                                type="submit"
                                view="primary"
                                style={{ width: '100%' }}
                            />
                            <Button
                                text="Cancel"
                                type="button"
                                view="cancel"
                                onClick={CancelClick}
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>
                </form>
            </Wrapper>
        </SimpleLayout>
    );
};

export default EditMovie;
