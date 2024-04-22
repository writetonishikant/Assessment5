import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/">Light Dark Mode</Link>
        </li>
        <li>
          <Link to="/firstchallenge">Challenge 1</Link>
        </li>
        <li>
          <Link to="/secondchallenge">Challenge 2</Link>
        </li>
      </ul>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
