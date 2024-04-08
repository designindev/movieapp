import { useEffect, useState } from 'react';
import { db } from "@/lib/utils/db";

const useFetchData = () => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    db.scan({ TableName: 'Movies' }, (err: any, fetchedData: any) => {
      if (err) {
        console.error('Error fetching data:', err);
      } else {
        const extractedItems = fetchedData.Items.map((item: any) => ({
          movieId: item.movieId.S,
          feature: item.feature.S,
          title: item.title.S,
          year: item.year.S
        }));
        setData(extractedItems);
      }      
    });
  }, []);

  return data;
};

export default useFetchData;
