import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from "@/components/Button";
import Input from "@/components/Form/Input";
import Header from "@/components/Header/header";
import SimpleLayout from "@/components/Layouts/Layout";
import Wrapper from "@/components/Layouts/Wrapper";

const AddMovie = () => {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const router = useRouter();

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
            year: year
        };
        console.log('Movie Data:', movieData);
        router.push('/movies');
    };

    const CancelClick = () => {
        router.push('/movies');
    };

    return (
        <SimpleLayout>
            <Wrapper>
                <Header
                    title="Create a new movie"
                />
                <form 
                    className="w-full flex justify-between items-start"
                    onSubmit={handleSubmit}
                >
                    <div className="border-2 bg-input rounded-[10px] border-white border-dashed w-full max-w-[473px] h-[504px] flex justify-center items-center">
                        <div className="flex flex-col gap-2 items-center">
                            <Image src="/drop.svg" alt="Drop other image here" width="16" height="16" />
                            Drop other image here
                        </div>
                    </div>
                    <div className="flex flex-col gap-16 w-full max-w-[362px]">
                        <div className="flex flex-col gap-6">
                            <Input
                                type="text"
                                placeholder="Title"
                                id="title"
                                required={true}
                                onChange={handleTitleChange}
                            />
                            <Input
                                type="text"
                                placeholder="Publishing year"
                                id="year"
                                required={true}
                                onChange={handleYearChange}
                                maxw="241px"
                            />
                        </div>
                        <div className="flex gap-4">
                            <Button
                                text="Submit"
                                type="submit"
                                view="primary"
                            />
                            <Button
                                text="Cancel"
                                type="button"
                                view="cancel"
                                onClick={CancelClick}
                            />
                        </div>
                    </div>
                </form >
            </Wrapper>
        </SimpleLayout>
    );
};

export default AddMovie;
