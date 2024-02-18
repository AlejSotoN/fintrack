import { ThemeProvider } from 'styled-components';
import { Main } from './containers/Main';

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={{ colors: { primary: 'black' } }}>
				<Main />
			</ThemeProvider>
		</div>
	);
}

export default App;
