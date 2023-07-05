import { useEffect, useState } from 'react';
import { MoviesList } from '../components/MoviesList/MoviesList';
import {fetchTopRatedMovies} from '../api-service';
import BeatLoader from 'react-spinners/ClipLoader';

const override = {
	display: 'block',
	margin: '30px auto',
};


const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {

        async function getTopRatedMovies() {
            try {
                setLoading(true);
                setError(false);
                const fetchedMovies = await fetchTopRatedMovies();
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
            {loading && <BeatLoader
	color={'#9c92f8'}
	loading={loading}
	cssOverride={override}
	size={150}
	aria-label="Loading Spinner"
	data-testid="loader"
/>}
            {movies.length > 0 && <MoviesList movies={movies} heading={'Top Rated'} state={{from:'/'}}/>}
        </main>
    )
}

export default Home;