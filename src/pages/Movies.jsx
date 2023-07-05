import { useEffect, useState } from 'react';
import BeatLoader from 'react-spinners/ClipLoader';
import { SearchInput } from '../components/SearchInput/SearchInput';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovie } from '../api-service';
import { MoviesList } from '../components/MoviesList/MoviesList';

const override = {
	display: 'block',
	margin: '30px auto',
};


const Movies = () => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query") || '';
    const location = useLocation();
    const backLink = location.pathname+location.search;

    useEffect(()=> {
        if(query === '') {
            return;
        }

        async function getMovieByQuery() {
            try {
                setLoading(true);
                setError(false);
                const fetchedMovie = await fetchMovie(query);
                setMovie(fetchedMovie.results);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        getMovieByQuery();
    }, [query])

    const handleChange = e => {
        const { value } = e.currentTarget;
        value === '' ? setSearchParams({}) : setSearchParams({query: value.toLowerCase()});
    };
    
    return (
        <main>
            <SearchInput onChange={handleChange} query={query}></SearchInput>
            {error && <p>Sorry, something went wrong! Try reloading the page!</p>}
            {loading && <BeatLoader
	color={'#9c92f8'}
	loading={loading}
	cssOverride={override}
	size={150}
	aria-label="Loading Spinner"
	data-testid="loader"
/>}
{movie && !loading && <MoviesList movies={movie} heading={'Results'} state={{from: backLink}}/>}     
        </main>
    )

}

export default Movies;