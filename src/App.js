import React from 'react';
// import { useEffect, useState } from "react";
import { Router } from 'react-router-dom';
// import { Container } from "reactstrap";
import theme from './themes';
import Routes from './routes';

import { useAuth0 } from '@auth0/auth0-react';
import history from './services/History';
import Loading from './components/Loading';

import { ThemeProvider } from '@material-ui/core/styles';
import { Paper, CssBaseline } from '@material-ui/core';

// import "./App.css";
// import GlobalStyles from "./styles/";

function App() {
	const { isLoading, error } = useAuth0();
	if (isLoading) {
		return <Loading />;
	}
	if (error) {
		return <div>Oops... {error.message}</div>;
	}
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Paper>
				<Router history={history}>
					<div id="app" className="Container">
						{' '}
					</div>
					<Routes />
				</Router>
			</Paper>
		</ThemeProvider>
	);
}
export default App;
