import { useState, useEffect } from 'react';
import { databases } from '../libs/appwrite';

export const fetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await databases.listDocuments(
          import.meta.env.VITE_APPWRITE_EVENTS_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_EVENTS_COLLECTION_ID
        );
        setData(response.documents);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export const isEmptyData = (data) => !data || Object.keys(data).length === 0;
