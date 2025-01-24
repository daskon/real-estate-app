import React from 'react'
import "./home.scss";
import SearchBar from '../../components/searchbar/SearchBar';

const Home = () => {
  return (
    <div className='home'>
      <div className='textContainer'>
        <div className='wrapper'>
          <h1 className='title'>Green Dreams Start Here.</h1>
          <p className='description'>
            Welcome to Diamond Plants, your go-to space for all things plant cultivation! 🌱 From beginner tips to expert tricks, we help you grow thriving plants and create your own green paradise. 🌿
          </p>
          <SearchBar/>
          <div className='status'>
            <div className='years'>
              <span>4+</span>
              <h2>Years</h2>
            </div>
            <div className='video-content'>
              <span>100+</span>
              <h2>Videos</h2>
            </div>
            <div className='subscribers'>
              <span>40+</span>
              <h2>Clients</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img src="/slide-plants.jpg" alt="" />
      </div>
    </div>
  )
}

export default Home