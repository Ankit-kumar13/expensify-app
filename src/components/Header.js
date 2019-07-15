import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">create expense</NavLink>
        <NavLink to="/help" activeClassName="is-active"> Help</NavLink>
    </header>
);

export default Header;