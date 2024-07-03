import React, {useState, useEffect} from 'react';
import '../styles.css';
import MovieCard from "./MovieCard";

//This function demonstrates the movie grid that will be shown on the screen
export default function MoviesGrid() {

    //setting the movies on the screen
    const [movies, setMovies] = useState([]);
    //the search bar terms
    const [searchTerm, setSearchTerm] = useState("");
    //filtering by genre
    const [genre, setGenre] = useState("All Genres");
    //filtering by rating
    const [rating, setRating] = useState("All Ratings");

    useEffect(() => {
        fetch("movies.json")
            .then(response => response.json())
            .then(data => setMovies(data))
    }, []);

    //handles the searched text
    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value);
    };

    //handles the filter genre
    const handleGenreChange = (e) => {
        setGenre(e.target.value)
    };

    //handles the filter rating
    const handleRatingChange = (e) => {
        setRating(e.target.value)
    };

    //check if the searched genre matches with any movie's genre
    const matchesGenre = (movie, genre) => {
        return genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase()
    };


    //check if the searched rating matches with any movie's rating
    //check the rating filter bar as Strings
    //then return the corresponding movies with that rating
    const matchesRating = (movie, rating) => {
        if (rating === "Good") {
            return movie.rating >= 8;
        } else if (rating === "Ok") {
            return movie.rating >=5 && movie.rating < 8;
        } else if (rating === "Bad") {
            return movie.rating < 5;
        } else {
            return true;
        }

    };

    //check if the searched term matches with any movie's title
    const matchesTitle = (movie, searchTerm) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    }


    //filtering the movie by looking at the movie title and the typed message
    //lower-case for case-sensitive
    const filterMovies = movies.filter((movie) =>
        matchesGenre(movie, genre) &&
        matchesRating(movie, rating) &&
        matchesTitle(movie, searchTerm)
    );

    return (
        <div>

            {/*handles the text search bar*/}
            <input input="text"
                   className='search-input'
                   placeholder="Search movie..."
                   value={searchTerm}
                   onChange={handleSearchTerm}
            />

            <div className='filter-bar'>
                <div className='filter-slot'>
                    <label>Genre</label>
                    <select className='filter-dropdown' value={genre} onChange={handleGenreChange}>
                        <option>All Genres</option>
                        <option>Action</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                    </select>
                </div>

                <div className='filter-slot'>
                    <label>Rating</label>
                    <select className='filter-dropdown' value={rating} onChange={handleRatingChange}>
                        <option>All Ratings</option>
                        <option>Good</option>
                        <option>Ok</option>
                        <option>Bad</option>
                    </select>
                </div>
            </div>

            {/*handle the movies showed on the screen*/}
            <div className='movies-grid'>
                {filterMovies.map(movie => (
                    <MovieCard movie={movie} key={movie.id}> </MovieCard>
                ))}
            </div>


        </div>
    )
}

