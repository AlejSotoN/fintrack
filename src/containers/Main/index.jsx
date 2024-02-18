import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainContainer } from './Main.styles';
import { Expenses } from '../Expense';
import { Navbar } from '../../components/navbar';
import { Budget } from '../Budget';
export function Main() {
	return (
		<MainContainer>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/expenses" />} />
					<Route path="/expenses" element={<Expenses />} />
					<Route path="/budget" element={<Budget />} />
				</Routes>
				<Navbar />
			</BrowserRouter>
		</MainContainer>
	);
}
