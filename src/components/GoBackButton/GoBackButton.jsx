import { Link } from 'react-router-dom';
import styled from 'styled-components';
import propTypes from 'prop-types';


export const StyledButton = styled(Link)`
display: inline-block;
text-decoration: none;
padding: 10px 15px;
margin-top: 20px;
background-color: #9c92f8;
border-radius: 18px;
color: #fff;
`;

export const GoBackButton = ({to}) => {
    return (<StyledButton to={to}>Go Back</StyledButton>)
}

GoBackButton.propTypes = {
    to: propTypes.string
}