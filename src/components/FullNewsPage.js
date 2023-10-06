import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchData from './FetchData';

function FullNewsPage() {
  const [news, setNews] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        if (id !== undefined) {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
          const jsonData = await response.json();
          setNews(jsonData);
          setLoading(false);
        } else {
          console.error('ID is undefined');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }
  
    fetchNews();
  }, [id]);

  return (
    <div className="full-news-page">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2 className="news-title">{news.title}</h2>
          <p className="news-body">{news.body}</p>
          <FetchData />
        </>
      )}
    </div>
  );
}

export default FullNewsPage;

