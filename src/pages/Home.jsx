import { useEffect, useState } from 'react';
import { MoviesList } from '../components/MoviesList/MoviesList';
import MoviesApiService from '../api-service';



const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
const moviesApiService = new MoviesApiService();

        async function getTopRatedMovies() {
            try {
                setLoading(true);
                setError(false);
                const fetchedMovies = await moviesApiService.fetchTopRatedMovies();
                setMovies(fetchedMovies);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

    getTopRatedMovies();
    }, []);

    return (
        <main>
            {error && <p>Sorry, something went wrong! Try reloading the page!</p>}
            {loading && <b>Loading data, please wait...</b>}
            {movies.length > 0 && <MoviesList movies={movies} />}
        </main>
    )
}

export default Home;