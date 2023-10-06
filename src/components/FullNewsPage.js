import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function FullNewsPage() {
  const [news, setNews] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const jsonData = await response.json();
        setNews(jsonData);
        setLoading(false);
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
        </>
      )}
    </div>
  );
}

export default FullNewsPage;

