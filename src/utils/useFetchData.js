import { useState, useEffect } from 'react';
import { databases } from '../libs/appwrite';

export const useFetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isCancelled = false;

    const fetchData = async () => {
      try {
        const response = await databases.listDocuments(
          import.meta.env.VITE_APPWRITE_EVENTS_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_EVENTS_COLLECTION_ID
        );
        if (!isCancelled) setData(response.documents);
      } catch (err) {
        console.error('Error fetching data:', err);
        if (!isCancelled) setError(err);
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, []);

  return { data, isLoading, error };
};

export const parseJson = (value, fallback) => {
  try {
    return JSON.parse(value) ?? fallback;
  } catch (err) {
    console.error('Error parsing JSON:', err);
    return fallback;
  }
};
