import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	display: flex;
	margin-top: 30px;
`;

export const PosterOverlay = styled.div`
	border-radius: 24px;
	height: auto;
	max-height: 693px;
	max-width: 460px;
`;

export const Image = styled.img`
	object-fit: contain;
	height: 100%;
	width: 100%;
	border-radius: 24px;
`;

export const Thumb = styled.div`
	margin-left: 30px;
	padding: 15px;
`;
export const Title = styled.h4`
	font-weight: 700;
	font-size: 24px;
	color: #475069;
	margin: 0;
	margin-bottom: 20px;
`;
export const Overview = styled.p`
	max-width: 700px;
	font-weight: 400;
	font-size: 20px;
	line-height: 32px;
	margin-bottom: 24px;
`;

export const FeaturesList = styled.ul`
	margin-top: 24px;
	list-style: none;
	padding: 0;
	margin: 0;
	margin-top: 15px;
`;
export const FeaturesItem = styled.li`
  margin-bottom: 24px;
}
`;
export const Feature = styled.p`
	color: #475069;
	margin-bottom: 8px;
`;

export const Value = styled.div`
	font-weight: 400;
	font-size: 20px;
`;

export const StyledLink = styled(Link)`
	font-size: 18px;
	color: #475069;
	text-decoration: underline;

	&:hover {
		color: #9c92f8;
	}
`;

export const Subheading = styled.h5`
	font-weight: 600;
	font-size: 18px;
	color: #475069;
	margin-bottom: 20px;
`;
