import styled from 'styled-components';
import propTypes from 'prop-types';


export const StyledInput = styled.input`
width: 200px;
    padding: 5px;
    margin-top: 20px;
    border: 2px solid #9c92f8;
    border-radius: 7px;
    outline: none;
`;

export const SearchInput = ({onChange, query}) => {
    return (<StyledInput
        type="text"
        name="searchQuery"
        value={query}
        onChange={onChange}
       ></StyledInput>)
}

SearchInput.propTypes = {
    onChange: propTypes.func,
    query: propTypes.string
}