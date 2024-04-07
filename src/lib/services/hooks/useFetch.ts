// hook get data

import { useEffect } from 'react';
import AWS from 'aws-sdk';

const useFetchData = () => {
  useEffect(() => {
    const dynamoDB = new AWS.DynamoDB({
      endpoint: process.env.DYNAMODB_ENDPOINT,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });

    dynamoDB.scan({ TableName: 'movies' }, (err, data) => {
      if (err) {
        console.error('Error fetching data:', err);
      } else {
        console.log('Fetched data:', data);
      }
    });
  }, []);

  return console.log("data error");
};

export default useFetchData;
