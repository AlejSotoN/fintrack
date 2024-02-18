import { useEffect } from 'react';
import { useAPI } from '../../hooks/useAPI';
import {
	BudgetAmount,
	BudgetContainer,
	BudgetItem,
	BudgetItemTitle,
	BudgetList,
	BudgetTitle,
} from './Budget.styles';

const budgets = [
	{
		amount: 1000,
		spent: 100,
		category: 'Food',
	},
	{
		amount: 300,
		spent: 50,
		category: 'Entertainment',
	},
	{
		amount: 500,
		spent: 400,
		category: 'Travel',
	},
	{
		amount: 100,
		spent: 150,
		category: 'Clothes',
	},
	{
		amount: 500,
		spent: 100,
		category: 'Health',
	},
];

export function Budget() {
	const { getBudgets, loading } = useAPI();
	function getColorBySpentAmount(spent, total) {
		const percentage = (spent / total) * 100;
		if (percentage < 80) {
			return 'green';
		}
		if (percentage < 100) {
			return 'orange';
		}
		return 'red';
	}

	useEffect(() => {
		console.log('hey');
		getBudgets().then((res) => {
			const data = res?.data;
			console.log(data);
		});
	}, []);
	return (
		<BudgetContainer>
			<BudgetTitle>Budget</BudgetTitle>

			<BudgetList>
				{budgets.map(({ amount, spent, category }, index) => {
					return (
						<BudgetItem key={index}>
							<BudgetItemTitle>{category}</BudgetItemTitle>

							<BudgetAmount>
								<BudgetAmount color={getColorBySpentAmount(spent, amount)}>
									{spent}
								</BudgetAmount>
								/ {amount}
							</BudgetAmount>
						</BudgetItem>
					);
				})}
			</BudgetList>
		</BudgetContainer>
	);
}
