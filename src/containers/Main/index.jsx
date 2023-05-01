import { useState } from 'react';
import Axios from 'axios';
import { MainContainer, Text } from './Main.styles';
import { Form } from '../../components/Form';
import { Input, CurrencyButton } from '../../components/Input';
import { StyledDiv } from '../../components/Input/Input.styles';
import { SelectComp } from '../../components/Select';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';

export function Main() {
	const [category, setCategory] = useState('');
	const [expense, setExpense] = useState('');
	const [description, setDescription] = useState('');
	const currencies = {
		dollar: 'USD',
		peso: 'COP',
	};
	const [activeCurrency, setActiveCurrency] = useState(currencies.dollar);
	const [loading, setLoading] = useState(false);

	function actualCurrency() {
		if (activeCurrency === currencies.dollar)
			setActiveCurrency(currencies.peso);
		if (activeCurrency === currencies.peso)
			setActiveCurrency(currencies.dollar);
	}

	function clearInput() {
		setCategory(null);
		setExpense('');
		setDescription('');
	}

	function checkForm() {
		if ((category === null || category === '') && expense === '')
			alert('Please select category and input total expense');
		else if (category === null || category === '')
			alert('Please select category');
		else if (expense === '') alert('Please input total expense');
		else postData();
	}

	const postData = () => {
		setLoading(true);
		Axios.post('/api/submit', {
			category: category.value,
			expense:
				activeCurrency === currencies.dollar
					? expense
					: (expense / 4600).toFixed(2),
			description: description,
		})
			.then((res) => {
				console.log('Posting data', res);
				clearInput();
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				alert('error on submit, check console log');
				setLoading(false);
			});
	};

	return (
		<MainContainer>
			<Form
				onSubmit={(e) => {
					e.preventDefault();
				}}
			>
				<Text>Category</Text>
				<SelectComp
					defaultValue={category}
					value={category}
					onChange={(t) => {
						setCategory(t);
					}}
				/>

				<Text>Amount</Text>
				<StyledDiv>
					<Input value={expense} onChange={setExpense} />
					<CurrencyButton onClick={actualCurrency}>
						{activeCurrency}
					</CurrencyButton>
				</StyledDiv>

				<Text>Description</Text>
				<Textarea value={description} onChange={setDescription} />

				<Button
					onClick={() => {
						checkForm();
					}}
				>
					{loading ? 'Loading...' : 'SUBMIT'}
				</Button>
			</Form>
		</MainContainer>
	);
}
