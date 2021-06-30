
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../auth/LoginFormModal';
import SignUpFormModal from '../auth/SignUpFormModal'
import logo from '../../images/logo.png'
import './NavBar.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user);

  return (
    <nav>
      <ul className='navbar_all_items'>
        <li className='left_navbar'>
          <Link to='/home' exact='true' activeclassname='active'>
            <img src={logo} alt='logo' className='logo_img'></img>
          </Link>
          <Link to='/home' exact='true' activeclassname='active'>
            <h3>Home</h3>
          </Link>
          {/* put component for browse here */}
        </li>
        {/* insert search bar component */}
        <>
        <li className='right_navbar'>
          {user ? 
          <>
          <LogoutButton />
          <button>
            <i className="fas fa-leaf" />
          </button>
          {/* // profile dropdown will go here */}
          </>
          : 
          <>
          {/* modals for logging in and signing up */}
          <SignUpFormModal />
          <LoginFormModal />
          </>
          }
        </li>
        </>
        <li>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
