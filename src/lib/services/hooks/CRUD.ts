import { useState } from 'react';
import { db, tableName, s3, bucketName } from '@/lib/utils/db';

export interface Item {
    movieId: string;
    feature: string;
    title: string;
    year: string;
}

export interface UseCrudResult {
    items: Item[];
    addItem: (item: Item, file: File) => Promise<void>;
    updateItem: (id: string, newItem: Item, file?: File) => Promise<void>;
    deleteItem: (id: string) => Promise<void>;
}

export const useCrud = (): UseCrudResult => {
    const [items, setItems] = useState<Item[]>([]);

    const addItem = async (item: Item, file: File): Promise<void> => {
        try {
            const uploadParams = {
                Bucket: bucketName,
                Key: file.name,
                Body: file,
                ContentType: file.type,
            };
            const uploadData = await s3.upload(uploadParams).promise();
            item.feature = uploadData.Location;
    
            await db.putItem({
                TableName: tableName,
                Item: {
                    'movieId': {S: item.movieId},
                    'feature': { S: item.feature },
                    'title': { S: item.title },
                    'year': { S: item.year },
                },
            }).promise();
    
            setItems((prevItems) => [...prevItems, item]);
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };
    
    const updateItem = async (id: string, newItem: Item, file?: File): Promise<void> => {
        try {
            if (file) {
                const uploadParams = {
                    Bucket: bucketName,
                    Key: file.name,
                    Body: file,
                    ContentType: file.type,
                };
                const uploadData = await s3.upload(uploadParams).promise();
                newItem.feature = uploadData.Location;
            }
    
            await db.updateItem({
                TableName: tableName,
                Key: {
                    movieId: { S: id },
                },
                UpdateExpression: 'SET feature = :feature, #title = :title, #year = :year',
                ExpressionAttributeNames: {
                    '#title': 'title',
                    '#year': 'year',
                },
                ExpressionAttributeValues: {
                    ':feature': { S: newItem.feature },
                    ':title': { S: newItem.title },
                    ':year': { S: newItem.year },
                },
                ReturnValues: 'UPDATED_NEW',
            }).promise();
    
            setItems((prevItems) =>
                prevItems.map((item) => (item.movieId === id ? newItem : item))
            );
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };
    
    const deleteItem = async (id: string): Promise<void> => {
        try {
            await db.deleteItem({
                TableName: tableName,
                Key: {
                    id: { S: id },
                },
            }).promise();

            setItems((prevItems) =>
                prevItems.filter((item) => item.feature !== id)
            );
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return { items, addItem, updateItem, deleteItem };
};

export default useCrud;
