import { StyledForm } from './Form.styles';

export function Form({ children, onSubmit }) {
	return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
}
