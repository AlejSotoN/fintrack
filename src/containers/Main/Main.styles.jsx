import styled from 'styled-components';

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: auto;
	margin: auto;
	box-sizing: border-box;
`;

export const PageContent = styled.div`
	display: flex;
	padding: 4rem;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	gap: 2rem;
	box-sizing: border-box;
	@media screen and (max-width: 758px) {
		padding: 6px;
	}
`;

export const Title = styled.div`
	font-size: 2rem;
	line-height: 4rem;
`;

export const Text = styled.div`
	line-height: 1.2rem;
`;
