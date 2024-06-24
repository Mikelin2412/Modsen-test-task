import { useState, useEffect } from 'react';

interface IUseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

const useFetch = <T>(url: string, options?: object): IUseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP Error! Status code: ${response.status}`);
        }
        const result: T = await response.json();
        setData(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;
