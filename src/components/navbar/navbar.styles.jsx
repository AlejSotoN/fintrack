import styled from 'styled-components';

export const NavContainer = styled.div`
	display: flex;

	background: linear-gradient(
		120deg,
		rgba(178, 161, 214, 0.2) 19.88%,
		rgba(79, 170, 190, 0.2) 123.6%
	);
	border-radius: 8px;
	border-radius: 5px;
	padding: 1rem;
	margin: 0rem 1rem;
	max-width: 50rem;
	justify-content: space-between;
	box-sizing: border-box;
	overflow-x: scroll;
	width: max-content;
	max-width: 100%;
	position: absolute;
	bottom: 0px;
`;

export const NavItem = styled.div`
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
	text-underline-offset: 12px;
`;
