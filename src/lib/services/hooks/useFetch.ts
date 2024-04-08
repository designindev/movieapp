import { useEffect } from 'react';
// import AWS from 'aws-sdk';

const useFetchData = () => {
  useEffect(() => {
    // const dynamoDB = new AWS.DynamoDB({
    //   endpoint: process.env.DYNAMODB_ENDPOINT,
    //   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    // });

    const dynamoDB = {
      scan: (p0: { TableName: string }, p1: (err: any, data: any) => void) => {
        const fakeData = [{ id: 1, name: 'Movie 1' }, { id: 2, name: 'Movie 2' }];
        const err = null;
        setTimeout(() => {
          if (err) {
            p1(err, null);
          } else {
            p1(null, fakeData);
          }
        }, 1000);
      },
    };

    dynamoDB.scan({ TableName: 'movies' }, (err: any, data: any) => {
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
