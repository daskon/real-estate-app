import React from 'react'
import "./filter.scss";

const Filter = () => {
  return (
    <div className='filterContainer'>
      <h1>Search Results For <b>Kandy</b></h1>
      <div className="top">
        <div className="item">
          <label htmlFor="search">Looking for</label>
          <input type="text" id='keyword' name='keyword' placeholder='Search...' />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Type</label>
          <select name="type" id="type">
            <option value="seeds">Seeds</option>
            <option value="plants">Plants</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="min">Minimum</label>
          <input type="number" id='min' name='min' placeholder='Minimum' />
        </div>
        <div className="item">
          <label htmlFor="max">Maximum</label>
          <input type="number" id='max' name='max' placeholder='Maximum' />
        </div>
        <button>
            <img src="/search.png" alt="search plants" />
        </button>
      </div>
    </div>
  )
}

export default Filter