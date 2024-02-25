import styled from 'styled-components';

export const NavContainer = styled.div`
	display: flex;
	background: ${({ theme: { gradient } }) => gradient.main.background};
	border-radius: 8px;
	border-radius: 5px;
	max-width: 50rem;
	justify-content: space-between;
	box-sizing: border-box;
	gap: 4px;
	width: max-content;
	max-width: 100%;
	position: sticky;

	scrollbar-color: gray transparent;
	align-items: center;
	height: 4rem;
	@media screen and (max-width: 758px) {
		overflow-x: scroll;
		width: 100vw;
	}
`;

export const PositionContainer = styled.div`
	position: absolute;
	bottom: 0px;
	display: flex;
`;

export const NavItem = styled.div`
	padding: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
	text-underline-offset: 12px;
`;
