import { useState } from 'react';
// import AWS from 'aws-sdk';

// const dynamoDB = new AWS.DynamoDB({
//     endpoint: process.env.DYNAMODB_ENDPOINT,
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     tableName: process.env.AWS_TABLE_NAME,
// });

const dynamoDB = ({
    endpoint: process.env.DYNAMODB_ENDPOINT,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    tableName: process.env.AWS_TABLE_NAME,
});

export interface Item {
    id: string;
    name: string;
    description: string;
}

export interface UseCrudResult {
    items: Item[];
    addItem: (item: Item) => Promise<void>;
    updateItem: (id: string, newItem: Item) => Promise<void>;
    deleteItem: (id: string) => Promise<void>;
}

const useCrud = (): UseCrudResult => {
    const [items, setItems] = useState<Item[]>([]);

    const addItem = async (item: Item): Promise<void> => {
        try {
            const params = {
                TableName: dynamoDB.tableName,
                Item: {
                    id: { S: item.id },
                    name: { S: item.name },
                    description: { S: item.description },
                },
            };

            // await dynamoDB.putItem(params).promise();

            setItems((prevItems) => [...prevItems, item]);
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    const updateItem = async (id: string, newItem: Item): Promise<void> => {
        try {
            const params = {
                TableName: dynamoDB.tableName,
                Key: {
                    id: { S: id },
                },
                UpdateExpression: 'SET #name = :name, #description = :description',
                ExpressionAttributeNames: {
                    '#name': 'name',
                    '#description': 'description',
                },
                ExpressionAttributeValues: {
                    ':name': { S: newItem.name },
                    ':description': { S: newItem.description },
                },
                ReturnValues: 'UPDATED_NEW',
            };
            // await dynamoDB.updateItem(params).promise();

            setItems((prevItems) =>
                prevItems.map((item) => (item.id === id ? newItem : item))
            );
        } catch (error) {
            console.error('Error updating item:', error);
        }
    };

    const deleteItem = async (id: string): Promise<void> => {
        try {
            const params = {
                TableName: dynamoDB.tableName,
                Key: {
                    id: { S: id },
                },
            };
            // await dynamoDB.deleteItem(params).promise();

            setItems((prevItems) =>
                prevItems.filter((item) => item.id !== id)
            );
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return { items, addItem, updateItem, deleteItem };
};

export default useCrud;
