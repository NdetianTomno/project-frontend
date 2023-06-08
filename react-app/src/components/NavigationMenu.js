import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationMenu = () => {
  return (
    <nav>
      <NavLink
        to="/"
        exact
        className="nav-link"
        activeClassName="active"
      >
        Home
      </NavLink>
      <NavLink
        to="/car-list"
        className="nav-link"
        activeClassName="active"
      >
        Car List
      </NavLink>
      <NavLink
        to="/nairobi-list"
        className="nav-link"
        activeClassName="active"
      >
        Nairobi List
      </NavLink>
      <NavLink
        to="/kisumu-list"
        className="nav-link"
        activeClassName="active"
      >
        Kisumu List
      </NavLink>
      <NavLink
        to="/mombasa-list"
        className="nav-link"
        activeClassName="active"
      >
        Mombasa List
      </NavLink>
    </nav>
  );
};

export default NavigationMenu;
