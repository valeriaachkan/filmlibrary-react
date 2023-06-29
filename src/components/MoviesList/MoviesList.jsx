import { Heading, StyledLink } from "./MoviesList.styled";

export const MoviesList = ({movies}) => {
    return (
        <>
        <Heading>Top Rated</Heading>
        <ul>
           {movies.map((movie) => {
            console.log(movie)
            return (
           <li><StyledLink to={`movies/${movie.id}`}>{movie.title}</StyledLink></li>)})}
        </ul>
        </>
    )
}