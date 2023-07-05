import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { fetchMovieDetails} from '../api-service';
import { Movie } from '../components/Movie/Movie';
import BeatLoader from 'react-spinners/ClipLoader';
import { GoBackButton } from '../components/GoBackButton/GoBackButton';

const override = {
	display: 'block',
	margin: '30px auto',
};


const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const { movieId } = useParams();
    const location =  useLocation();
    const goBackPathname = useRef(location.state?.from ?? '/movies');
    console.log(goBackPathname.current);

    useEffect(() => {

        async function getMovieDetails() {
            try {
                setLoading(true);
                setError(false);
                const fetchedMovie = await fetchMovieDetails(movieId);
                setMovieDetails(fetchedMovie);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        getMovieDetails();
    }, [movieId]);
    
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
            {movieDetails && !loading && 
            <>
            <GoBackButton to={goBackPathname.current}/> 
            <Movie movie={movieDetails}/>
            </>}
        </main>
    )

}

export default MovieDetails;