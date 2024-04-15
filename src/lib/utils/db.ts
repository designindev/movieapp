import AWS from 'aws-sdk';
export const tableName = "Movies";
export const tableUser = "Users";
export const bucketName = "moviesbucket7"

export const db = new AWS.DynamoDB({
    region: 'eu-north-1',
    endpoint: 'https://dynamodb.eu-north-1.amazonaws.com',
    accessKeyId: 'AKIA6ODUZHNS56A5KBP6',
    secretAccessKey: '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',
});

export const s3 = new AWS.S3({
    region: 'eu-north-1',
    accessKeyId: 'AKIA6ODUZHNS56A5KBP6',
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
