import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify App</h1>
    <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/add" activeClassName="is-active">Add</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
  </header>
);

export default Header;