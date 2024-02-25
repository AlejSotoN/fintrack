import { NavContainer, NavItem, PositionContainer } from './navbar.styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { ReactComponent as ExpenseIcon } from '../../assets/icons/expense-icon.svg';
import { ReactComponent as BudgetIcon } from '../../assets/icons/budget.svg';
import { ReactComponent as BankIcon } from '../../assets/icons/bank.svg';
import { ReactComponent as InvestmentIcon } from '../../assets/icons/investment.svg';
import { ReactComponent as DebtIcon } from '../../assets/icons/debt.svg';
export const tabs = [
	{
		name: 'Expenses',
		icon: <ExpenseIcon width={32} height={32} />,
		link: '/expenses',
	},
	{
		name: 'Budget',
		icon: <BudgetIcon width={32} height={32} />,
		link: '/budget',
	},
	{
		name: 'Investments',
		icon: <InvestmentIcon width={32} height={32} />,
		link: '/investment',
	},
	{
		name: 'Debts',
		icon: <DebtIcon width={32} height={32} />,
		link: '/debts',
	},
	{
		name: 'Accounting',
		icon: <BankIcon width={32} height={32} />,
		link: '/accounting',
	},
];
export function Navbar() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	console.log({ pathname });
	return (
		<PositionContainer>
			<NavContainer>
				{tabs.map(({ name, icon, link }, index) => (
					<NavItem
						key={index}
						onClick={() => {
							navigate(link);
						}}
						active={pathname === link}
					>
						{icon}
					</NavItem>
				))}
			</NavContainer>
		</PositionContainer>
	);
}
