import React from "react";
import { Outlet } from "react-router";
import { Container, PosterOverlay, Thumb, Title, Image, Overview, FeaturesList, FeaturesItem, Feature,  Value, StyledLink, Subheading } from "./Movie.styled"
import propTypes from 'prop-types';


export const Movie = ({movie}) => {
    const genres = movie.genres.map(genre => genre.name);
    const countries = movie.production_countries.map((country) => country.name);
    
    return (
    <>
        <Container data-id={movie.id}>
        <PosterOverlay>
            <Image src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        </PosterOverlay>
        <Thumb>
            <Title>{movie.title}</Title>
            <Overview>{movie.overview}</Overview>
            <FeaturesList>
                <FeaturesItem>
                    <Feature>Rating</Feature>
                    <Value>{movie.vote_average.toFixed(1)}</Value>
                </FeaturesItem>
                <FeaturesItem>
                    <Feature>Genres</Feature>
                    <Value>{genres.join(', ')}</Value>
                </FeaturesItem>
                <FeaturesItem>
                    <Feature>Country</Feature>
                    <Value>{countries.join(', ')}</Value>
                </FeaturesItem>
                <FeaturesItem>
                    <Feature>Release Date</Feature>
                    <Value>{movie.release_date}</Value>
                </FeaturesItem>
                <FeaturesItem>
                    <Feature>Run time</Feature>
                    <Value>{movie.runtime} min</Value>
                </FeaturesItem>
            </FeaturesList>
            <FeaturesList>
                <Subheading>Additional information</Subheading>
                <FeaturesItem><StyledLink to='cast'>Cast</StyledLink></FeaturesItem>
                <FeaturesItem><StyledLink to='reviews'>Reviews</StyledLink></FeaturesItem>
            </FeaturesList>
        </ Thumb>
        </Container>
        <Outlet />
    </>
    )
}

Movie.propTypes = {
    movie: propTypes.object
}