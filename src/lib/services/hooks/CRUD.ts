import { useState } from 'react';
import { db, tableName } from '@/lib/utils/db';

export interface Item {
    movieId: string;
    feature: string;
    title: string;
    year: string;
}

export interface UseCrudResult {
    items: Item[];
    addItem: (item: Item) => Promise<void>;
    updateItem: (id: string, newItem: Item) => Promise<void>;
    deleteItem: (id: string) => Promise<void>;
}

export const useCrud = (): UseCrudResult => {
    const [items, setItems] = useState<Item[]>([]);

    const addItem = async (item: Item): Promise<void> => {
        try {
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

    const updateItem = async (id: string, newItem: Item): Promise<void> => {
        try {
            await db.updateItem({
                TableName: tableName,
                Key: {
                    id: { S: id },
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
                prevItems.map((item) => (item.feature === id ? newItem : item))
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
