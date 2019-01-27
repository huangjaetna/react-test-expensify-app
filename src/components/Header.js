// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Header = () => (
//     <header>
//         <h1>Expensify</h1>
//         <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
//         <li><NavLink to="/create" activeClassName="is-active">Add expense</NavLink></li>
//         <li><NavLink to="/edit" activeClassName="is-active">Edit expense</NavLink></li>
//         <li><NavLink to="/help" activeClassName="is-active">Help</NavLink></li>
//     </header>
// );

// export default Header;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

export default Header;
