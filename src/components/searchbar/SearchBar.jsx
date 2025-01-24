import React from 'react'
import "./searchBar.scss";

const SearchBar = () => {
  return (
    <div className='search-bar'>
        <form action="">
            <input type="text" name='location' placeholder='Location' />
            <input
                type="number"
                name="minPrice"
                min={0}
                max={100000000}
                placeholder='Min Price'
            />
            <input
                type="number"
                name="maxPrice"
                min={0}
                max={100000000}
                placeholder='Max Price'
            />
            <button>
                <img src="/search.png" alt="search plants" />
            </button>
        </form>
    </div>
  )
}

export default SearchBar