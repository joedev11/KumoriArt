import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({query, onSearchQuery}) => {
    const handleSearchValue = (event) => {
        onSearchQuery(event.target.value);
    }
  return (
    <section className="w-full">
        <div className="flex h-[100px] items-center px-[20px] lg:px-[60px]">
            <div className="flex items-center">
                <img src="./Images/wallpaper.png" alt="logo" className="h-9 lg:h-[50px] mr-auto"/>
                <h1 className="hidden ml-3 text-3xl font-bold lg:flex font-ubuntu text-zinc-800">KumoriArt</h1>
            </div>
            <div className="flex items-center justify-end flex-auto gap-2">
                <img src="./Images/search.png" alt="search-icon" className="h-[30px]"/>
                <input id="search" type="search" placeholder='Search' className="border rounded-md w-[250px] p-1" value={query} onChange={handleSearchValue}/>
            </div>
        </div>
        <div className="flex w-full border mx-auto px-3 lg:px-[20%] font-ubuntu text-xs lg:text-sm text-zinc-400 font-bold py-4">
            <Link to='/home' className="flex-auto text-center">HOME</Link>
            <Link to='/popular' className="flex-auto text-center">POPULAR</Link>
            <Link to='/collections' className="flex-auto text-center">COLLECTIONS</Link>
            <Link to='/authors' className="flex-auto text-center">AUTHORS</Link>
        </div>
    </section>
  )
}

export default Navbar