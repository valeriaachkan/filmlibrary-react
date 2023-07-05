import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { fetchMovieCast } from "../../api-service";
import { Container, ContentList, ContentThumb, ContentTitle, Heading, Image, PosterOverlay} from "./Cast.styled";
import BeatLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "30px auto",
  };

const Cast = () => {
    const [cast, setCast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const { movieId } = useParams();

    
    useEffect(() => {
        async function getMovieCast() {
            try {
                setLoading(true);
                setError(false);
                const fetchedCredits = await fetchMovieCast(movieId);
                console.log('credits', fetchedCredits.cast);
                setCast(fetchedCredits.cast);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        getMovieCast();
    }, [movieId]);

    console.log(cast);
    return (
        <div>
            {error && <p>Sorry, something went wrong! Try reloading the page!</p>}
            {loading && <BeatLoader
        color={'#9c92f8'}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
            {cast && !loading && <Container>
                <Heading>Cast</Heading>
                <ContentList>
                { cast.length > 20 ? cast.slice(0,20).map((actor) => (<ContentThumb key={actor.id}>
                    <PosterOverlay>
                        {actor.profile_path ? <Image src={`http://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} /> : <></>}
                    </PosterOverlay>
                    <ContentTitle>{actor.name}</ContentTitle>
                    <p>{actor.character}</p>
                </ContentThumb>)) : cast.map((actor) => (<ContentThumb key={actor.id}>
                    <PosterOverlay>
                        {actor.profile_path ? <Image src={`http://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} /> : <></>}
                    </PosterOverlay>
                    <ContentTitle>{actor.name}</ContentTitle>
                    <p>{actor.character}</p>
                </ContentThumb>))}
                </ContentList>
                </Container>}
        </div>
    )
}

export default Cast;