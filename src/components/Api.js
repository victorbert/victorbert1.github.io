import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="news-container">
    <h3>Today News</h3>
    {data.map(item => (
      <div key={item.id} className="news-item">
        <h2 className="news-title">
        <Link to={`/news/${item.id}`}>{item.title}</Link>
        </h2>
      </div>
    ))}
  </div>
  
  );
}

export default FetchData;
