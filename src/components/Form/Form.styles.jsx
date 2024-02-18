import styled from 'styled-components';

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: linear-gradient(
		120deg,
		rgba(178, 161, 214, 0.2) 19.88%,
		rgba(79, 170, 190, 0.2) 123.6%
	);
	border-radius: 8px;
	border-radius: 25px;
	padding: 1rem 0rem;
	min-width: 5rem;
	box-sizing: border-box;
	max-width: 20rem;
	pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
`;
