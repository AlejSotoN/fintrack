import { ThemeProvider } from 'styled-components';
import { Main } from './containers/Main';

function App() {
	return (
		<div className="App">
			<ThemeProvider
				theme={{
					colors: { primary: 'black' },
					gradient: {
						main: {
							background:
								'linear-gradient(120deg, rgba(48,44,55,1) 0%, rgba(33,46,51,1) 100%)',
						},
					},
				}}
			>
				<Main />
			</ThemeProvider>
		</div>
	);
}

export default App;
