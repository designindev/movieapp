import useFetchData from './hooks/useFetch';
import { moviesSchema } from '@/lib/schemas/movieSchema';

const useStoreData = (): moviesSchema[] => {
  const fetchedData = useFetchData();
  return fetchedData;
};

export default useStoreData;