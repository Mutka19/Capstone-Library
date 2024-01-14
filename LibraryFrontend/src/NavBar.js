import React from 'react';
import { Link } from 'react-router-dom';
import navStyle from './NavBar.module.css';

export default function NavBar() {
  return (
    <div className={navStyle.navbar}>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/books'>Books</Link></li>
        <li><Link to='/checkin'>Check In</Link></li>
        <li><Link to='/checkout'>Check Out</Link></li>
      </ul>
    </div>
  )
}
