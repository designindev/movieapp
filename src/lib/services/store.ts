import { useState, useEffect } from 'react';
import useFetchData from './hooks/useFetch';
import { moviesSchema } from '@/lib/schemas/movieSchema';

const useStoreData = (): moviesSchema[] => {
  const [data, setData] = useState<moviesSchema[]>([]);
  const fetchedData = useFetchData();

  useEffect(() => {
    if (Array.isArray(fetchedData) && fetchedData.length > 0) {
        setData(fetchedData);
      }
  }, [fetchedData]);

  return data;
};

export default useStoreData;

