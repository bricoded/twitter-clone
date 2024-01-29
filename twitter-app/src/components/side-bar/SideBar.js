import React from 'react'
import SideBarOption from './SideBarOption'
import SideBarUserInfo from './SideBarUserInfo';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import XIcon from '@mui/icons-material/X';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './sidebar-css/sidebar.css'

const SideBar = () => {
  return (
    <div className='sideBar'>
      <div>
        <div className='sideBar--logo'>
          <XIcon />
        </div>
        <div className='sideBarOption--div'>
          <SideBarOption text="Home" Icon={HomeIcon} active />
          <SideBarOption text="Explore" Icon={SearchIcon} />
          <SideBarOption text="Notifications" Icon={NotificationsNoneIcon} />
          <SideBarOption text="Messages" Icon={MailOutlineIcon} />
          <SideBarOption text="Communities" Icon={PeopleOutlineIcon} />
          <SideBarOption text="Premium" Icon={XIcon} />
          <SideBarOption text="Profile" Icon={PersonOutlineIcon} />
          <SideBarOption text="More" Icon={MoreHorizIcon} />
        </div>
        <div className='icon-holder'>
          <SpaOutlinedIcon className='sidebar--post' />
        </div>
        <Button className='sideBar--post-btn'>Post</Button>
      </div>
      <SideBarUserInfo displayName="Bakare Brilliant" userName="bril101" />
    </div>
  )
}

export default SideBar