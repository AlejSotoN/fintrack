import { useCallback, useEffect, useState } from 'react';
import { useAPI } from '../../hooks/useAPI';
import {
	BudgetAmount,
	BudgetContainer,
	BudgetItem,
	BudgetItemTitle,
	BudgetList,
	BudgetTitle,
} from './Budget.styles';

export function Budget() {
	const [budgets, setBudgets] = useState([]);
	const { getBudgets, loading } = useAPI();
	function getColorBySpentAmount(spent, total) {
		const percentage = (spent / total) * 100;
		if (percentage < 80) {
			return '#6dde74';
		}
		if (percentage < 100) {
			return 'orange';
		}
		return '#cf3232';
	}

	const loadBudgets = useCallback(
		function () {
			if (!budgets.length && !loading) {
				getBudgets()
					.then((res) => {
						const data = res?.data;
						setBudgets(data.budgets);
					})
					.catch((err) => {
						console.log(err);
					});
			}
		},
		[budgets, getBudgets, loading],
	);
	useEffect(() => {
		console.log('hey');
		loadBudgets();
	}, [loadBudgets]);

	const totalAmount = budgets.reduce((acc, { amount }) => acc + amount, 0);
	const totalSpent = budgets.reduce((acc, { spent }) => acc + spent, 0);

	return (
		<BudgetContainer>
			<BudgetTitle>Budget</BudgetTitle>

			{!loading && (
				<>
					<BudgetItem fullWidth>
						<BudgetItemTitle>Total</BudgetItemTitle>

						<div
							style={{
								display: 'flex',
								width: '100%',
								justifyContent: 'space-between',
							}}
						>
							<BudgetAmount style={{ textAlign: 'left' }}>
								Remaining: {(totalAmount - totalSpent).toFixed(2)}
							</BudgetAmount>
							<BudgetAmount>
								<BudgetAmount
									color={getColorBySpentAmount(totalSpent, totalAmount)}
								>
									{totalSpent.toFixed(2)}
								</BudgetAmount>
								/ {totalAmount}
							</BudgetAmount>
						</div>
					</BudgetItem>
					<BudgetList>
						{budgets.map(
							({ amount, spent, category_name: category }, index) => {
								return (
									<BudgetItem key={index}>
										<BudgetItemTitle>{category}</BudgetItemTitle>
										<BudgetAmount>
											<BudgetAmount
												color={getColorBySpentAmount(spent, amount)}
											>
												{spent}
											</BudgetAmount>{' '}
											/ {amount}
										</BudgetAmount>
									</BudgetItem>
								);
							},
						)}
					</BudgetList>
				</>
			)}
			{!!loading && <BudgetTitle>Loading...</BudgetTitle>}
		</BudgetContainer>
	);
}
