import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import PropTypes from 'prop-types';

// import Route from "./RouteWrapper";
// import SignIn from "../pages/SignIn";

// import Loading from "../components/Loading";
import Footer from '../components/Footer';
// import NavBar from "../components/NavBar";
import SideBar from '../components/SideBar';
import Topbar from '../components/Topbar';
import Login from '../pages/Login';
import HomePage from '../pages/Home';

import Dashboard from '../pages/Dashboard';
// import Profile from '../pages/Profile';

const DefaultRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) => (
			<>
				<Topbar />
				<Component {...props} />
				<Footer />
			</>
		)}
	/>
);

const AuthRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) => (
			<>
				<SideBar />
				<Component {...props} />
				<Footer />
			</>
		)}
	/>
);

export default function Routes() {
	return (
		<>
			<Switch>
				{/* <Route exact path="/" component={HomePage} /> */}
				<DefaultRoute path="/" component={HomePage} />
				<DefaultRoute path="/login" component={Login} />
				<AuthRoute path="/dashboard" component={Dashboard} />
			</Switch>
		</>
	);
}

// export default function Routes() {
//   return (
// <Switch></
//
//     // <Switch>
//     //   <Route path="/" exact component={Landing} />
//     //   <Route path="/login" component={Login} />

//     //   <Route path="/dashboard" component={Dashboard} isPrivate />
//     //   <Route path="/profile" component={Profile} isPrivate />

//     //   <Route component={Login} />
//     // </Switch>
//   );
// }
