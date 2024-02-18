import styled from 'styled-components';

export const BudgetContainer = styled.div`
	flex-direction: column;
	display: flex;
	align-items: center;

	min-width: 20rem;
	width: 100%;
`;

export const BudgetTitle = styled.h1`
	font-size: 2rem;
`;

export const BudgetList = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
`;

export const BudgetItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 1rem;
	padding: 1rem;
	background: linear-gradient(
		120deg,
		rgba(178, 161, 214, 0.2) 19.88%,
		rgba(79, 170, 190, 0.2) 123.6%
	);
	border-radius: 10px;
	width: 70%;
`;

export const BudgetItemTitle = styled.span`
	font-size: 1.25rem;
	width: 100%;
	text-align: left;
`;

export const BudgetAmount = styled.span`
	width: 100%;
	font-size: 1rem;
	font-weight: 500;
	color: ${({ color }) => {
		return color || 'white';
	}};
	text-align: right;
`;
