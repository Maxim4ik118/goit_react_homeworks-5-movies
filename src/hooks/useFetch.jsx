import { useCallback, useState } from 'react';

export const useFetch = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const fetchData = useCallback(async (requestFunction) => {
    setIsFetching(true);
    try {
      const data = await requestFunction;
      // const response = await fetch(url, body);
      // const data = await response.json();

      setData(data);
    } catch (e) {
      setError(e);
    } finally {
      setIsFetching(false);
    }
  }, []);

  return { isFetching, data, error, fetchData };
};
