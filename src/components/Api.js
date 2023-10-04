import React, { useEffect, useState } from 'react';

function FetchData() {
  const [data, setData] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const textData = await response.text();
        setData(textData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <p className='demo-data' id="demo">{data}</p>
    </div>
  );
}

export default FetchData;
