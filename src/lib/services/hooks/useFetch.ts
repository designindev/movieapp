import { useEffect } from 'react';
import { db } from "@/lib/utils/db";

const useFetchData = () => {
  useEffect(() => {
    db.scan({ TableName: 'Movies' }, (err: any, data: any) => {
      if (err) {
        console.error('Error fetching data:', err);
      }
    });
  }, []);

  return console.log("data error");
};

export default useFetchData;
