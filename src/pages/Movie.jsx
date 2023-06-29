import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MoviesApiService from '../api-service';
import { MovieDetails } from '../components/MovieDetails/MovieDetails';

const Movie = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const { movieId } = useParams();

    useEffect(() => {
        const moviesApiService = new MoviesApiService();

        async function getMovieDetails(movieId) {
            try {
                setLoading(true);
                setError(false);
                const fetchedMovie = await moviesApiService.fetchMovieDetails(movieId);
                setMovieDetails(fetchedMovie);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        getMovieDetails(movieId);
    }, [movieId]);
    
    console.log(movieDetails);
    return (
        <main>
            {error && <p>Sorry, something went wrong! Try reloading the page!</p>}
            {loading && <b>Loading data, please wait...</b>}
            {movieDetails && !loading && <MovieDetails movie={movieDetails} />}
        </main>
    )
}

export default Movie;