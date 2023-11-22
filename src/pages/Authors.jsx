import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'

const Authors = () => {
    const [query, setQuery] = useState('Search')

    const handleSearchQuery = (newQuery) => {
      setQuery(newQuery);
    }

  return (
    <div>
      <Navbar query={query} onSearchQuery={handleSearchQuery}/>
    </div>
  )
}

export default Authors