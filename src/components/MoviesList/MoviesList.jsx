import { Heading, StyledLink } from "./MoviesList.styled";
import propTypes from 'prop-types';


export const MoviesList = ({movies, heading, state}) => {

    return (
        <>
        <Heading>{heading}</Heading>
        <ul>
           {movies.map((movie) => {
            return (
           <li key={movie.id}><StyledLink to={state.from === '/' ? `movies/${movie.id}` : `${movie.id}`} state={{from: state.from}}>{movie.title}</StyledLink></li>)})}
        </ul>
        </>
    )
}

MoviesList.propTypes = {
    movies: propTypes.arrayOf(propTypes.object),
    heading: propTypes.string,
    state: propTypes.object
}