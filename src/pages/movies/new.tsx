import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Button from "@/components/Button";
import Input from "@/components/Form/Input";
import Header from "@/components/Main/Header/header";
import SimpleLayout from "@/components/Layouts/MainLayout";
import Wrapper from "@/components/Layouts/Wrapper";
import generateID from "@/lib/utils/generateId";
import { useCrud, Item } from '@/lib/services/hooks/CRUD';

const AddMovie = () => {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const router = useRouter();
    const { addItem } = useCrud();

    console.log(image)

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setYear(e.target.value);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setImage(files[0]); 
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!image) {
            console.error('No file selected');
            return;
        }
        const movieId = generateID(10);
        const newItem: Item = {
            movieId: movieId,
            title: title,
            year: year,
            feature: image?.name || "",
        };
    
        await addItem(newItem, image);
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
                    className="w-full flex flex-col-reverse lg:flex-row justify-between items-start gap-6"
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="image" className="border-2 bg-input rounded-[10px] border-white border-dashed w-full md:max-w-[473px] h-[504px] flex justify-center items-center cursor-pointer">
                        {image ? (
                            <Image  src={URL.createObjectURL(image)} alt="Selected Image" width="473" height="504" className="w-full h-full object-cover rounded-[10px]" />
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

export default AddMovie;
