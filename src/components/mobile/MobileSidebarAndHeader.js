import React from 'react'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import XIcon from '@mui/icons-material/X';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import MovingIcon from '@mui/icons-material/Moving';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import MobileSidebarUser from './MobileSidebarUser';
import Avatar from '@mui/material/Avatar';
import './mobile.css/mobile-sidebar-and-nav.css'
import Page from '../feed/Page';

const MobileSidebarAndHeader = () => {
  const [active, setActive] = React.useState(false);
  const changeState = () => {
    setActive(prevActive => !prevActive);
    console.log(active);
  }
  return (
    <div className='MobileSidebarAndNav'>
      <div className='feed--header'>
        <div className='header--page-info'>
          <Avatar className='header--avatar' onClick={changeState}/>
          <XIcon className='header--twitter-icon' />
          <div className='icon-holder'>
            <SettingsOutlinedIcon className='header--settings' />
          </div>
        </div>
        <div className='header--pages'>
          <Page name='For you' active />
          <Page name='Following' />
        </div>
      </div>
      <div className={`${active ? 'mobile-sidebar--container active' : 'mobile-sidebar--container '}`}>
        <div className={`${active ? 'mobile-sidebar--overlay active' : 'mobile-sidebar--overlay '}`} onClick={changeState}></div>
        <div className={`${active ? 'mobile-sidebar active' : 'mobile-sidebar '}`}>
          <MobileSidebarUser displayName={`Bakare Brilliant`} userName={`bril101`} following={16} followers={`1`} />
          <div className='mobile-sidebar--option'>
            <PersonOutlineIcon />
            <h3>Profile</h3>
          </div>
          <div className='mobile-sidebar--option'>
            <XIcon />
            <h3>Premium</h3>
          </div>
          <div className='mobile-sidebar--option'>
            <ListAltOutlinedIcon />
            <h3>Lists</h3>
          </div>
          <div className='mobile-sidebar--option'>
            <BookmarkBorderOutlinedIcon />
            <h3>Bookmarks</h3>
          </div>
          <div className='mobile-sidebar--option'>
            <PeopleOutlineIcon />
            <h3>Communities</h3>
          </div>
          <div className='mobile-sidebar--option'>
            <LocalAtmOutlinedIcon />
            <h3>Monetization</h3>
          </div>
          <div className='mobile-sidebar--option'>
            <MovingIcon />
            <h3>Ads</h3>
          </div>
          <div className='mobile-sidebar--option'>
            <SettingsOutlinedIcon />
            <h3>Settings and privacy</h3>
          </div>
          <div className='mobile-sidebar--option'>
            <LogoutIcon />
            <h3>log out</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileSidebarAndHeader