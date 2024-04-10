import AWS from 'aws-sdk';
export const tableName = "Movies";
export const bucketName = "moviesbucket7"

export const db = new AWS.DynamoDB({
    region: 'eu-north-1',
    endpoint: 'https://dynamodb.eu-north-1.amazonaws.com',
    accessKeyId: 'AKIA6ODUZHNS7LHUKZ3F',
    secretAccessKey: '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',
});

export const s3 = new AWS.S3({
    region: 'eu-north-1',
    accessKeyId: 'AKIA6ODUZHNS7LHUKZ3F',
    secretAccessKey: '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',
});

export const generatePresignedUrl = (bucketName: string, key: string): string => {
    const params = {
        Bucket: bucketName,
        Key: key,
        Expires: null,
    };

    return s3.getSignedUrl('getObject', params);
};

// const dynamoDB = new AWS.DynamoDB({
//   region: 'eu-north-1',
//   endpoint: process.env.DYNAMODB_ENDPOINT,
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// });