import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import MovieList from './components/MovieList/MovieList'
import Header from './components/Header/Header'
import SearchBox from './components/SearchBox/SearchBox'
import AddFavourite from './components/AddFavourite/AddFavourite'
import RemoveFavourite from './components/RemoveFavourite/RemoveFavourite'
import MainBanner from './components/MainBanner/MainBanner'

const App = () => {
  const[movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favourites, setFavourites] = useState([])

  const getMoviesRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=b76eb1d5`;
    const response = await fetch(url);
    const responseJSON = await response.json();

    if(responseJSON.Search) {
      console.log(responseJSON);
      setMovies(responseJSON.Search);
    }
  };

  useEffect(() => {
    getMoviesRequest(searchValue);
  }, [searchValue]);


  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-app-movie-favourites')
      );

      if (movieFavourites) {
        setFavourites(movieFavourites);
      }
    }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
  }

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter((favourite) => 
    favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  return (
    <div className="container-fluid">
      <div className="header d-flex align-items-center mt-4 mb-4">
        <Header heading='Movie App' color='danger'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        <a className="m-2 text-light" href="#">Movie Reviews</a>
        <a className="m-2 text-light" href="#">FAQ</a>
      </div>
      <div className="d-flex align-items-center justify-content-center banner">
        <MainBanner />
      </div>
      <div className="row">
        <MovieList movies={movies}
         handleFavouritesClick={addFavouriteMovie} 
         favouriteComponent={AddFavourite} />
      </div>
      <div>
        <Header heading='Favourites List' color='light' className="w-100" />
        <div className="row">
          <MovieList movies={favourites}
            handleFavouritesClick={removeFavouriteMovie} 
            favouriteComponent={RemoveFavourite} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
