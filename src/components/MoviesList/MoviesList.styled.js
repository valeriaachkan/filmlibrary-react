import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Heading = styled.h3`
	font-weight: 600;
	font-size: 32px;
	line-height: 1.25;
	margin-top: 15px;
	margin-bottom: 15px;
	color: #475069;
`;

export const StyledLink = styled(Link)`
	font-weight: 400;
	font-size: 18px;
	margin-bottom: 15px;
	color: #475069;
	text-decoration: none;

	&:hover {
		color: #9c92f8;
	}
`;
