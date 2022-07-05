import React from 'react';
import './topbar.css';

const TopBar = () => {
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fa-brands fa-facebook'></i>
        <i className='topIcon fa-brands fa-twitter'></i>
        <i className='topIcon fa-brands fa-pinterest'></i>
        <i className='topIcon fa-brands fa-instagram'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>HOME</li>
          <li className='topListItem'>ABOUT</li>
          <li className='topListItem'>CONTACT</li>
          <li className='topListItem'>WRITE</li>
          <li className='topListItem'>LOGOUT</li>
        </ul>
      </div>
      <div className='topRight'>
        <img
          className='topImg'
          src='https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvbWFuJTIwd2l0aCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60'
          alt=''
        />
        <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  );
};

export default TopBar;
