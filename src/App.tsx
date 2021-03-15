import React, { FunctionComponent, memo } from 'react';
import { ThemeProvider } from 'styled-components';
import Main from './components/Main';
import { theme } from './style/defaultTheme';
import 'antd/dist/antd.css';
import './style/icons/line-awesome/line-awesome.min.css';

const App: FunctionComponent = () => (
	<ThemeProvider theme={theme}>
		<Main />
	</ThemeProvider>
);

export default memo(App);
