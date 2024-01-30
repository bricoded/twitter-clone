import React from 'react'
import XIcon from '@mui/icons-material/X';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import MovingIcon from '@mui/icons-material/Moving';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import './mobile.css/mobile-sidebar.css'
import MobileSidebarUser from './MobileSidebarUser';
// import { NotificationsActive } from '@mui/icons-material';

const MobileSidebar = () => {
  const [active, setActive] = React.useState(true);
  const changeState = () => {
    setActive(prevActive => !prevActive);
    console.log(active);
  }
  return (
    <div className={`${active ? 'mobile-sidebar--container active' : 'mobile-sidebar--container '}`} onClick={changeState}>
      <div className={`${active ? 'mobile-sidebar--overlay active' : 'mobile-sidebar--overlay '}`}></div>
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
  )
}

export default MobileSidebar