import './App.css';
import SearchIcon from './search.svg'
import { useEffect, useState } from 'react';
import MovieCard from './components/MovieCard';

const API_KEY = "c1126c22"

const API_URl = "http://www.omdbapi.com?apikey="+API_KEY

function App() {
    const [movies, setMovies ] = useState([])
    const [search, setSearch] = useState('')

    const searchMovie = async (title) =>{
        const response = await fetch(`${API_URl}&s=${title}`)
        const data = await response.json();
        console.log(data.Search)
        setMovies(data.Search)
    }

    useEffect (()=>{
        searchMovie('spiderman')
    },[])

  return (
    <div className="app">
      <h1>Moviezz</h1>
      <div className='search'>
        <input 
            placeholder='Search for Movies'
            value = {search}
            onChange={(e)=>{setSearch(e.target.value)}}
        />
        <img
            src= {SearchIcon}
            alt= "search"
            onClick = {()=>{searchMovie(search)}}
        /> 
      </div>
      {
        movies ?.length>0
            ?(
                <div className='container'>
                    {movies.map((movie)=> (
                        <MovieCard movie= {movie}/>
                    ))}
                </div>
            ): (
                <div className='empty'>
                    <h2>No Movies Found!</h2>
                </div>
            )
      }
    </div>
  );
}

export default App;
