import React from 'react';
import { NavLink } from 'react-router-dom';

import { useSelector } from 'react-redux'

import './styles.css';

export default function Header() {

	const length = useSelector(state => state.adoption.length);

	return (
		<nav className="l-header navbar navbar-expand-lg navbar-light bg-light">
			<NavLink to="/list" activeClassName="active" className="navbar-brand">
				DOG<strong>HUB</strong>
			</NavLink>

			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink to="/list" activeClassName="active" className="nav-link">
							DOGS
						</NavLink>
					</li>
				</ul>
			</div>
			<ul className="navbar-nav ml-md-auto">
				<NavLink to="/cart" activeClassName="active" className="nav-item">
					<i className="fa fa-paw fa-3x" style={ {color: "#000"} } aria-hidden="true">
						<span className="fa-counter">{length}</span>
					</i>
				</NavLink>
			</ul>
		</nav>
	);
}
