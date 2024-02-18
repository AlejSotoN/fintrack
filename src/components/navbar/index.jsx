import { NavContainer, NavItem } from './navbar.styles';
import { useNavigate, useLocation } from 'react-router-dom';
export const tabs = [
	{
		name: 'Expenses',
		icon: 'src/assets/expense.svg',
		link: '/expenses',
	},
	{
		name: 'Budget',
		icon: 'src/assets/budget.svg',
		link: '/budget',
	},
	{
		name: 'Investments',
		icon: 'src/assets/investment.svg',
		link: '/investment',
	},
	{
		name: 'Debts',
		icon: 'src/assets/debt.svg',
		link: '/debts',
	},
	{
		name: 'Accounting',
		icon: 'src/assets/accounting.svg',
		link: '/accounting',
	},
];
export function Navbar() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	console.log({ pathname });
	return (
		<NavContainer>
			{tabs.map(({ name, icon, link }, index) => (
				<NavItem
					key={index}
					onClick={() => {
						navigate(link);
					}}
					active={pathname === link}
				>
					{name}
				</NavItem>
			))}
		</NavContainer>
	);
}
