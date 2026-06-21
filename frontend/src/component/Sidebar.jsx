import React from "react";
import { Link } from "react-router-dom";
import ApiService from "../service/ApiService";

const logout = () => {
  ApiService.logout();
};

const Sidebar = () => {
  const isAuth = ApiService.isAuthenticated();
  const isAdmin = ApiService.isAdmin();

  return (
    <div className="sidebar">
      <h1 className="ims">📦 INVTRACK</h1>
      <ul className="nav-links">
        <li><Link to="/dashboard">🏠 Dashboard</Link></li>

<li><Link to="/transaction">📊 Transactions</Link></li>

{isAdmin && (
  <li><Link to="/category">📂 Categories</Link></li>
)}

{isAdmin && (
  <li><Link to="/product">📦 Products</Link></li>
)}

{isAdmin && (
  <li><Link to="/supplier">🚚 Suppliers</Link></li>
)}

<li><Link to="/purchase">🛒 Purchase</Link></li>

<li><Link to="/sell">💰 Sales</Link></li>

<li><Link to="/profile">👤 Profile</Link></li>

<li>
  <Link onClick={logout} to="/login">
    🚪 Logout
  </Link>
</li>      </ul>
    </div>
  );
};

export default Sidebar;
