import React from 'react';
import './widgets-css/widget.css'
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className='widgets--search'>
        <SearchIcon />
        <input type='search' placeholder='Search' />
      </div>
      <div className='widgets--premium'>
        <h3>Subscribe to Premium</h3>
        <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <Button className='primary-button'>Subscribe</Button>
      </div>
      <div className='widgets--copyright'>
        <hr />
        <ul className='footer--nav-list'>
          <li><a href='/'>Terms of Service</a></li>
          <li><a href='/'>Privacy Policy</a></li>
          <li><a href='/'>Cookie Policy</a></li>
          <li><a href='/'>Accesibility</a></li>
          <li><a href='/'>Ads info</a></li>
          <li><a href='/'>More <MoreHorizIcon /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Widgets