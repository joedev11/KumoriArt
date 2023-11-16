import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({query, onSearchQuery}) => {
    const handleSearchValue = (event) => {
        onSearchQuery(event.target.value);
    }
  return (
    <section className="">
        <div className="flex w-full h-[100px] items-center px-[60px]">
            <div className="flex items-center flex-auto">
                <img src="./Images/wallpaper.png" alt="logo" className="h-[50px]"/>
                <h1 className="flex-auto font-ubuntu text-3xl ml-3 font-bold text-zinc-800">KumoriArt</h1>
            </div>
            <div className="flex flex-auto items-center justify-end gap-2">
                <img src="./Images/search.png" alt="search-icon" className="h-[30px]"/>
                <input id="search" type="search" placeholder='Search' className="border rounded-md w-[250px] p-1" value={query} onChange={handleSearchValue}/>
            </div>
        </div>
        <div className="flex w-full border mx-auto px-[20%] font-ubuntu text-sm text-zinc-400 font-bold py-4">
            <Link to='/home' className="flex-auto text-center">HOME</Link>
            <Link to='/popular' className="flex-auto text-center">POPULAR</Link>
            <Link to='/categories' className="flex-auto text-center">CATEGORIES</Link>
            <Link to='/photos' className="flex-auto text-center">PHOTOS</Link>
        </div>
    </section>
  )
}

export default Navbar