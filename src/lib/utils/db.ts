import AWS from 'aws-sdk';

export const db = new AWS.DynamoDB({
    region: 'eu-north-1',
    endpoint: 'https://dynamodb.eu-north-1.amazonaws.com',
    accessKeyId: 'AKIA6ODUZHNS7LHUKZ3F',
    secretAccessKey: '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',
});

export const tableName = 'Movies';

// const dynamoDB = new AWS.DynamoDB({
//   region: 'eu-north-1',
//   endpoint: process.env.DYNAMODB_ENDPOINT,
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// });