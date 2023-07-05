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
	flex-direction: column;
	flex-wrap: wrap;
	gap: 20px;
	padding: 0;
`;

export const ContentThumb = styled.li`
	background-color: #ebeef5;
	border-radius: 24px;
	padding: 20px 25px;
	max-width: 1500px;
`;

export const ContentTitle = styled.p`
	font-weight: 600;
	margin-bottom: 10px;
`;
