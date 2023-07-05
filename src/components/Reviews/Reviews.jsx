import { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { fetchMovieReviews } from "../../api-service";
import { Container, Heading, ContentList, ContentThumb, ContentTitle} from './Reviews.styled';
import BeatLoader from 'react-spinners/ClipLoader';

const override = {
	display: 'block',
	margin: '30px auto',
};


const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const { movieId } = useParams();

    
    useEffect(() => {
        async function getMovieReviews() {
            try {
                setLoading(true);
                setError(false);
                const fetchedReviews = await fetchMovieReviews(movieId);
                console.log('reviews', fetchedReviews.results);
                setReviews(fetchedReviews.results);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        getMovieReviews();
    }, [movieId]);

    console.log(reviews);
    return (
        <>
            {error && <ContentTitle>Sorry, something went wrong! Try reloading the page!</ContentTitle>}
            {loading && <BeatLoader
	color={'#9c92f8'}
	loading={loading}
	cssOverride={override}
	size={150}
	aria-label="Loading Spinner"
	data-testid="loader"
/>}
            {reviews && reviews.length === 0 && !loading && 
            <Container>
                <ContentTitle>We don`t have any reviews for this movie.</ContentTitle>
            </Container>}
            {reviews && reviews.length >=1 && !loading && 
            <Container>
        <Heading>Reviews</Heading>
        <ContentList>
           {reviews.map((review) => (<ContentThumb key={review.id}>
        <ContentTitle>Author: {review.author}</ContentTitle>
        <p>{review.content.slice(0,2000)}</p>
        </ContentThumb>))}
        </ContentList>
        </Container>}
        </>
    )
}

export default Reviews;

