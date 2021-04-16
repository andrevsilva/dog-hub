import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import List from './List';
import Cart from './Dogs';

export default () => (
	<Switch>
		<Route path="/list" component={List} />
		<Route path="/cart" component={Cart} />
		<Redirect path="/" to="/list" />
	</Switch>
);
