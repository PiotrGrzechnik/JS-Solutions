import React from 'react';
import { ThemeProvider } from 'styled-components';
import Main from './components/Main';
import { theme } from './style/defaultTheme';
import 'antd/dist/antd.css';

const App: React.FC = () => (
	<ThemeProvider theme={theme}>
		<Main />
	</ThemeProvider>
);

export default App;
