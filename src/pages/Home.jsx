import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import GetEditorialPhotos from '../components/Api/GetEditorialPhotos';
import GetAllCollections from '../components/Api/GetAllCollections';

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
      <div className=''>
        <GetEditorialPhotos /> 
      </div>
      <div className="py-3 mx-auto mt-9 bg-zinc-50">
        <GetAllCollections />
      </div> 
    </div>
  );
};

export default Home;
