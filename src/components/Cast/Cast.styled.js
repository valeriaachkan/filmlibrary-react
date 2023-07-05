import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 30px;
`;

export const Heading = styled.h6`
	font-size: 20px;
	margin-left: 20px;
`;

export const ContentList = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	padding: 0;
`;

export const ContentThumb = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 24px;
	width: 160px;
	text-align: center;
`;

export const ContentTitle = styled.p`
	font-weight: 600;
	margin-bottom: 10px;
`;

export const PosterOverlay = styled.div`
	height: 160px;
	width: 106.6px;
	border-radius: 24px;
	background-image: url('https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	overflow: hidden;
	margin-bottom: 8px;
`;
export const Image = styled.img`
	object-fit: contain;
	height: 100%;
	width: 100%;
`;
