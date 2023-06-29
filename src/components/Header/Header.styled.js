import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
	width: 100%;
	border-bottom: 1px solid #475069;
`;

export const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	padding: 0;
	margin-left: 15px;
`;

export const Link = styled(NavLink)`
	display: inline-block;
	padding: 28px 0;
	height: 100%;
	color: #475069;
	font-weight: 600;
	font-size: 16px;
	text-decoration: none;
	margin-right: 20px;

	&.active {
		color: #9c92f8;
	}
`;
