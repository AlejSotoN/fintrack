import { useState } from 'react';
import { Form } from '../../components/Form';
import { Input, CurrencyButton } from '../../components/Input';
import { StyledDiv } from '../../components/Input/Input.styles';
import { SelectComp } from '../../components/Select';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { Text } from '../Main/Main.styles';
import { useAPI } from '../../hooks/useAPI';

const categories = [
	{ value: 'Alojamiento', label: 'Alojamiento' },
	{ value: 'Comida', label: 'Comida' },
	{ value: 'Viajes', label: 'Viajes' },
	{ value: 'Bienestar', label: 'Bienestar' },
	{ value: 'Salud', label: 'Salud' },
	{
		value: 'Ocio y Entretenimiento (salidas y eventos)',
		label: 'Ocio y Entretenimiento',
	},
	{ value: 'Transporte (taxis)', label: 'Transporte' },
	{ value: 'Bienes materiales (shopping)', label: 'Bienes Materiales' },
	{ value: 'Prestamos', label: 'Prestamos e Inversiones' },
	{ value: 'Familia', label: 'Familia' },
	{ value: 'Servicios / suscripciones', label: 'Servicios / suscripciones' },
];

const paymentMethods = [
	{ value: 'Regions', label: 'Regions' },
	{ value: 'TD', label: 'TD' },
	{ value: 'BBVA Debit', label: 'BBVA Debit' },
	{ value: 'BBVA Credit', label: 'BBVA Credit' },
	{ value: 'BBVA PSE', label: 'BBVA PSE' },
	{ value: 'Deel', label: 'Deel' },
	{ value: 'Payoneer', label: 'Payoneer' },
	{ value: 'Binance', label: 'Binance' },
];

export function Expenses() {
	const [category, setCategory] = useState('');
	const [expense, setExpense] = useState('');
	const [description, setDescription] = useState('');
	const [card, setCard] = useState('');
	const currencies = {
		dollar: 'USD',
		peso: 'COP',
	};
	const [activeCurrency, setActiveCurrency] = useState(currencies.dollar);
	const [loading, setLoading] = useState(false);
	const { submitExpense } = useAPI();
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
		setCard(null);
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
		console.log({ expense });
		const originalAmount = Number(expense);
		const isDollar = activeCurrency === currencies.dollar;
		const dataToPost = {
			category: category.value,
			expense: isDollar
				? originalAmount
				: Number((originalAmount / 4000).toFixed(2)),
			description: description,
			method: card.value,
			originalAmount,
		};
		console.log(dataToPost);
		submitExpense(dataToPost)
			.then(({ data }) => {
				console.log('Posting data', data);
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
		<Form
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<Text>Category</Text>
			<SelectComp
				defaultValue={category}
				value={category}
				options={categories}
				onChange={(t) => {
					setCategory(t);
				}}
			/>

			<Text>Amount</Text>
			<StyledDiv>
				<Input type="number" value={expense} onChange={setExpense} />
				<CurrencyButton onClick={actualCurrency}>
					{activeCurrency}
				</CurrencyButton>
			</StyledDiv>

			<Text>Description</Text>
			<Textarea value={description} onChange={setDescription} />
			<Text>Payment Method (optional)</Text>
			<SelectComp
				defaultValue={card}
				value={card}
				options={paymentMethods}
				onChange={(t) => {
					setCard(t);
				}}
			/>

			<Button
				onClick={() => {
					checkForm();
				}}
			>
				{loading ? 'Loading...' : 'SUBMIT'}
			</Button>
		</Form>
	);
}
