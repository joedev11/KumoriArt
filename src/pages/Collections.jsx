import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import GetCollections from '../components/Api/GetCollections'

const Collections = () => {
  const [query, setQuery] = useState('Search')

  const handleSearchQuery = (newQuery) => {
    setQuery(newQuery);
  }

  return (
    <div>
      <Navbar query={query} onSearchQuery={handleSearchQuery}/>
      <GetCollections query={query}/>
    </div>
  )
}

export default Collections