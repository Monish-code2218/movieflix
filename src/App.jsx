import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Form from './components/Form'
import MovieList from './components/MovieList'




const App = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')



const getMovieRequest = async()=>{

  const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=bcba1532`

  const response = await fetch(url);
  const responseJson = await response.json();
  
  if(responseJson.Search){
    setMovies(responseJson.Search);
  }
 
  

}

useEffect(()=>{
  getMovieRequest(searchValue);
},[searchValue]);
  return (

    <Router>
      <div >
        <Navbar heading="MovieFlix"  />
        <div className='flex-col items-center justify-center'>
        <Form searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        <MovieList movies={movies} />
      </div>
    </Router>



  )
}

export default App