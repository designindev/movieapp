import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from "@/components/Button";
import Input from "@/components/Form/Input";
import Header from "@/components/Header/header";
import SimpleLayout from "@/components/Layouts/MainLayout";
import Wrapper from "@/components/Layouts/Wrapper";

const EditMovie = () => {
    
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        if (router.query.imageUrl) {
          setSelectedImage(router.query.imageUrl as string);
        }
      }, [router.query.imageUrl]);

    console.log(selectedImage);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setYear(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const movieData = {
            title: title,
            year: year,
            image: selectedImage,
        };
        console.log('Movie Data:', movieData);
        router.push('/movies');
    };

    const CancelClick = () => {
        router.push('/movies');
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
          const imageUrl = URL.createObjectURL(files[0]);
          setSelectedImage(imageUrl);
        }
      };

    return (
        <SimpleLayout>
            <Wrapper>
                <Header
                    title="Edit movie"
                />
                <form 
                    className="w-full flex flex-col-reverse lg:flex-row justify-between items-start gap-6"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="image" className="border-2 bg-input rounded-[10px] border-white border-dashed w-full md:max-w-[473px] h-[504px] flex justify-center items-center cursor-pointer">
                        {selectedImage ? (
                            <div className='w-full h-full relative'>
                                <Image
                                    src={selectedImage}
                                    alt="Selected Image"
                                    width="473"
                                    height="504"
                                    className="w-full h-full object-cover rounded-[10px]"
                                />
                                <button 
                                    type="button"
                                    className="absolute top-4 left-4 shadow-lg p-3 flex items-center justify-center rounded-full bg-card transition-transform hover:scale-105"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </button>
                                
                            </div>
                            ) : (
                            <div className="flex flex-col gap-2 items-center">
                                <Image src="/drop.svg" alt="Drop other image here" width="16" height="16" />
                                Drop other image here
                            </div>
                        )}
                        <input 
                            type="file" 
                            id="image" 
                            accept="image/*" 
                            style={{ display: 'none' }} 
                            onChange={handleImageChange} 
                        />
                    </label>
                    <div className="flex flex-col gap-6 md:gap-16 w-full md:max-w-[362px]">
                        <div className="flex flex-col gap-6">
                            <Input
                                type="text"
                                placeholder="Title"
                                id="title"
                                required={true}
                                onChange={handleTitleChange}
                            />
                            <Input
                                type="date"
                                placeholder="Publishing year"
                                id="year"
                                required={true}
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
