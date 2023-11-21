import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import GetPhotos from '../components/Api/GetPhotos';

const Home = () => {
  const [query, setQuery] = useState('Wallpapers');

  const handleSearchQuery = (newQuery) => {
    setQuery(newQuery);
  }

  useEffect(() => {

  }, []);

  return (
    <div className="w-screen">
      <Navbar query={query} onSearchQuery={handleSearchQuery}/>
      <GetPhotos query={query}/>  
    </div>
  );
};

export default Home;
