import styled from 'styled-components';

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: ${({ theme: { gradient } }) => gradient.main.background};
	border-radius: 8px;
	border-radius: 25px;
	padding: 1rem 0rem;
	min-width: 5rem;
	box-sizing: border-box;
	max-width: 20rem;
	pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
`;
