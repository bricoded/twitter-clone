import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './mobile-nav.css'

const MobileNav = () => {
  return (
    <div className='mobilenav--nav'>
      <div className='icon-holder'>
        <HomeIcon />
      </div>
      <div className='icon-holder'>
        <SearchIcon />
      </div>
      <div className='icon-holder'>
        <MoreHorizIcon />
      </div>
      <div className='icon-holder'>
        <NotificationsNoneIcon />
      </div>
      <div className='icon-holder'>
        <MailOutlineIcon />
      </div>
    </div>
  )
}

export default MobileNav